import type { Surfboard } from './types';

export const SURFBOARDS: Surfboard[] = [
  // --- Grovelers & Small Wave / Small-Mushy / Glassy ---
  { id: '1', brand: 'Lost', model: 'Sub Driver 2.0', volume: 30, lengthFt: 5.10, minWaveFt: 1, maxWaveFt: 5, idealConditions: ['small-mushy', 'average', 'glassy'], idealBreaks: ['beach-break', 'point-break'] },
  { id: '2', brand: 'Firewire', model: 'Dominator 2.0', volume: 38, lengthFt: 6.0, minWaveFt: 1, maxWaveFt: 4, idealConditions: ['small-mushy', 'average', 'glassy'], idealBreaks: ['beach-break', 'point-break'] },
  { id: '3', brand: 'Channel Islands', model: 'CI Fish', volume: 35, lengthFt: 5.6, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['small-mushy', 'glassy'], idealBreaks: ['point-break', 'reef-break'] },
  { id: '4', brand: 'Pyzel', model: 'White Tiger', volume: 33, lengthFt: 5.8, minWaveFt: 1, maxWaveFt: 4, idealConditions: ['small-mushy', 'average'], idealBreaks: ['beach-break'] },
  { id: '5', brand: 'JS Industries', model: 'XERO Gravity', volume: 31, lengthFt: 5.11, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['average', 'glassy'], idealBreaks: ['beach-break', 'point-break'] },
  { id: '6', brand: 'Rusty', model: 'Dwart', volume: 36, lengthFt: 5.5, minWaveFt: 1, maxWaveFt: 4, idealConditions: ['small-mushy'], idealBreaks: ['beach-break'] },
  { id: '7', brand: 'Al Merrick', model: 'Neck Beard 3', volume: 34, lengthFt: 5.7, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['small-mushy', 'average', 'glassy'], idealBreaks: ['beach-break'] },
  { id: '8', brand: 'Lost', model: 'Puddle Jumper HP', volume: 39, lengthFt: 5.8, minWaveFt: 1, maxWaveFt: 3, idealConditions: ['small-mushy'], idealBreaks: ['beach-break', 'reef-break'] },
  { id: '9', brand: 'Firewire', model: 'Seaside', volume: 37, lengthFt: 5.5, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['small-mushy', 'glassy', 'average'], idealBreaks: ['point-break', 'reef-break'] },
  { id: '10', brand: 'Sharp Eye', model: 'Modern 2', volume: 32, lengthFt: 5.9, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['average', 'glassy'], idealBreaks: ['beach-break'] },

  // --- All-Rounders / Average Conditions ---
  { id: '11', brand: 'Channel Islands', model: 'Happy Everyday', volume: 32, lengthFt: 5.10, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['average', 'glassy', 'steep-hollow'], idealBreaks: ['beach-break', 'point-break'] },
  { id: '12', brand: 'Pyzel', model: 'Ghost', volume: 30, lengthFt: 6.0, minWaveFt: 4, maxWaveFt: 10, idealConditions: ['large-powerful', 'steep-hollow', 'barrels'], idealBreaks: ['reef-break', 'slab', 'beach-break'] },
  { id: '13', brand: 'JS Industries', model: 'Monsta 2020', volume: 29, lengthFt: 6.0, minWaveFt: 3, maxWaveFt: 8, idealConditions: ['large-powerful', 'steep-hollow', 'barrels'], idealBreaks: ['beach-break', 'point-break'] },
  { id: '14', brand: 'Lost', model: 'Driver 2.0', volume: 28, lengthFt: 6.0, minWaveFt: 3, maxWaveFt: 8, idealConditions: ['large-powerful', 'steep-hollow', 'barrels'], idealBreaks: ['beach-break', 'reef-break'] },
  { id: '15', brand: 'DHD', model: 'Phoenix', volume: 35, lengthFt: 5.10, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['average', 'glassy'], idealBreaks: ['beach-break', 'point-break'] },
  { id: '16', brand: 'Stab', model: 'In The Dark', volume: 31, lengthFt: 5.11, minWaveFt: 3, maxWaveFt: 7, idealConditions: ['average', 'steep-hollow'], idealBreaks: ['beach-break'] },
  { id: '17', brand: 'Superbrand', model: 'Mad To Die', volume: 33, lengthFt: 5.10, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['average'], idealBreaks: ['beach-break'] },
  { id: '18', brand: 'Tokoro', model: 'Hex', volume: 29, lengthFt: 6.1, minWaveFt: 3, maxWaveFt: 8, idealConditions: ['large-powerful', 'barrels'], idealBreaks: ['reef-break'] },
  { id: '19', brand: 'Mayhem', model: 'Round Nose Fish', volume: 36, lengthFt: 5.8, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['small-mushy', 'average'], idealBreaks: ['point-break'] },
  { id: '20', brand: 'Firewire', model: 'Sci-Fi 2.0', volume: 33, lengthFt: 5.10, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['average', 'glassy', 'steep-hollow'], idealBreaks: ['beach-break', 'point-break'] },

  // --- High Performance & Barrels (6ft - 10ft) ---
  { id: '21', brand: 'Pyzel', model: 'Shadow', volume: 29, lengthFt: 6.0, minWaveFt: 3, maxWaveFt: 8, idealConditions: ['steep-hollow', 'barrels', 'large-powerful'], idealBreaks: ['reef-break', 'beach-break'] },
  { id: '22', brand: 'Channel Islands', model: 'Proton', volume: 27, lengthFt: 6.1, minWaveFt: 4, maxWaveFt: 10, idealConditions: ['large-powerful', 'barrels', 'steep-hollow'], idealBreaks: ['reef-break', 'slab'] },
  { id: '23', brand: 'JS Industries', model: 'Big Baron', volume: 45, lengthFt: 6.8, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['small-mushy', 'glassy'], idealBreaks: ['point-break'] },
  { id: '24', brand: 'Rusty', model: 'Sheisty', volume: 30, lengthFt: 5.11, minWaveFt: 3, maxWaveFt: 7, idealConditions: ['steep-hollow', 'barrels'], idealBreaks: ['beach-break'] },
  { id: '25', brand: 'Tokoro', model: 'Pro', volume: 28, lengthFt: 6.2, minWaveFt: 4, maxWaveFt: 10, idealConditions: ['large-powerful', 'barrels'], idealBreaks: ['reef-break', 'slab'] },
  { id: '26', brand: 'DHD', model: 'DNA', volume: 28, lengthFt: 6.0, minWaveFt: 3, maxWaveFt: 8, idealConditions: ['steep-hollow', 'barrels', 'large-powerful'], idealBreaks: ['beach-break', 'reef-break'] },
  { id: '27', brand: 'Lost', model: 'SMOOTH OPERATOR', volume: 48, lengthFt: 7.6, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['small-mushy', 'glassy'], idealBreaks: ['point-break'] },
  { id: '28', brand: 'Channel Islands', model: 'Two Happy', volume: 29, lengthFt: 6.0, minWaveFt: 3, maxWaveFt: 8, idealConditions: ['steep-hollow', 'barrels', 'large-powerful'], idealBreaks: ['beach-break', 'reef-break'] },
  { id: '29', brand: 'Pyzel', model: 'Mini Ghost', volume: 32, lengthFt: 5.6, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['average', 'steep-hollow'], idealBreaks: ['beach-break'] },
  { id: '30', brand: 'Firewire', model: 'Sunday', volume: 42, lengthFt: 6.8, minWaveFt: 1, maxWaveFt: 5, idealConditions: ['small-mushy', 'glassy'], idealBreaks: ['point-break'] },

  // --- Big Wave Guns & Step Ups (10ft - 15ft+) ---
  { id: '31', brand: 'Pyzel', model: 'Commander (Gun)', volume: 38, lengthFt: 7.6, minWaveFt: 8, maxWaveFt: 15, idealConditions: ['large-powerful', 'barrels', 'steep-hollow'], idealBreaks: ['reef-break', 'slab'] },
  { id: '32', brand: 'Channel Islands', model: 'WFO Step-Up', volume: 33, lengthFt: 6.8, minWaveFt: 6, maxWaveFt: 12, idealConditions: ['large-powerful', 'barrels'], idealBreaks: ['reef-break', 'slab'] },
  { id: '33', brand: 'JS Industries', model: 'Forget Me Not 3', volume: 30, lengthFt: 6.4, minWaveFt: 5, maxWaveFt: 10, idealConditions: ['large-powerful', 'steep-hollow', 'barrels'], idealBreaks: ['reef-break', 'beach-break'] },
  { id: '34', brand: 'Lost', model: 'Crocket Step-Up', volume: 34, lengthFt: 6.6, minWaveFt: 6, maxWaveFt: 12, idealConditions: ['large-powerful', 'barrels'], idealBreaks: ['reef-break', 'slab'] },
  { id: '35', brand: 'Tokoro', model: 'Gun 8.0', volume: 42, lengthFt: 8.0, minWaveFt: 10, maxWaveFt: 20, idealConditions: ['large-powerful', 'barrels'], idealBreaks: ['reef-break', 'slab'] },
  { id: '36', brand: 'DHD', model: 'Sweet Spot 3.0', volume: 32, lengthFt: 6.6, minWaveFt: 5, maxWaveFt: 10, idealConditions: ['large-powerful', 'steep-hollow'], idealBreaks: ['beach-break', 'reef-break'] },
  { id: '37', brand: 'Patagonia', model: 'River Mouth Surfboard', volume: 65, lengthFt: 9.0, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['small-mushy', 'glassy'], idealBreaks: ['point-break'] },
  { id: '38', brand: 'Channel Islands', model: 'Panther Modern', volume: 34, lengthFt: 5.11, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['average', 'glassy'], idealBreaks: ['beach-break'] },
  { id: '39', brand: 'Firewire', model: 'Rapidfire', volume: 31, lengthFt: 5.10, minWaveFt: 3, maxWaveFt: 7, idealConditions: ['steep-hollow', 'barrels'], idealBreaks: ['beach-break'] },
  { id: '40', brand: 'Pyzel', model: 'Whiteout', volume: 29, lengthFt: 6.0, minWaveFt: 3, maxWaveFt: 8, idealConditions: ['average', 'steep-hollow'], idealBreaks: ['beach-break'] },

  // --- Midlengths and Alternative Shapes ---
  { id: '41', brand: 'Channel Islands', model: 'Mid', volume: 44, lengthFt: 7.0, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['small-mushy', 'glassy', 'average'], idealBreaks: ['point-break', 'reef-break'] },
  { id: '42', brand: 'Torq', model: 'Chancho', volume: 52, lengthFt: 7.6, minWaveFt: 1, maxWaveFt: 4, idealConditions: ['small-mushy'], idealBreaks: ['beach-break', 'point-break'] },
  { id: '43', brand: 'GMT', model: 'Midlength Tracker', volume: 46, lengthFt: 7.2, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['small-mushy', 'glassy'], idealBreaks: ['point-break'] },
  { id: '44', brand: 'Firewire', model: 'Midas', volume: 37, lengthFt: 5.8, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['average', 'glassy'], idealBreaks: ['beach-break', 'point-break'] },
  { id: '45', brand: 'Lost', model: 'Hydra', volume: 38, lengthFt: 5.6, minWaveFt: 1, maxWaveFt: 4, idealConditions: ['small-mushy', 'average'], idealBreaks: ['beach-break'] },
  { id: '46', brand: 'JS Industries', model: 'Sub Xero', volume: 35, lengthFt: 5.8, minWaveFt: 1, maxWaveFt: 4, idealConditions: ['small-mushy', 'average'], idealBreaks: ['beach-break'] },
  { id: '47', brand: 'Rusty', model: 'T-Dot', volume: 39, lengthFt: 6.0, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['average'], idealBreaks: ['beach-break'] },
  { id: '48', brand: 'Pyzel', model: 'Phantom', volume: 30, lengthFt: 5.10, minWaveFt: 2, maxWaveFt: 6, idealConditions: ['average', 'steep-hollow'], idealBreaks: ['beach-break', 'reef-break'] },
  { id: '49', brand: 'Channel Islands', model: 'Rocket Wide', volume: 33, lengthFt: 5.8, minWaveFt: 2, maxWaveFt: 5, idealConditions: ['small-mushy', 'average', 'glassy'], idealBreaks: ['beach-break'] },
  { id: '50', brand: 'Bing', model: 'Silver Spoon', volume: 72, lengthFt: 9.4, minWaveFt: 1, maxWaveFt: 4, idealConditions: ['small-mushy', 'glassy'], idealBreaks: ['point-break'] }
];