


import React from "react";
import {  ExperienceEntry } from "../api/cv";


export default function Experience({experience, counter}: {experience:ExperienceEntry, counter: number})
{
    
    return (
        
        <div data-aos={ counter % 2 ? "fade-left" : "fade-right"}>
            <h2 className="text-xl font-bold mb-2 flex flex-row">
                { experience?.icon ? <img className="w-10 mr-4" src={experience?.icon}></img> : null}
                {experience?.title}
            </h2>
            <p>
            {experience?.description}
            </p>
        </div>
        
          
    );
}

