


import React from "react";
import {Tech } from "../api/cv";
import TechSide from "./TechSide";


export default function ExperienceTech({tech}: {tech:Tech})
{
    if(!tech){
        return <></>
    }
    return (
        <div className="mb-2">
            { tech.server?.length > 0 ? <TechSide tech={tech.server} techSide={"Serversidan"}></TechSide>: null }
            { tech.client?.length > 0 ? <TechSide tech={tech.client} techSide={"Klient"}></TechSide> : null }
            { tech.devops?.length > 0 ? <TechSide tech={tech.devops} techSide={"DevOps"}></TechSide>: null }
            { tech.environment?.length > 0 ?<TechSide tech={tech.environment} techSide={"Miljöer"}></TechSide>: null }
        </div>
    );
}

