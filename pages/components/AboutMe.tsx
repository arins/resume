


import React from "react";
import { PageContext } from "..";
import { Cv, AboutMe as a } from "../../cv-data/cv";
import Line from "./Line";

export default function AboutMe({ cv, lang }: { cv: Cv, lang?: string }) {
  return (<PageContext.Consumer>
    {
      (settings) => {
        let choosenLang = settings.settings.lang;
        if (lang) {
          choosenLang = lang;
        }
        const languageVersion: a = cv && cv[choosenLang];
        return (

          <div className="" data-aos="fade-left">
            <h2 className="text-2xl font-bold ">
              {choosenLang === "sv" ? "Profil" : "Profile"}
            </h2>
            <Line></Line>
            <p className="mt-4">
              {languageVersion?.aboutMe}
            </p>
          </div>

        );
      }
    }
  </PageContext.Consumer>);
}
