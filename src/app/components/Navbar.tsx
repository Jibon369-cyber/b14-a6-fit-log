"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "../context/fitlog-context";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  return (
    <nav className='sticky top-0 z-50 bg-[#000000] text-white border-b border-[#a89191]'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8'>
        {/* Logo */}

        <Link href='/' className='flex items-center gap-2'>
          <Image src='/logo.png' width={30} height={30} alt='FitLog logo' />

          <span className='text-xl font-bold tracking-wider'>FITLOG</span>
        </Link>

        {/* Navigation */}

        <div className='order-3 w-full sm:order-2 sm:w-auto'>
          <ul className='flex justify-center gap-6'>
            <li>
              <Link
                href='/'
                className={`font-semibold transition ${
                  pathname === "/"
                    ? "text-[#CCFF00]"
                    : "text-gray-300 hover:text-[#CCFF00]"
                }`}>
                Workout
              </Link>
            </li>

            <li>
              <Link
                href='/my-plan'
                className={`font-semibold transition ${
                  pathname === "/my-plan"
                    ? "text-[#CCFF00]"
                    : "text-gray-300 hover:text-[#CCFF00]"
                }`}>
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Status badges */}

        <div className='order-2 flex items-center gap-2 sm:order-3'>
          <Link
            href='/my-plan'
            className='rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-bold text-black'>
            Plan {plan.length}
          </Link>

          <Link
            href='/my-plan'
            className='rounded-full border border-[#CCFF00] px-4 py-2 text-sm font-bold text-white'>
            Saved {saved.length}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
