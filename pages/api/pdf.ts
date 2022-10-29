import html_to_pdf from 'html-pdf-node';
import { merge } from 'merge-pdf-buffers';
import * as CVdata from './cv.json'

import type { NextApiRequest, NextApiResponse } from 'next'
import { Cv } from './cv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let options = { format: 'A4', margin: {top: 0, bottom: 0, left:0, right: 0}, preferCSSPageSize : false };
    const cv: Cv = CVdata as any;
    const lang = req.query.lang?.toString() || 'sv';
    
    const buffers = [];
    let file: {url:string};
    for(let i=0; i<cv.pdfLayout.length; i++){
      let file = {url: `http://localhost:3000/render/experience/${i}?lang=${lang}`};

      const buffer = await html_to_pdf.generatePdf(file, options);
      buffers.push(buffer);
    }

    file = {url: `http://localhost:3000/render/skills`};

    const buffer = await html_to_pdf.generatePdf(file, options);
    buffers.push(buffer);
    

    const merged = await merge(buffers);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=\"cv.pdf\"");
    res.status(200).send(merged);
  }