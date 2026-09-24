const Loading = () => {
  return (
    <div className='flex min-h-[60vh] items-center justify-center bg-[#000000]'>
      <div className='flex flex-col items-center gap-5'>
        <div className='h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#CCFF00]' />

        <p className='text-sm font-bold uppercase tracking-[0.2em] text-gray-400'>
          Loading workouts...
        </p>
      </div>
    </div>
  );
};

export default Loading;
