


import React from "react";
import {  ExperienceEntry } from "../api/cv";
import ExperienceTech from "./ExperienceTech";

const sv = new Intl.DateTimeFormat('sv-SE', { year: 'numeric', month: 'long' });

export default function Experience({experience, counter}: {experience:ExperienceEntry, counter: number})
{
    if(!experience){
        return <></>
    }
    var from = experience.period?.from ? new Date(experience.period?.from) : null;
    
    var to = experience.period?.to ? new Date(experience.period?.to) : null;   
    return (
        <div className="relative" data-aos={ counter % 2 ? "fade-left" : "fade-right"}>
            <div className="pt-4 pb-4 bg-white" >
                <h2 className="text-xl font-bold mb-2 flex flex-row pb-2">
                    { experience?.icon ? <img className="w-16 mr-4" src={experience?.icon}></img> : null}
                    <div className="flex flex-col">
                        <div>
                        {experience?.title}, {experience.role}, {experience.location}
                        </div>
                        <div className="text-gray-500 text-xs">
                            {from ? sv.format(from).toUpperCase() + " - " : ""}  
                            {to ? sv.format(to).toUpperCase() : ((from && !to) ? "Fortsatt".toUpperCase() : "")}
                        </div>
                    </div>
                </h2>
                
                <p className="mb-4">
                    {experience?.description}
                </p>
                <div>
                    <ExperienceTech tech={experience.tech}></ExperienceTech>
                </div>
            </div>
                    
            <div className="inset-x-1/2 border-l-2 border-black top-0 relative h-60 z-0 w-1">
                        
            </div>
        </div>
          
    );
}

