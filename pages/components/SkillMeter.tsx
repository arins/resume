import React from "react";

export default function SkillMeter({level})
{
    
    return (
        
        <div className="h-4 bg-gray-200 rounded-sm overflow-hidden">
            <div className="h-4 bg-blue-400" style={{width:level +'%'}} data-aos="fade-right">

            </div>
        </div>
        
    );
}
