import React from 'react';
import { WorkoutDataTypes } from "@/types/workout";
import WorkoutCard from './WorkoutCard';

interface WorkoutGridProps {
  workouts: WorkoutDataTypes[];
}


const WorkoutGrid = ({workouts}: WorkoutGridProps) => { 
    return (
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    );
};

export default WorkoutGrid;