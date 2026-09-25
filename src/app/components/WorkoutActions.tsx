"use client";

import { useFitLog } from "../context/fitlog-context";
import { WorkoutDataTypes } from "@/types/workout";

interface WorkoutActionsProps {
  workout: WorkoutDataTypes;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { plan, saved, addToPlan, saveWorkout, showToast } = useFitLog();

  const alreadyInPlan = plan.some((item) => item.id === workout.id);

  const alreadySaved = saved.some((item) => item.id === workout.id);

  const planIsFull = plan.length >= 5;

  // toast for today's plan btn click
  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      showToast("Already in today's plan");
      return;
    }

    if (planIsFull) {
      showToast("Today's plan is full");
      return;
    }

    addToPlan(workout);

    showToast(`${workout.name} added to today's plan`);
  };

  // toast for save btn click
  const handleSave = () => {
    if (alreadySaved) {
      showToast("Already saved");
      return;
    }

    saveWorkout(workout);

    showToast(`${workout.name} saved for later`);
  };

  return (
    <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
      {/* today's plan btn text condition */}
      <button
        onClick={handleAddToPlan}
        className='rounded-full bg-[#CCFF00] px-6 py-3 font-bold text-black transition hover:bg-[#b8e600] disabled:cursor-not-allowed disabled:opacity-50'>
        {alreadyInPlan
          ? "Already in today's plan"
          : planIsFull
            ? "Plan is full"
            : "Add to today's plan"}
      </button>

      {/* save btn text condition */}
      <button
        onClick={handleSave}
        className='rounded-full border border-[#CCFF00] px-6 py-3 font-bold text-white transition hover:bg-[#CCFF00] hover:text-black disabled:cursor-not-allowed disabled:opacity-50'>
        {alreadySaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;
