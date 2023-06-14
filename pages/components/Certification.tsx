import React from "react";

import Line from "./Line";
import { Cv, AboutMe as a } from "../../cv-data/cv";
import { PageContext } from "..";

export default function Certication({ cv, lang }: { cv: Cv, lang?:string }) {
    return (
    <PageContext.Consumer>
    {
        (settings) => {
            let choosenLang = settings.settings.lang;
            if (lang) {
                choosenLang = lang;
            }
            const languageVersion: a = cv && cv[choosenLang];
            return (
                <>
                    <h2 className="text-2xl font-bold">
                    {choosenLang === "sv" ? "Certifieringar" : "Certifications"}
                    </h2>
                    <Line></Line>
                    <div className="grid grid-cols-2 mt-2">
                        <a href="https://www.credly.com/badges/f968b29e-250c-47bc-b66e-aa4e17d3d655/linked_in" target="_blank">
                        <img src="/microsoft-certified-fundamentals-badge.svg" className="w-20"></img>
                        </a>
                    </div>
                </>
            );

        }
    }
    </PageContext.Consumer>);
    ;
}
