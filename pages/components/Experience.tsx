


import React from "react";
import { ExperienceEntry } from "../../cv-data/cv";
import ExperienceTech from "./ExperienceTech";

const sv = new Intl.DateTimeFormat('sv-SE', { year: 'numeric', month: 'long' });

export default function Experience({ experience, counter, lang }: { experience: ExperienceEntry, counter: number, lang: string }) {
    if (!experience) {
        return <></>
    }
    var from = experience.period?.from ? new Date(experience.period?.from) : null;

    var to = experience.period?.to ? new Date(experience.period?.to) : null;
    return (
        <div className="relative" data-aos={counter % 2 ? "fade-left" : "fade-right"}>
            <div className="pt-4 pb-4 bg-white">

                <h2 className="text-xl font-bold mb-2 flex flex-row pb-2">
                    {experience?.icon ? (
                        <div className="self-center pr-2">
                            <img className="w-12 md:w-16 mr-4" src={experience?.icon}></img>
                        </div>
                    ) : null
                    }
                    <div className="flex flex-col self-center">
                        <div className="flex flex-row flex-wrap">
                            {experience?.title}, {experience.role}, {experience.location}
                        </div>
                        <div className="text-gray-500 text-xs">
                            {from ? sv.format(from).toUpperCase() + " - " : ""}
                            {to ? sv.format(to).toUpperCase() : ((from && !to) ? (lang == "sv" ? "Fortsatt" : "Ongoing").toUpperCase() : "")}
                        </div>
                    </div>
                </h2>

                <p className="mb-4 print:text-sm">
                    {experience?.description}
                </p>
                <div>
                    <ExperienceTech tech={experience.tech}></ExperienceTech>
                </div>
            </div>

            <div className="inset-x-1/2 border-l-2 border-gray-200 top-0 relative z-0 w-1 h-32 md:h-60 print:hidden">

            </div>
        </div>

    );
}

