


import React from "react";
import { Cv } from "../api/cv";

export default function AboutMe({cv}: {cv:Cv})
{
    
    return (
        
        <div className="" data-aos="fade-left">
            <h2 className="text-2xl font-bold pb-4">Profil</h2>
            
          <p>
            {cv?.sv?.aboutMe}
          </p>
          </div>
        
    );
}
