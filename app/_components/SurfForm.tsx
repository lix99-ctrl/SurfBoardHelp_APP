import { useState } from "react";
import type { UserProfile, Surfboard } from "../_lib/types";
import { recommendBoard } from "../_lib/recommend";
import { BoardListWithScores } from "./BoardList";

/**
 * SurfForm provides a UI for entering a user profile,
 * and displays the top board recommendations using the context-aware engine.
 */
export default function SurfForm() {
  // Form state management for all UserProfile fields
  const [weightKg, setWeightKg] = useState<number>(70);
  const [skillLevel, setSkillLevel] = useState<UserProfile["skillLevel"]>("beginner");
  const [wavesSurf, setWavesSurf] = useState<UserProfile["wavesSurf"]>("beach-break");
  const [location, setLocation] = useState<string>("");
  const [waveHeightFt, setWaveHeightFt] = useState<number>(4);
  const [conditions, setConditions] = useState<UserProfile["conditions"]>("average");

  // Surfboard recommendation result state
  const [recommendations, setRecommendations] = useState<Surfboard[] | null>(null);
  const [recommendContext, setRecommendContext] = useState<UserProfile | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userProfile: UserProfile = {
      weightKg,
      skillLevel,
      wavesSurf,
      location,
      waveHeightFt,
      conditions,
    };
    setRecommendContext(userProfile);
    setRecommendations(recommendBoard(userProfile, 3));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <label className="block">
          Weight (kg):
          <input
            type="number"
            value={weightKg}
            min={30}
            max={200}
            step={0.1}
            onChange={e => setWeightKg(Number(e.target.value))}
            className="ml-2 p-1 border rounded"
            required
          />
        </label>

        <label className="block">
          Skill Level:
          <select
            value={skillLevel}
            onChange={e => setSkillLevel(e.target.value as UserProfile["skillLevel"])}
            className="ml-2 p-1 border rounded"
          >
            <option value="beginner">Beginner</option>
            <option value="early-intermediate">Early Intermediate</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </label>

        <label className="block">
          Type of Waves Surfed:
          <select
            value={wavesSurf}
            onChange={e => setWavesSurf(e.target.value as UserProfile["wavesSurf"])}
            className="ml-2 p-1 border rounded"
          >
            <option value="beach-break">Beach Break</option>
            <option value="point-break">Point Break</option>
            <option value="reef-break">Reef Break</option>
            <option value="slab">Slab / Heavy Ledge</option>
          </select>
        </label>

        <label className="block">
          Location:
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="ml-2 p-1 border rounded"
            placeholder="Enter your surf spot or city"
          />
        </label>

        <label className="block">
          Typical Wave Height:
          <select
            value={waveHeightFt}
            onChange={e => setWaveHeightFt(Number(e.target.value))}
            className="ml-2 p-1 border rounded"
          >
            <option value={2}>2 ft (Small / Grovel)</option>
            <option value={4}>4 ft (Standard)</option>
            <option value={6}>6 ft (Overhead / Performance)</option>
            <option value={10}>10 ft (Double Overhead)</option>
            <option value={12}>12 ft (Extreme / Step-up)</option>
            <option value={15}>15+ ft (Massive / Gun)</option>
          </select>
        </label>

        <label className="block">
          Typical Conditions:
          <select
            value={conditions}
            onChange={e => setConditions(e.target.value as UserProfile["conditions"])}
            className="ml-2 p-1 border rounded"
          >
            <option value="small-mushy">Small & Mushy</option>
            <option value="average">Average</option>
            <option value="large-powerful">Large & Powerful</option>
            <option value="glassy">Glassy & Clean</option>
            <option value="steep-hollow">Steep & Hollow</option>
            <option value="barrels">Barrels / Tubing</option>
          </select>
        </label>

        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
          Get Recommendations
        </button>
      </form>

      {recommendations && recommendContext && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Top Board Recommendations</h2>
          <BoardListWithScores boards={recommendations} user={recommendContext} />
        </div>
      )}
    </div>
  );
}
