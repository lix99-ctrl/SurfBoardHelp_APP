// --- Improved, context-aware recommendBoard logic ---

import type { UserProfile, Surfboard } from './types';
import { getBoardMatchScore } from './volumeCalc';
import { SURFBOARDS } from './data'; // Import your full 50+ board database


export function recommendBoard(user: UserProfile, count: number = 3): Surfboard[] {
  const boardsWithScores = SURFBOARDS.map((board) => ({
    ...board,
    score: getBoardMatchScore(board, user),
  }));

  // Lower score = better match
  boardsWithScores.sort((a, b) => a.score - b.score);

  return boardsWithScores.slice(0, count).map((item) => {
    const { score, ...rest } = item;
    return rest;
  });
}
