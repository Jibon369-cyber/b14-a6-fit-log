import Image from "next/image";

const Footer = () => {
  return (
    <footer className='border-t border-white/10 bg-[#080808] text-white'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8'>
        {/* logo */}
        <div className='flex items-center gap-3'>
          <Image
            src='/logo.png'
            width={30}
            height={30}
            alt='FitLog logo'
            className='object-contain'
          />

          <span className='text-xl font-black tracking-wider'>FITLOG</span>
        </div>

        {/* Copyright paragraph */}
        <p className='text-center text-sm text-gray-500 md:text-right'>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
