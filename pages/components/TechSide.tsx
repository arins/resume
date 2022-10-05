


import React from "react";
import {Tech } from "../api/cv";


export default function TechSide({tech, techSide}: {tech:string[], techSide: string})
{
    let counter = 0;
    return (
        <div className="mb-2">
            <div className="flex flex-row flex-wrap">
                <div className="mr-2 font-bold">
                    {techSide}:
                </div>
                <div>
                    {tech?.map(e=>
                    <>
                        {e}{counter + 1 < tech.length ? ", " : ""}
                        </>
                    )}
                </div>
            </div>
        </div>
          
    );
}

