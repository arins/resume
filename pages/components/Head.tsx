import React from "react";
import { Cv } from "../api/cv";

//
export default function Head({cv}: {cv:Cv})
{
    
    return (
        <div className="flex flex-1 text-white p-10 pb-2 pt-2 md:p-10 md:pb-6 md:pt-6 bg-blue-400">
            
            <div className="flex flex-col justify-center">
            <div className="flex justify-center align-middle p-2 rounded-full bg-white">
                <img src="/arin.jpg" className="flex rounded-full w-20 h-20 md:w-40 md:h-40"></img>
            </div>
            </div>
            <div className="flex flex-1">
            <div className="flex flex-1 p-6 pl-10 flex-col">
                <h1 className="text-3xl font-bold text-white">
                {cv?.name} {cv?.lastname}
                </h1>
                <p className="text-lg text-lime-400">
                {cv?.sv?.role}
                </p>
            </div>
            </div>
            
      </div>
        
    );
}

