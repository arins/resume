


import React from "react";

export default function StickyArin({ settings }: { settings: {lang: string, darkMode: boolean} }) {

  return (
    <div className='sticky top-2 self-start' data-aos-anchor="#fullname" data-aos="fade-down-right" data-aos-offset="800">
        <div className="flex flex-row justify-center pb-2"  >
        <div className="flex align-middle p-2 rounded-full bg-gray-200 w-16 h-16 md:w-18 md:h-18 ">
            <img src="/arin.jpg" className="flex rounded-full w-14 md:w-16 "></img>
        </div>

        </div>
        <div className='flex flex-row justify-center pb-4'>
        <div className='text-xxs lg:text-xs font-bold'>Arin Sinabian</div>
        </div>
        <div className='flex flex-row justify-center'>
        <a target="blank" href={`/api/pdf?lang=${settings.lang}`} className="pr-4">
            <img className="w-a1" src="/pdf.svg"></img>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/arinsin/">
            <img className="w-8" src="/linkedin.svg"></img>
        </a>
        </div>
    </div>
  );
}
