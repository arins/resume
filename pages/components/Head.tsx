import React from "react";
import { AboutMe, Cv } from "../../cv-data/cv";
import { PageContext } from "../index";
import EnglishSwitch from "./EnglisSwitch";

export default function Head({ cv, lang }: { cv: Cv, lang?: string }) {

    return (
        <PageContext.Consumer>
            {

                (settings) => {
                    let choosenLang = settings.settings.lang;
                    if (lang) {
                        choosenLang = lang;
                    }
                    const aboutMe: AboutMe = cv && cv[choosenLang];
                    return (
                        <>
                            <div className="flex flex-row-reverse bg-sky-600 pt-2 pr-2 print:hidden">
                                <div className="flex flex-row justify-center items-center bg-white pl-2 md:pr-6 md:pl-3 md:pt-2 md:pb-2 rounded-xl">
                                    <EnglishSwitch></EnglishSwitch>
                                </div>
                            </div>

                            <div className="flex flex-1 text-black p-10 pb-2 pt-2 md:p-10 md:pb-6 md:pt-6 flex-col bg-sky-600 print:bg-sky-600">

                                <div className="flex flex-row justify-center pb-10 pt-10 print:pb-5 print:pt-5">
                                    <div id="profile-image-border" className="flex align-middle p-2 rounded-full bg-white w-62 h-62 md:w-70 md:h-70 ">
                                        <img src="/arin.jpg" className="flex rounded-full w-60 h-60 md:w-70 md:h-70 animate__animated animate__backInDown"></img>
                                    </div>
                                </div>
                                <div className="flex flex-1 ">
                                    <div className="flex flex-1 pt-6 flex-col animate__animated animate__backInLeft">
                                        <div className="flex flex-row justify-center flex-1">
                                            <h1 id="fullname" className="sm:text-5xl text-4xl font-bold text-black text-center">
                                                {cv?.name} {cv?.lastname}
                                            </h1>
                                        </div>
                                        <div className="flex flex-row justify-center flex-1 pb-2 print:pb-10">
                                            <p className="text-lg text-lime-400 text-center">
                                                {aboutMe?.role}
                                            </p>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="flex flex-1 print:hidden">
                                    <div className="flex flex-row justify-center flex-1 pb-20">
                                        <a target="blank" href={`/api/pdf?lang=${choosenLang}`} className="pr-4">
                                            <img className="w-a1" src="/pdf.svg"></img>
                                        </a>
                                        <a target="blank" href="https://www.linkedin.com/in/arinsin/">
                                            <img className="w-8" src="/linkedin.svg"></img>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </>
                    );
                }
            }
        </PageContext.Consumer>);
}

