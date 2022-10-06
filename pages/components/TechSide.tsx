


import React from "react";


export default function TechSide({tech, techSide}: {tech:string[], techSide: string})
{
    let counter = 0;
    return (
        <div key={techSide} className="mb-2">
            <div className="flex flex-row flex-wrap">
                <div className="mr-2 font-bold">
                    {techSide}:
                </div>
                <div>
                    {tech?.map(e=> {
                        const end = counter + 1 < tech.length ? ", " : ""
                        counter++;
                        return e.toString() + end;
                    }  
                    )}
                </div>
            </div>
        </div>
          
    );
}

