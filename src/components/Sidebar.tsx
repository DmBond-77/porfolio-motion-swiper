'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/constants';
import Link from 'next/link';
import Transition from './Transition';

const Sidebar = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isActive, setIsActive] = useState('Home');
  const [prevPath, setPrevPath] = useState('/');

  const path = usePathname();

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div className="fixed md:right-4 bottom-0 w-full md:top-[40%] z-[20] py-2 md:h-[200px] md:w-[48px] md:rounded-full bg-gradient-to-b from-gray-400 bg-opacity-50 ">
      <AnimatePresence mode="wait">
        {isRouting && <Transition key="page-transition" />}
        <div className="flex md:flex-col gap-5 justify-center items-center h-full w-full">
          {NavLinks.map((link, index) => (
            <Link
              key={`${link.name}-${index}`}
              href={link.link}
              onClick={() => setIsActive(link.name)}
            >
              <link.icon
                className={`w-[28px] h-[28px] ${
                  isActive === link.name ? 'text-orange-500' : 'text-white'
                }`}
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
