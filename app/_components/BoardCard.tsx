import React from 'react';
import type { Surfboard, UserProfile } from '../_lib/types';
import { getBoardMatchScore } from '../_lib/volumeCalc';

interface BoardCardProps {
  board: Surfboard;
  user?: UserProfile;
}

interface MatchProps {
  board: Surfboard;
  user: UserProfile;
}

export function BoardMatchScoreTag({ board, user }: MatchProps) {
  // Lower score = better match
  const score = getBoardMatchScore(board, user);

  // Simple color: green (good), yellow (ok), red (poor)
  let color = 'gray';
  if (score < 5) color = 'green';
  else if (score < 12) color = 'yellow';
  else color = 'red';

  // Tailwind dynamic color class limitation workaround:
  // Only allow the three colors. Fallback if out of range
  const colorClasses: Record<string, string> = {
    green: 'bg-green-100 text-green-900',
    yellow: 'bg-yellow-100 text-yellow-900',
    red: 'bg-red-100 text-red-900',
    gray: 'bg-gray-100 text-gray-900',
  };

  return (
    <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${colorClasses[color]}`}>
      Match score: {score}
    </div>
  );
}

export default function BoardCard({ board, user }: BoardCardProps) {
  return (
    <div className="border rounded shadow-sm p-4 flex flex-col gap-2 bg-white">
      <div className="font-bold text-lg">{board.brand}</div>
      <div className="font-bold text-lg">{board.model}</div>
      <div className="text-gray-700 text-sm">
        Volume: <span className="font-mono">{board.volume}L</span>
      </div>
      <div className="text-gray-700 text-sm">
        Length: <span className="font-mono">{board.lengthFt}'</span>
      </div>
      {user && (
        <div className="mt-2">
          <BoardMatchScoreTag board={board} user={user} />
        </div>
      )}
    </div>
  );
}

