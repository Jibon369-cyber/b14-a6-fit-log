import Hero from "./components/Hero";
import WorkoutSearch from "./components/WorkoutSearch";

const HomePage = async () => {
  const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }

    return res.json();
  };

  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <section
        id='library'
        className='min-h-screen bg-[#000000] px-4 py-16 text-white'>
        <div className='mx-auto max-w-7xl'>

          <h2 className='mt-2 text-3xl font-black uppercase sm:text-4xl'>
            The Library
          </h2>

          <p className='mt-3 text-gray-400'>
            Twelve lifts covering every major muscle group.
          </p>

          <div className='mt-10'>
            <WorkoutSearch workouts={workouts} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
