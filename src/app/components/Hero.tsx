import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className='bg-[#080808] px-4 py-6 sm:px-6 lg:px-8'>
      <div className='mx-auto grid max-w-7xl items-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b0f18] via-[#101827] to-[#080b10] px-6 py-12 text-white shadow-2xl sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-20'>
        {/* Hero Content */}
        <div>
          <p className='mb-4 text-sm font-bold tracking-[0.25em] text-[#CCFF00]'>
            WORKOUT LIBRARY
          </p>

          <h1 className='max-w-3xl text-3xl font-black uppercase leading-tight sm:text-2xl lg:text-4xl'>
            Train With Intent. Log Every Set.
          </h1>

          <p className='mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg'>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href='#library'
            className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 font-bold uppercase text-black transition hover:bg-[#b8e600]'>
            Browse Workouts
            <span>→</span>
          </Link>
        </div>

        {/* Hero Image */}
        <div className='relative mt-10 min-h-[280px] overflow-hidden rounded-2xl lg:mt-0 lg:min-h-[420px]'>
          <Image
            src='/banner.png'
            alt='Workout illustration'
            fill
            priority
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
