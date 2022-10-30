
import type { NextApiRequest, NextApiResponse } from 'next'
import Generator from './CvPdfGenerator';







export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  
  
  const lang = req.query.lang?.toString() || 'sv';
  const forceRerender = req.query.force === 'true';
  if (!(lang == 'en' || lang == 'sv')) {
    res.status(400);
    return;
  }
  try
  {
    Generator.SetPort(parseInt(req.headers.host.split(":")[1]));
  }
  catch(e)
  {
    res.status(400);
    return;
  }
  const buffer = await Generator.GetCvFileBuffer(lang, forceRerender)
  const filename = Generator.GetFilenameForLang(lang);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `inline; filename="${filename}"`);
  res.status(200).send(buffer);
}



