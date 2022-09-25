


import React from "react";
import {  ExperienceEntry } from "../api/cv";


export default function Experience({experience}: {experience:ExperienceEntry})
{
    
    return (
        
        <div>
        <h2>{experience.title}</h2>
        <p>
        {experience.description}
        </p>
        </div>
        
          
    );
}

