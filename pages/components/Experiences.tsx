


import React from "react";
import { Cv } from "../api/cv";
import Experience from "./Experience";


export default function Experiences({cv}: {cv:Cv})
{
    let counter = 0;
    return (
        <div >
                {cv?.sv.experince?.map(e=>
                <Experience key={e.title} counter={counter++}  experience={e}></Experience>
                )}
          </div>
          
    );
}

