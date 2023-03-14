
import html_to_pdf from 'html-pdf-node';


import * as hummus from 'muhammara';

import * as memoryStreams from 'memory-streams';
import * as CVdata from '../../cv-data/cv.json'
import { Cv } from '../../cv-data/cv';

import { writeFile, readFile, access } from 'fs/promises';
import { constants } from 'fs';
import { Buffer } from 'buffer';


class CvPdfGenerator {
    
    /**
     *
     */
    private port: number = parseInt(process.env.PORT, 10);
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
        let options = { format: 'A4', margin: { top: 0, bottom: 0, left: 0, right: 0 }, preferCSSPageSize: false };
        
        let head = await this.GenerateHead(lang, options);

        let expericenes = await this.GenerateExperiences(cv, lang, options, head);

        let skillMeter = await this.GenerateSkillMeter(lang, options, expericenes);
        let result = await this.GenerateEducation(lang, options, skillMeter);
        return result;
    }


/**
 * Concatenate two PDFs in Buffers
 * @param {Buffer} firstBuffer 
 * @param {Buffer} secondBuffer 
 * @returns {Buffer} - a Buffer containing the concactenated PDFs
 */
private async combinePDFBuffers(firstBuffer, secondBuffer) {
    var outStream = new memoryStreams.WritableStream();

    try {
        var firstPDFStream = new hummus.PDFRStreamForBuffer(firstBuffer);
        var secondPDFStream = new hummus.PDFRStreamForBuffer(secondBuffer);

        var pdfWriter = hummus.createWriterToModify(firstPDFStream, new hummus.PDFStreamForResponse(outStream));
        pdfWriter.appendPDFPagesFromPDF(secondPDFStream);
        pdfWriter.end();
        var newBuffer = outStream.toBuffer();
        outStream.end();

        return newBuffer;
    }
    catch(e){
        outStream.end();
        throw new Error('Error during PDF combination: ' + e.message);
    }
};

    private async GenerateEducation(lang: string, options: any, skillMeter: Buffer): Promise<Buffer> {
        const file = { url: `${this.baseUrl}/render/educations?lang=${lang}` };
        
        const educations = await html_to_pdf.generatePdf(file, options);
        return await this.combinePDFBuffers(skillMeter, educations);
    }


    private async GenerateSkillMeter(lang: string, options: any, expericenes: Buffer): Promise<Buffer> {
        const file = { url: `${this.baseUrl}/render/skills?lang=${lang}` };

        const skillBuffer = await html_to_pdf.generatePdf(file, options);
        
        return await this.combinePDFBuffers(expericenes, skillBuffer);
        
    }

    private async GenerateHead(lang: string, options: any): Promise<Buffer> {

        
        const file = { url: `${this.baseUrl}/render/head?lang=${lang}` };
        
        const headBuffer = await html_to_pdf.generatePdf(file, options);
        
        return headBuffer;
    }

    private async GenerateExperiences(cv: Cv, lang: string, options: any, head: Buffer): Promise<Buffer> {
        for (let i = 0; i < cv.pdfLayout.length; i++) {
            const file = { url: `${this.baseUrl}/render/experience/${i}?lang=${lang}` };

            const buffer = await html_to_pdf.generatePdf(file, options);
            head = await this.combinePDFBuffers(head, buffer)
            
        }
        return head;
    }

    private async StoreCache(fullPath: string, bufferPdf: Buffer): Promise<boolean> {

        return await writeFile(fullPath, bufferPdf)
            .then((d) => true)
            .catch((_) => false);

    }
}
const Generator = new CvPdfGenerator();
export default Generator;