import React from "react";
import { Cv } from "../api/cv";

//
export default function Head({cv}: {cv:Cv})
{
    
    return (
        <div className="flex flex-1 text-black p-10 pb-2 pt-2 md:p-10 md:pb-6 md:pt-6 flex-col bg-sky-600">
            
            <div className="flex flex-row justify-center">
                <div className="flex align-middle p-2 rounded-full bg-white w-62 h-62 md:w-70 md:h-70 ">
                    <img src="/arin.jpg" className="flex rounded-full w-60 h-60 md:w-70 md:h-70 animate__animated animate__backInDown"></img>
                </div>
            </div>
            <div className="flex flex-1 ">
                <div className="flex flex-1 pt-6 flex-col animate__animated animate__backInLeft">
                    <div className="flex flex-row justify-center flex-1">
                        <h1 className="sm:text-5xl text-4xl font-bold text-black text-center">
                            {cv?.name} {cv?.lastname}
                        </h1>
                    </div>
                    <div className="flex flex-row justify-center flex-1">
                        <p className="text-lg text-lime-400 text-center">
                            {cv?.sv?.role}
                        </p>
                    </div>
                </div>
            </div>
            
      </div>
        
    );
}

