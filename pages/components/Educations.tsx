


import React from "react";
import { Education as EducationData } from "../../cv-data/cv";
import Education from "./Education";


export default function Educations({ educations }: { educations: EducationData[] }) {
    return (
        <div>
            {educations.map(e => <Education key={e.educationName} education={e}></Education>)}
        </div>
    );
}

