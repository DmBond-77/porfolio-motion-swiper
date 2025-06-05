import Particle from '@/components/Particle';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
export default function Home() {
  return (
    <>
      <main className="flex  h-screen relative items-center bg-cover bg-[url('/assets/bg-explosion.png')]">
        <div className="absolute top-0 right-0 w-full h-full z-0">
          <Particle />
        </div>
        <Sidebar />
        <div className="absolute right-10 bottom-0 md:right-40 ">
          <Image
            src="/assets/MoustacheMan.png"
            alt="MoustacheMan"
            width={500}
            height={500}
            className="w-[400px] md:w-[500px] h-[400px] md:h-[500px]"
          />
        </div>
        <Image
          src="/assets/top-left-img.png"
          alt="Logo"
          width={250}
          height={250}
          className="absolute top-0 left-0 "
        />
        <div className="flex flex-col items-center xl:pl-40 sm:pl-10 px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold max-w-[500px]">
            Transforming ideas into{' '}
            <span className="text-red-500">Digital Reality</span>
          </h1>
          <p className="text-lg mt-4 max-w-[500px]  text-gray-300 text-left">
            Your vision, our digital reality - where ideas come to life. Where
            imagination meets innovation. Lets turn your dreams into reality
          </p>
        </div>
      </main>
    </>
  );
}
