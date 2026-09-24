import { WorkoutDataTypes } from "@/types/workout";
import Image from "next/image";
import WorkoutActions from "@/app/components/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<WorkoutDataTypes> => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  return response.json();
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className='min-h-screen bg-[#080808] px-4 py-12 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] lg:grid-cols-2'>
          {/* Image */}
          <div className='relative min-h-[350px] lg:min-h-[600px]'>
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className='object-cover'
            />
          </div>

          {/* Details */}
          <div className='p-6 sm:p-10'>
            {/* Muscle Groups */}
            <div className='flex flex-wrap gap-2'>
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className='rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-bold text-black'>
                  {muscle}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className='mt-5 text-3xl font-black uppercase sm:text-4xl'>
              {workout.name}
            </h1>

            {/* Description */}
            <p className='mt-5 leading-7 text-gray-400'>
              {workout.description}
            </p>

            {/* Specs */}
            <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4'>
              <div className='rounded-xl bg-[#080808] p-4'>
                <p className='text-xs text-gray-500'>Duration</p>
                <p className='mt-1 font-bold'>{workout.duration} min</p>
              </div>

              <div className='rounded-xl bg-[#080808] p-4'>
                <p className='text-xs text-gray-500'>Calories</p>
                <p className='mt-1 font-bold'>{workout.caloriesBurned} kcal</p>
              </div>

              <div className='rounded-xl bg-[#080808] p-4'>
                <p className='text-xs text-gray-500'>Sets</p>
                <p className='mt-1 font-bold'>{workout.sets}</p>
              </div>

              <div className='rounded-xl bg-[#080808] p-4'>
                <p className='text-xs text-gray-500'>Reps</p>
                <p className='mt-1 font-bold'>{workout.reps}</p>
              </div>
            </div>

            {/* Equipment */}
            <div className='mt-6'>
              <p className='text-sm text-gray-500'>Equipment</p>
              <p className='mt-1 font-semibold'>{workout.equipment}</p>
            </div>

            {/* Instructions */}
            <div className='mt-8'>
              <h2 className='text-xl font-bold uppercase'>Instructions</h2>

              <ol className='mt-4 space-y-3'>
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className='flex gap-3 text-sm leading-6 text-gray-400'>
                    <span className='font-bold text-[#CCFF00]'>
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <WorkoutActions workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
