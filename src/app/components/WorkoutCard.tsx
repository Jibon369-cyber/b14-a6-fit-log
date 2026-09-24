import Image from "next/image";
import { WorkoutDataTypes } from "@/types/workout";
import Link from "next/link";

interface WorkoutCardProps {
  workout: WorkoutDataTypes;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div className='overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] shadow-lg transition hover:-translate-y-1'>
      <Link
        href={`/workout/${workout.id}`}
        className='block overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] shadow-lg transition hover:-translate-y-1'>
        {/* Image */}
        <div className='relative h-56'>
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className='object-cover'
          />
        </div>

        {/* Content */}
        <div className='p-5 text-white'>
          <h3 className='text-xl font-bold'>{workout.name}</h3>

          <div className='mt-3 flex flex-wrap gap-2'>
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className='rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-bold text-black'>
                {muscle}
              </span>
            ))}
          </div>

          <p className='mt-2 text-sm text-gray-400'>
            Equipment: {workout.equipment}
          </p>

          <div className='mt-4 flex justify-between text-sm text-gray-300'>
            <span>{workout.duration} min</span>
            <span>{workout.caloriesBurned} kcal</span>
            <span>⭐ {workout.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkoutCard;
