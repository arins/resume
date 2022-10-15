


import React from "react";
import { PageContext } from "..";
import {Tech } from "../api/cv";
import TechSide from "./TechSide";


export default function ExperienceTech({tech}: {tech:Tech})
{
    if(!tech){
        return <></>
    }
    return (
        <PageContext.Consumer> 
        { 
            (settings) => {
              
                
                return (
                    
                    <div className="mb-2">
                        { tech.server?.length > 0 ? <TechSide tech={tech.server} techSide={settings.settings.lang === "sv" ? "Serversidan" : "Serverside"}></TechSide>: null }
                        { tech.client?.length > 0 ? <TechSide tech={tech.client} techSide={settings.settings.lang === "sv" ? "Klient" : "Client"}></TechSide> : null }
                        { tech.devops?.length > 0 ? <TechSide tech={tech.devops} techSide={"DevOps"}></TechSide>: null }
                        { tech.environment?.length > 0 ?<TechSide tech={tech.environment} techSide={settings.settings.lang === "sv" ? "Miljöer" : "Environments"}></TechSide>: null }
                    </div>
              
                );
            }
        }
        </PageContext.Consumer>);

    
}

