


import React from "react";
import { Cv } from "../api/cv";
import Experience from "./Experience";


export default function Experiences({cv}: {cv:Cv})
{
    
    return (
        <>
        {cv?.sv.experince?.map(e=> 
            
            <Experience key={e.title} experience={e}></Experience>
              
            
          )}
          </>
    );
}

