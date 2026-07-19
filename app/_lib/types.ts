
export interface Surfboard {
  id: string;
  brand: string;
  model: string;
  volume: number;
  lengthFt: number;
  minWaveFt: number;
  maxWaveFt: number;
  idealConditions: ('small-mushy' | 'average' | 'large-powerful' | 'glassy' | 'steep-hollow' | 'barrels')[];
  idealBreaks: ('beach-break' | 'point-break' | 'reef-break' | 'slab')[];
}

export interface UserProfile {
  weightKg: number;
  skillLevel: 'beginner' | 'early-intermediate' | 'intermediate' | 'advanced' | 'expert';
  wavesSurf: 'beach-break' | 'point-break' | 'reef-break' | 'slab';
  location: string;
  waveHeightFt: number;
  conditions: 'small-mushy' | 'average' | 'large-powerful' | 'glassy' | 'steep-hollow' | 'barrels';
}
  // You may consider adding more board attributes here in future, e.g., boardType, tailShape, finSetup, etc.

export interface BoardMatchScoreBreakdown {
  volumeScore: number;
  skillScore: number;
  conditionScore: number;
  waveHeightPenalty: number;
  totalScore: number;
}
  
  