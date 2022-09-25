import React from "react";

export default function SkillMeter({level})
{
    
    return (
        
        <div className="h-4 bg-gray-200 rounded-sm">
            <div className="h-4 bg-blue-400" style={{width:level +'%'}}>

            </div>
        </div>
        
    );
}
