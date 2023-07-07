import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { PageContext } from "..";


export default function TechStack({ lang }: { lang?: string }) {

    return (<PageContext.Consumer>
        {
            (settings) => {

                let choosenLang = settings.settings.lang;
                if (lang) {
                    choosenLang = lang;
                }
                return (

                    <>
                        <div className="flex flex-col pt-10 p-14 pb-6 ">
                            <h2 className="text-2xl font-bold text-center">
                                {choosenLang == "sv" ? "Teknik & Verktyg" : "Technologies & Tools"}
                            </h2>
                        </div>
                        <div className="hidden md:block overflow-hidden print:hidden">
                            <div className="flex pt-4 pb-4 justify-evenly items-center ">
                                <Tooltip title="ASP.NET">
                                    <img className="w-16 print:w-10" src="/Microsoft_.NET_logo.svg"></img>
                                </Tooltip>
                                <Tooltip title="C#">
                                    <img className="w-16 print:w-10" src="/C_Sharp_wordmark.svg"></img>
                                </Tooltip>
                                <Tooltip title="Microsoft Azure">
                                    <img className="w-16 print:w-10" src="/Microsoft_Azure.svg"></img>
                                </Tooltip>
                                <Tooltip title="Azure Kubernetes">
                                    <img className="w-16 print:w-10 h-16 print:h-10" src="/kubernetes-icon.svg"></img>
                                </Tooltip>
                                <Tooltip title="TypeScript">
                                    <img className="w-16 print:w-10" src="/Typescript_logo_2020.svg"></img>
                                </Tooltip>
                                <Tooltip title="JavaScript">
                                    <img className="w-16 print:w-10" src="/Unofficial_JavaScript_logo_2.svg"></img>
                                </Tooltip>
                                <Tooltip title="Azure SQL Server">
                                    <img className="w-16 print:w-10" src="/sql-database-generic.svg"></img>
                                </Tooltip>
                            </div>

                            <div className="flex pt-10 justify-evenly items-center">
                                <Tooltip title="Azure Cosmos DB">
                                    <img className="w-16 print:w-10" src="/azure_cosmos_db_logo_freelogovectors.net_.png"></img>
                                </Tooltip>
                                <Tooltip title="Angular, Material Design, Angular Flex Layout">
                                    <img className="w-16 print:w-10" src="/angular.svg"></img>
                                </Tooltip>
                                <Tooltip title="React, Redux, React Material UI">
                                    <img className="w-16 print:w-10" src="/react.svg" ></img>
                                </Tooltip>
                                <Tooltip title="Docker, docker-compose, docker images">
                                    <img className="w-16 print:w-10" src="/docker.svg"></img>
                                </Tooltip>
                                <Tooltip title="RabbitMQ (Broker)">
                                    <img className="w-16 print:w-10 h-16 print:h-10" src="/rabbitmq-logo-25641A76DE-seeklogo.com.png"></img>
                                </Tooltip>
                                <Tooltip title="confluent Kafka (Broker)">
                                    <img className="w-16 print:w-10 h-16 print:h-10" src="/apache_kafka-icon.svg"></img>
                                </Tooltip>
                                <Tooltip title="Helm">
                                    <img className="w-16 print:w-10 h-16 print:h-10" src="/helmsh-icon.svg"></img>
                                </Tooltip>
                                <Tooltip title="Git">
                                    <img className="w-16 print:w-10 h-16 print:h-10" src="/Git-Icon-1788C.svg"></img>
                                </Tooltip>
                            </div>
                        </div>



                        <div className="md:hidden overflow-hidden ">
                            <div className="flex pt-10 pb-4 justify-evenly items-center print:pb-2 print:pt-3" data-aos="fade-right">

                                <img className="w-16 print:w-10" src="/Microsoft_.NET_logo.svg"></img>
                                <img className="w-16 print:w-10" src="/C_Sharp_wordmark.svg"></img>
                                <img className="w-16 print:w-10" src="/Microsoft_Azure.svg"></img>
                                <img className="w-16 print:w-10 h-16 print:h-10" src="/kubernetes-icon.svg"></img>


                            </div>
                            <div className="flex pt-10 pb-4 justify-evenly items-center print:pb-2 print:pt-3" data-aos="fade-left">
                                <img className="w-16 print:w-10" src="/Typescript_logo_2020.svg"></img>
                                <img className="w-16 print:w-10" src="/Unofficial_JavaScript_logo_2.svg"></img>

                                <img className="w-16 print:w-10" src="/angular.svg"></img>
                                <img className="w-16 print:w-10" src="/react.svg"></img>

                            </div>
                            <div className="flex pt-10 justify-evenly items-center print:pb-2 print:pt-3" data-aos="fade-right">
                                <img className="w-16 print:w-10" src="/docker.svg"></img>
                                <img className="w-16 print:w-10" src="/sql-database-generic.svg"></img>
                                <img className="w-16 print:w-10" src="/azure_cosmos_db_logo_freelogovectors.net_.png"></img>
                                <img className="w-16 print:w-10 h-16 print:h-10" src="/rabbitmq-logo-25641A76DE-seeklogo.com.png"></img>

                            </div>
                            <div className="flex pt-10 justify-evenly items-center print:pb-2 print:pt-3" data-aos="fade-right">
                                <img className="w-16 print:w-10 h-16 print:h-10" src="/apache_kafka-icon.svg"></img>
                                <img className="w-16 print:w-10 h-16 print:h-10" src="/helmsh-icon.svg"></img>
                                <img className="w-16 print:w-10 h-16 print:h-10" src="/Git-Icon-1788C.svg"></img>
                            </div>
                        </div>
                    </>

                );
            }
        }
    </PageContext.Consumer>);


}
