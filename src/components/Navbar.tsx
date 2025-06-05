import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-40 w-full flex justify-between items-center px-4 md:px-10 lg:px-20 xl:px-40 py-5">
      <h2 className="text-white text-2xl xl:text-5xl">
        Dm. <span className="font-thin">Bond</span>
        <span className="text-red-500">.</span>
      </h2>

      <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
        ))}
        <div className="w-[100px] h-[100px] mt-5 md:w-[160px] md:h-[160px] absolute top-0 translate-y-1/2  right-1/2 z-10 translate-x-1/2">
          <Image
            src="/assets/rounded-text.png"
            alt="arrow"
            width={150}
            height={150}
            className="slow-spin"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
