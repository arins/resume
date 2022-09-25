import React from "react";
import { Cv } from "../api/cv";
import Line from "./Line";

function calculateAge(birthday: Date) { 
    const ageDifMs: number = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

export default function ContactInfo({cv}: {cv:Cv})
{
    const age = calculateAge(new Date(cv?.birthday));
    return (
        <>
            <h2 className="text-2xl font-bold">Contact info</h2>
            <Line></Line>
            <div className="grid grid-cols-2 mt-2">
                <div className="border-gray-200 border-b-[1px] mb-2 pb-2 font-bold">Age
                    
                </div>
                <div className="border-gray-200 border-b-[1px] pl-2 mb-2 pb-2">{age}</div>
                <div className="border-gray-200 border-b-[1px] mb-2 pb-2 font-bold">Email</div>
                <div className="border-gray-200 border-b-[1px] pl-2 mb-2 pb-2">{cv?.email}</div>
            </div>
        </>
    );
}
