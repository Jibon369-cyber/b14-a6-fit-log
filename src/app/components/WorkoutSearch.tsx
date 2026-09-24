"use client";

import { useState } from "react";
import { WorkoutDataTypes } from "@/types/workout";
import WorkoutGrid from "./WorkoutGrid";

interface WorkoutSearchProps {
  workouts: WorkoutDataTypes[];
}

const WorkoutSearch = ({ workouts }: WorkoutSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWorkouts = workouts.filter((workout) => {
    const search = searchTerm.toLowerCase();

    return (
      workout.name.toLowerCase().includes(search) ||
      workout.muscleGroups.some((muscle) =>
        muscle.toLowerCase().includes(search),
      ) ||
      workout.equipment.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      {/* Search */}
      <div className='mb-8'>
        <input
          type='text'
          placeholder='Search workouts, muscles, equipment...'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className='w-full rounded-full border border-white/10 bg-[#111111] px-5 py-3 text-white outline-none placeholder:text-gray-500 focus:border-[#CCFF00] sm:max-w-md'
        />
      </div>

      {/* Results */}
      {filteredWorkouts.length > 0 ? (
        <WorkoutGrid workouts={filteredWorkouts} />
      ) : (
        <div className='rounded-2xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] px-6 py-16 text-center'>
          <h3 className='text-2xl font-black uppercase'>No Workouts Found</h3>

          <p className='mt-3 text-gray-400'>
            Try searching with another workout name, muscle, or equipment.
          </p>
        </div>
      )}
    </div>
  );
};

export default WorkoutSearch;
