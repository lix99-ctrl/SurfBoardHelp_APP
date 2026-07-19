// Provide context-aware match scoring with user profile if possible. 
// This renders score tags beneath each BoardCard if user info is provided.
import type { UserProfile } from '../_lib/types';
import { BoardMatchScoreTag } from './BoardCard';

interface EnhancedProps extends Props {
  user?: UserProfile;
}

export function BoardListWithScores({ boards, user }: EnhancedProps) {
  return (
    <section className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {boards.map((board) => (
        <div key={board.model}>
          <BoardCard board={board} />
          {user && (
            <div className="mt-2">
              <BoardMatchScoreTag board={board} user={user} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}


import type { Surfboard } from '../_lib/types';
import BoardCard from './BoardCard';

interface Props {
  boards: Surfboard[];
}

// Simple BoardList (no user profile, so no scores)
export default function BoardList({ boards }: Props) {
  return (
    <section className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {boards.map((board) => (
        <BoardCard key={board.model} board={board} />
      ))}
    </section>
  );
}




