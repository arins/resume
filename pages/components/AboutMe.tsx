


import React from "react";
import { Cv } from "../api/cv";
import Line from "./Line";

export default function AboutMe({cv}: {cv:Cv})
{
    
    return (
        <>
        
            <h2 className="text-2xl font-bold">Profile</h2>
            
          <p>
            {cv?.sv?.aboutMe}
          </p>
        </>
    );
}
