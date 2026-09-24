"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { WorkoutDataTypes } from "@/types/workout";

interface FitLogContextType {
  plan: WorkoutDataTypes[];
  saved: WorkoutDataTypes[];

  addToPlan: (workout: WorkoutDataTypes) => void;
  saveWorkout: (workout: WorkoutDataTypes) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  showToast: (message: string) => void;
}

const FitLogContext = createContext<FitLogContextType | null>(null);

export const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<WorkoutDataTypes[]>([]);
  const [saved, setSaved] = useState<WorkoutDataTypes[]>([]);

  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const addToPlan = (workout: WorkoutDataTypes) => {
    setPlan((previousPlan) => {
      if (previousPlan.length >= 5) {
        return previousPlan;
      }

      const alreadyExists = previousPlan.some((item) => item.id === workout.id);

      if (alreadyExists) {
        return previousPlan;
      }

      return [...previousPlan, workout];
    });
  };

  const saveWorkout = (workout: WorkoutDataTypes) => {
    setSaved((previousSaved) => {
      const alreadyExists = previousSaved.some(
        (item) => item.id === workout.id,
      );

      if (alreadyExists) {
        return previousSaved;
      }

      return [...previousSaved, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((workout) => workout.id !== id),
    );
  };

  const removeFromSaved = (id: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter((workout) => workout.id !== id),
    );
  };

  const markAsDone = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((workout) => workout.id !== id),
    );
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  useEffect(() => {
    if (!toastVisible) {
      return;
    }

    const timer = setTimeout(() => {
      setToastVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [toastVisible]);

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        showToast,
      }}>
      {children}

      {/* Toast */}
      {toastVisible && (
        <div className='fixed right-5 top-20 z-[9999]'>
          <div className='flex items-center gap-3 rounded-xl border border-[#CCFF00]/30 bg-[#111827] px-5 py-4 text-sm font-semibold text-white shadow-2xl'>
            <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] font-black text-black'>
              ✓
            </span>

            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
