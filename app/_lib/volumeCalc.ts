import type { UserProfile, Surfboard } from './types';

/**
 * Calculate recommended surfboard volume range based on context-aware user profile.
 */
export function getRecommendedVolumeRange(user: UserProfile): [number, number] {
  const skillFactor: Record<UserProfile['skillLevel'], [number, number]> = {
    beginner: [0.45, 0.55],
    'early-intermediate': [0.42, 0.5],
    intermediate: [0.38, 0.46],
    advanced: [0.32, 0.40],
    expert: [0.29, 0.36],
  };

  let [low, high] = skillFactor[user.skillLevel];

  // Contextual adjustments for conditions
  if (user.conditions === 'small-mushy' || user.conditions === 'glassy') {
    low += 0.02;
    high += 0.04;
  }
  if (['large-powerful', 'steep-hollow', 'barrels'].includes(user.conditions)) {
    low -= 0.03;
    high -= 0.05;
  }

  // Wave break adjustments
  if (user.wavesSurf === 'reef-break' || user.wavesSurf === 'slab') {
    low += 0.01;
    high += 0.01;
  }
  if (user.wavesSurf === 'point-break') {
    low -= 0.01;
    high -= 0.01;
  }

  // 6-Tier Wave Height volume adjustments
  if (user.waveHeightFt >= 15) {
    low -= 0.12; high -= 0.12; // Gun territory, heavily drop volume ratio
  } else if (user.waveHeightFt >= 12) {
    low -= 0.10; high -= 0.10;
  } else if (user.waveHeightFt >= 10) {
    low -= 0.08; high -= 0.08;
  } else if (user.waveHeightFt >= 6) {
    low -= 0.05; high -= 0.05;
  } else if (user.waveHeightFt <= 2) {
    low += 0.05; high += 0.05; // Grovel territory, add float
  }

  low = Math.max(0.2, low);
  high = Math.max(0.25, high);

  const recLow = Math.round(user.weightKg * low * 10) / 10;
  const recHigh = Math.round(user.weightKg * high * 10) / 10;
  return [recLow, recHigh];
}

/**
 * Calculates a match score utilizing the new database properties (minWaveFt, maxWaveFt, idealConditions, idealBreaks).
 * Lower score = better match.
 */
export function getBoardMatchScore(board: Surfboard, user: UserProfile): number {
  // 1. Volume match
  const [low, high] = getRecommendedVolumeRange(user);
  const center = (low + high) / 2;
  const volDist = Math.abs(board.volume - center);
  const range = Math.max(1, (high - low) / 2);
  const volumeScore = volDist / range;

  // 2. Wave Height Tier Impact (Checkpoints: 2, 4, 6, 10, 12, 15+)
  let heightPenalty = 0;
  if (user.waveHeightFt < board.minWaveFt) {
    heightPenalty += 2.0; // Board is too small/weak for this surf
  } else if (user.waveHeightFt > board.maxWaveFt) {
    heightPenalty += 3.5; // Board is under-gunned for massive surf
  }

  // 3. Condition Compatibility Check (Glassy, Steep-Hollow, Barrels, etc.)
  let conditionPenalty = 0;
  if (board.idealConditions && !board.idealConditions.includes(user.conditions)) {
    conditionPenalty = 1.5;
  }

  // 4. Surf Break Compatibility Check
  let breakPenalty = 0;
  if (board.idealBreaks && !board.idealBreaks.includes(user.wavesSurf)) {
    breakPenalty = 1.0;
  }

  // Weighted total score (Volume is core factor, penalties guide context)
  return (volumeScore * 2.0) + heightPenalty + conditionPenalty + breakPenalty;
}

