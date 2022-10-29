


import React from "react";
import { PageContext } from "..";
import { Cv, AboutMe } from "../api/cv";
import Experience from "./Experience";



export default function Experiences({cv}: {cv:Cv})
{

    return (<PageContext.Consumer> 
        { 
            (settings) => {
              
                const lang:AboutMe = cv && cv[settings.settings.lang];
                let counter = 0;
                return (
                    
                    <div >
                        {lang?.experince?.map(e=>
                        <Experience key={e.title} counter={counter++}  experience={e}></Experience>
                        )}
                    </div>
              
                );
            }
            }
            </PageContext.Consumer>);
}

