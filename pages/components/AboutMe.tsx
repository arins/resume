


import React from "react";
import { PageContext } from "..";
import { Cv, AboutMe as a,  } from "../api/cv";

export default function AboutMe({cv}: {cv:Cv})
{
  return (<PageContext.Consumer> 
  { 
      (settings) => {
        
          const lang:a = cv && cv[settings.settings.lang];
          return (
              
              <div className="" data-aos="fade-left">
                <h2 className="text-2xl font-bold pb-4">
                  {settings.settings.lang == "sv" ? "Profil" : "Profile"}
                </h2>
                  
                <p>
                  {lang.aboutMe}
                </p>
              </div>
        
          );
      }
      }
      </PageContext.Consumer>);
}
