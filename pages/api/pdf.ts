import html_to_pdf from 'html-pdf-node';
import { merge } from 'merge-pdf-buffers';
import * as CVdata from './cv.json'

import type { NextApiRequest, NextApiResponse } from 'next'
import { Cv } from './cv';
import { writeFile, readFile, access } from 'fs/promises';
import {constants } from 'fs';
import { Buffer } from 'buffer';





export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  
 
  const lang = req.query.lang?.toString() || 'sv';
  if(!(lang == 'en' || lang == 'sv')){
    res.status(400);
    return;
  }


  
  const file = `cv-${lang}.pdf`;
  
  const ok = await access(`./tmp/${file}`, constants.F_OK).then(()=>true).catch(()=>false);
  if(!ok){
    console.log('did not find file ')
    await StoreCachedCv(lang);
  }
  
  
  
  const rFile = await readFile(`./tmp/${file}`).then((_)=>_).catch(_=>_);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `inline; filename="${file}"`);
  res.status(200).send(rFile);

  
}

async function generatePdf(lang:string):Promise<Buffer>{
    const cv: Cv = CVdata as any;
    const buffers = [];
    let file: {url:string};
    let options = { format: 'A4', margin: {top: 0, bottom: 0, left:0, right: 0}, preferCSSPageSize : false };

    file = {url: `http://localhost:3000/render/head?lang=${lang}`};

    const headBuffer = await html_to_pdf.generatePdf(file, options);
    buffers.push(headBuffer);

    for(let i=0; i<cv.pdfLayout.length; i++){
      let file = {url: `http://localhost:3000/render/experience/${i}?lang=${lang}`};

      const buffer = await html_to_pdf.generatePdf(file, options);
      buffers.push(buffer);
    }

    file = {url: `http://localhost:3000/render/skills?lang=${lang}`};

    const skillBuffer = await html_to_pdf.generatePdf(file, options);
    buffers.push(skillBuffer);
    

    const mergeBuffer = await merge(buffers);
    return mergeBuffer;
}



  async function StoreCachedCv(lang: string){
    console.log('generating')
    const bufferSv = await generatePdf(lang);
    const file = `cv-${lang}.pdf`;
    await writeFile(`./tmp/${file}`,bufferSv).then((d)=>d).catch((_)=>_);

  }

