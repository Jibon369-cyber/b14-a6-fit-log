"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "../context/fitlog-context";
import PlanWorkoutCard from "../components/PlanWorkoutCard";

type SortOption = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  // Current tab list
  const currentList = activeTab === "plan" ? plan : saved;

  // Metrics
  const totalExercises = currentList.length;

  const totalMinutes = currentList.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentList.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // Sorting
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  return (
    <main className='min-h-screen bg-[#080808] px-4 py-12 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-black uppercase sm:text-4xl'>My Plan</h1>

          <p className='mt-3 text-gray-400'>
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className='mt-8 grid gap-4 sm:grid-cols-3'>
          <div className='rounded-2xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] p-6'>
            <p className='text-sm text-gray-500'>Exercises</p>

            <p className='mt-2 text-3xl font-black'>{totalExercises}</p>
          </div>

          <div className='rounded-2xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] p-6'>
            <p className='text-sm text-gray-500'>Minutes</p>

            <p className='mt-2 text-3xl font-black'>{totalMinutes}</p>
          </div>

          <div className='rounded-2xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] p-6'>
            <p className='text-sm text-gray-500'>Calories</p>

            <p className='mt-2 text-3xl font-black'>{totalCalories}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className='mt-10 flex gap-2 border-b border-white/10'>
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-3 text-sm font-bold uppercase transition ${
              activeTab === "plan"
                ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
                : "text-gray-400 hover:text-white"
            }`}>
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-3 text-sm font-bold uppercase transition ${
              activeTab === "saved"
                ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
                : "text-gray-400 hover:text-white"
            }`}>
            Saved
          </button>
        </div>

        {/* Sort */}
        <div className='mt-6 flex items-center justify-end gap-3'>
          <label htmlFor='sort' className='text-sm font-semibold text-gray-400'>
            Sort By
          </label>

          <div className='relative'>
            <select
              id='sort'
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortOption)}
              className='appearance-none rounded-full border border-white/10 bg-[#111111] py-2 pl-4 pr-10 text-sm font-semibold text-white outline-none transition focus:border-[#CCFF00]'>
              <option value='duration'>Duration</option>

              <option value='calories'>Calories</option>

              <option value='rating'>Rating</option>
            </select>

            {/* Chevron */}
            <svg
              className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'>
              <path
                fillRule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>

        {/* Empty State / Workout List */}
        {currentList.length === 0 ? (
          <div className='mt-8 rounded-2xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] px-6 py-20 text-center'>
            <h2 className='text-2xl font-black uppercase'>Nothing Here Yet</h2>

            <p className='mt-3 text-gray-400'>
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href='/'
              className='mt-6 inline-block rounded-full bg-[#CCFF00] px-6 py-3 font-bold text-black transition hover:bg-[#b8e600]'>
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {sortedList.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                listType={activeTab}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
