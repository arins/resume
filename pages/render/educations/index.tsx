


import React from "react";
import cvData from "../../../cv-data/cv.json";
import { Cv } from "../../../cv-data/cv";
import Educations from "../../components/educations";



export default function HeadPage({ cv, lang }: { cv: Cv, lang: 'sv' | 'en' }) {

  return (
    <div className="pr-10 pl-10 pt-10">
         <h2 className="text-2xl font-bold mb-10">
                {lang === 'sv' ? 'Utbildning' : 'Education'}
            </h2>
        <Educations educations={cv.education}></Educations>
    </div>
  );
}

export async function getServerSideProps(context) {
    return {
        props: {
            lang: context.query?.lang || 'sv',
            cv: cvData as Cv,
        }, // will be passed to the page component as props
    }
}
