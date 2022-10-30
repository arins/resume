


import React from "react";
import { Education as EducationData } from "../../cv-data/cv";

const sv = new Intl.DateTimeFormat('sv-SE', { year: 'numeric', month: 'long' });

export default function Education({ education }: { education: EducationData }) {
    
    var from = education?.from ? new Date(education?.from) : null;

    var to = education?.to ? new Date(education?.to) : null;

    return (
        <div className="flex flex-col self-center pb-4">
            <div className="flex flex-row pb-3">

                {education.educationName}, {education.schoolName}, {education.city}
            </div>
            <div className="text-gray-500 text-xs">
                {from ? sv.format(from).toUpperCase() + " - " : ""}
                {to ? sv.format(to).toUpperCase() : ((from && !to) ? "Fortsatt".toUpperCase() : "")}
            </div>
        </div>

    );
}

