


import React from "react";
import cvData from "./../../cv-data/cv.json";
import { Cv } from "./../../cv-data/cv";
import AboutMe from "../../components/AboutMe";
import Head from "../../components/Head";
import TechStack from "../../components/TechStack";



export default function HeadPage({ cv, lang }: { cv: Cv, lang: string }) {

  return (

    <div className="text-sm">
      <div className="flex flex-col">
        <Head cv={cv} lang={lang}></Head>

      </div>
      <TechStack lang={lang}></TechStack>
      <div className="flex flex-col md:flex-row pt-20 p-4 md:p-10 pb-20 flex-wrap overflow-hidden print:pr-10 print:pl-10 print:pt-0">

        <AboutMe cv={cv} lang={lang}></AboutMe>

      </div>
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
