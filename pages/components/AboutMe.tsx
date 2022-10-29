


import React from "react";
import { PageContext } from "..";
import { Cv, AboutMe as a,  } from "../api/cv";

export default function AboutMe({cv, lang}: {cv:Cv, lang?:string})
{
  return (<PageContext.Consumer> 
  { 
      (settings) => {
          let choosenLang = settings.settings.lang;
            if(lang){
                choosenLang = lang;
            }
          const languageVersion:a = cv && cv[choosenLang];
          return (
              
              <div className="" data-aos="fade-left">
                <h2 className="text-2xl font-bold pb-4">
                  {choosenLang === "sv" ? "Profil" : "Profile"}
                </h2>
                  
                <p>
                  {languageVersion?.aboutMe}
                </p>
              </div>
        
          );
      }
      }
      </PageContext.Consumer>);
}
