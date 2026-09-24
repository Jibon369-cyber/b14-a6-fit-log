"use client";

import Image from "next/image";
import Link from "next/link";
import { WorkoutDataTypes } from "@/types/workout";
import { useFitLog } from "../context/fitlog-context";

interface PlanWorkoutCardProps {
  workout: WorkoutDataTypes;
  listType: "plan" | "saved";
}

const PlanWorkoutCard = ({ workout, listType }: PlanWorkoutCardProps) => {
  const { removeFromPlan, removeFromSaved, markAsDone, addToPlan, showToast } =
    useFitLog();

  // Remove workout
  const handleRemove = () => {
    if (listType === "plan") {
      removeFromPlan(workout.id);
      showToast(`${workout.name} removed from today's plan`);
    } else {
      removeFromSaved(workout.id);
      showToast(`${workout.name} removed from saved`);
    }
  };

  // Mark as done
  const handleMarkAsDone = () => {
    markAsDone(workout.id);
    showToast(`${workout.name} marked as done`);
  };

  // Add saved workout to today's plan
  const handleAddToPlan = () => {
    addToPlan(workout);
    showToast(`${workout.name} added to today's plan`);
  };

  return (
    <div className='overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10]'>
      {/* Image */}
      <div className='relative h-52'>
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className='object-cover'
        />
      </div>

      {/* Content */}
      <div className='p-5'>
        {/* Title + Remove */}
        <div className='flex items-start justify-between gap-4'>
          <div>
            <h3 className='text-xl font-black uppercase'>{workout.name}</h3>

            <p className='mt-2 text-sm text-gray-400'>{workout.equipment}</p>
          </div>

          {/* Remove */}
          <button
            onClick={handleRemove}
            className='flex h-8 w-8 items-center justify-center rounded-full text-xl text-gray-500 transition hover:bg-red-500/10 hover:text-red-400'
            aria-label={`Remove ${workout.name}`}>
            ×
          </button>
        </div>

        {/* Stats */}
        <div className='mt-5 flex flex-wrap gap-4 text-sm text-gray-300'>
          <span>⏱ {workout.duration} min</span>

          <span>🔥 {workout.caloriesBurned} kcal</span>

          <span>⭐ {workout.rating}</span>
        </div>

        {/* Actions */}
        <div className='mt-5 flex flex-col gap-2 sm:flex-row'>
          {/* View Details */}
          <Link
            href={`/workout/${workout.id}`}
            className='rounded-full border border-white/20 px-4 py-2 text-center text-sm font-bold transition hover:border-[#CCFF00] hover:text-[#CCFF00]'>
            View Details
          </Link>

          {/* Plan Actions */}
          {listType === "plan" ? (
            <button
              onClick={handleMarkAsDone}
              className='rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#b8e600]'>
              Mark as Done
            </button>
          ) : (
            <button
              onClick={handleAddToPlan}
              className='rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#b8e600]'>
              Add to Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;
