


import React from "react";
import {Tech } from "../api/cv";


export default function TechSide({tech, techSide}: {tech:string[], techSide: string})
{
    let counter = 0;
    return (
        <div className="mb-2">
            <div className="flex flex-row">
                <div className="mr-2 font-bold">
                    {techSide}:
                </div>
                <div>
                    {tech?.map(e=>
                    <span className="mr-2" key={counter++}> 
                        {e}{counter + 1 < tech.length ? "," : ""}
                    </span>
                    )}
                </div>
            </div>
        </div>
          
    );
}

