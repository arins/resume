
import React from 'react';
import cvData from "../../../cv-data/cv.json";
import { Cv, ExperienceEntry } from "../../../cv-data/cv";
import Experience from '../../components/Experience';
import { useRouter } from 'next/router';

export default function ExperiencePage({ cv, lang }: { cv: Cv, lang: string }) {


  const router = useRouter()
  const { id } = router.query;


  const idInt = parseInt(id.toString(), 10);


  const itemsInPage = cv.pdfLayout[idInt];
  const header = idInt === 0;

  const expByLang = cv[lang?.toString() || 'sv'];
  const experience: ExperienceEntry[] = [];
  for (const index of itemsInPage) {
    experience.push(expByLang.experince[index]);
  }
  const counter = 0;
  return (

    <div className='pr-10 pl-10 pt-10'>
      {header ? <h2 className="text-2xl font-bold mb-5">
        {lang === 'sv' ? 'Erfarenhet' : 'Experience'}
      </h2> : null}
      {experience.map(r =>
        <Experience key={counter} experience={r} counter={counter} ></Experience>
      )}
    </div>

  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      lang: context.query.lang,
      cv: cvData as Cv,
    }, // will be passed to the page component as props
  }
}

// export async function getStaticPaths() {

//   let counter = 0;
//   const pathsSv = GetPath();
//   //const pathsEn = GetPathPerLang('en');
//   return {
//     paths: [...pathsSv],
//     fallback: false,
//   }

//   function GetPath() {
//     return cvData.pdfLayout.map(x => {
//       const result = {
//         params: { id: counter.toString() },
//       };
//       counter++;
//       return result;
//     });
//   }
// }
