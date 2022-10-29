


import React from "react";
import { Cv } from "../../cv-data/cv";
import SkillMeter from "./SkillMeter";

export default function Skills({ cv }: { cv: Cv }) {

  return (
    <>
      {cv?.skills?.map(s =>

        <div key={s.name} className="w-full md:w-1/2 pr-4 pb-4 print:w-1/2">
          <span>{s.name}</span>
          <SkillMeter level={s.level}></SkillMeter>


        </div>
      )}
    </>
  );
}
