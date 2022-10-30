import React from 'react';
import { Cv } from '../cv-data/cv';
import cvData from '../cv-data/cv.json';
import Head from './components/Head';

export default function Custom500({cv}: {cv:Cv}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <Head cv={cv}></Head>

            </div>
            <div className='flex flex-row justify-center pt-20 pb-2'>
                <h1 className='text-5xl'>500 Något gick fel</h1>
                
            </div>
            <div className='flex flex-row justify-center'>
                <p><a className='underline text-2xl' href="/">Till startsidan</a></p>
            </div>
        </div>
        );
  }

  
export async function getStaticProps() {
    return {
      props: {
        cv: cvData as Cv,
      }
    }
  }