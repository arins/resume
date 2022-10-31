
import html_to_pdf from 'html-pdf-node';
import { merge } from 'merge-pdf-buffers';
import * as CVdata from '../../cv-data/cv.json'
import { Cv } from '../../cv-data/cv';

import { writeFile, readFile, access } from 'fs/promises';
import { constants } from 'fs';
import { Buffer } from 'buffer';


class CvPdfGenerator {
    
    /**
     *
     */
    private port: number = 3001;
    private fileLocation = `./tmp/`;
    private englishCvFilename = 'cv-en.pdf';
    private swedishCvFilename = 'cv-sv.pdf';
    private get baseUrl(): string{
        return `http://localhost:${this.port}`;
    } 

    constructor() {
        

    }

    public SetPort(port:number):void{
        this.port = port;
    }

    public GetFilenameForLang(lang: string) {
        let filename: string = null;
        if (lang === 'en') {
            filename = this.englishCvFilename;
        } else if (lang === 'sv') {
            filename = this.swedishCvFilename;
        }
        else {
            throw new Error('invalid lang');
        }
        return filename;
    }

    public async GetCvFileBuffer(lang: string, forceRerender: boolean = false): Promise<Buffer> {

        if (!lang) {
            throw new Error("argument lang missing");
        }
        let filename: string = this.GetFilenameForLang(lang);
        const completeFullPath = this.GetFullPath(filename);

        const cacheExists = await access(completeFullPath, constants.F_OK).then(() => true).catch(() => false);
        if (!cacheExists || forceRerender) {
            const bufferPdf = await this.generatePdf(lang);
            await this.StoreCache(completeFullPath, bufferPdf);
            return bufferPdf;
        }
        const rFile = await readFile(completeFullPath).then((_) => _).catch(_ => _);
        return rFile;



    }


    private GetFullPath(filename: string) {
        return `${this.fileLocation}${filename}`;
    }

    private async generatePdf(lang: string): Promise<Buffer> {
        const cv: Cv = CVdata as any;
        const buffers: Buffer[] = [];
        let options = { format: 'A4', margin: { top: 0, bottom: 0, left: 0, right: 0 }, preferCSSPageSize: false };
        
        await this.GenerateHead(lang, options, buffers);

        await this.GenerateExperiences(cv, lang, options, buffers);

        await this.GenerateSkillMeter(lang, options, buffers);
        await this.GenerateEducation(lang, options, buffers);

        const mergeBuffer = await merge(buffers);
        return mergeBuffer;
    }

    private async GenerateEducation(lang: string, options: any, buffers: Buffer[]): Promise<Buffer[]> {
        const file = { url: `${this.baseUrl}/render/educations?lang=${lang}` };
        
        const skillBuffer = await html_to_pdf.generatePdf(file, options);
        buffers.push(skillBuffer);
        return buffers;
    }


    private async GenerateSkillMeter(lang: string, options: any, buffers: Buffer[]): Promise<Buffer[]> {
        const file = { url: `${this.baseUrl}/render/skills?lang=${lang}` };

        const skillBuffer = await html_to_pdf.generatePdf(file, options);
        buffers.push(skillBuffer);
        return buffers;
    }

    private async GenerateHead(lang: string, options: any, buffers: Buffer[]): Promise<Buffer[]> {

        
        const file = { url: `${this.baseUrl}/render/head?lang=${lang}` };
        
        const headBuffer = await html_to_pdf.generatePdf(file, options);
        buffers.push(headBuffer);
        return buffers;
    }

    private async GenerateExperiences(cv: Cv, lang: string, options: any, buffers: Buffer[]): Promise<Buffer[]> {
        for (let i = 0; i < cv.pdfLayout.length; i++) {
            const file = { url: `${this.baseUrl}/render/experience/${i}?lang=${lang}` };

            const buffer = await html_to_pdf.generatePdf(file, options);
            buffers.push(buffer);
            
        }
        return buffers;
    }

    private async StoreCache(fullPath: string, bufferPdf: Buffer): Promise<boolean> {

        return await writeFile(fullPath, bufferPdf)
            .then((d) => true)
            .catch((_) => false);

    }
}
const Generator = new CvPdfGenerator();
export default Generator;