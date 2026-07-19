// Type-safe context display for surfboard recommendations

import type { UserProfile } from '../_lib/types';
import { getRecommendedVolumeRange } from '../_lib/volumeCalc';

interface VolumeResultProps {
  volume: number;
  user?: UserProfile;
}

export function UserProfileSummary({ user }: { user: UserProfile }) {
  return (
    <div className="mt-2 text-sm text-green-700">
      <div>
        <span className="font-semibold">Weight:</span> {user.weightKg} kg
        <span className="mx-2">|</span>
        <span className="font-semibold">Skill:</span> {user.skillLevel}
        <span className="mx-2">|</span>
        <span className="font-semibold">Conditions:</span> {user.conditions}
        <span className="mx-2">|</span>
        <span className="font-semibold">Waves:</span> {user.wavesSurf}
      </div>
      <div>
        <span className="font-semibold">Wave Height:</span> {user.waveHeightFt} ft
        {user.location && (
          <>
            <span className="mx-2">|</span>
            <span className="font-semibold">Location:</span> {user.location}
          </>
        )}
      </div>
    </div>
  );
}

export function VolumeResult({ volume, user }: VolumeResultProps) {
  const showRange = !!user;
  let range: [number, number] | undefined;
  if (showRange && user) {
    range = getRecommendedVolumeRange(user);
  }
  return (
    <section className="my-4 p-4 bg-green-100 rounded shadow font-mono text-lg text-green-900">
      Target Board Volume: <span className="font-bold">{volume} L</span>
      {showRange && range && (
        <span className="block text-green-800 text-base mt-1">
          (Recommended range: <span className="font-semibold">{range[0]} L - {range[1]} L</span>)
        </span>
      )}
      {user && <UserProfileSummary user={user} />}
    </section>
  );
}


