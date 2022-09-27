import React from "react";


export default function TechStack()
{
    
    return (
        <>
            <div className="flex flex-col pt-10 p-14">
                <h2 className="text-2xl font-bold  ">Lite teknik</h2>
            </div>
            <div className="hidden sm:block">
            <div className="flex pt-10 pb-4 justify-evenly items-center ">
                <img className="w-16" src="/Microsoft_.NET_logo.svg"></img>
                <img className="w-16" src="/C_Sharp_wordmark.svg"></img>
                
                <img className="w-16" src="/Microsoft_Azure.svg"></img>
                <img className="w-16 h-16"  src="/kubernetes-icon.svg"></img>
            
                <img className="w-16" src="/Typescript_logo_2020.svg"></img>
                <img className="w-16" src="/Unofficial_JavaScript_logo_2.svg"></img>
                <img className="w-16" src="/sql-database-generic.svg"></img>
            </div>
            
            <div className="flex pt-10 justify-evenly items-center">
            <img className="w-16" src="/azure_cosmos_db_logo_freelogovectors.net_.png"></img>
                <img className="w-16" src="/angular-icon.svg"></img>
                <img className="w-16" src="/react-icon.svg"></img>

                <img className="w-16" src="/docker.svg"></img>
                <img className="w-16 h-16"  src="/rabbitmq-logo-25641A76DE-seeklogo.com.png"></img>
                <img className="w-16 h-16"  src="/apache_kafka-icon.svg"></img>
                
                <img className="w-16 h-16"  src="/helmsh-icon.svg"></img>
                <img className="w-16 h-16"  src="/git-Icon-1788C.svg"></img>
            </div>
            </div>

            

            <div className="md:hidden">
                <div className="flex pt-10 pb-4 justify-evenly items-center" data-aos="fade-right">
                    <img className="w-16" src="/Microsoft_.NET_logo.svg"></img>
                    <img className="w-16" src="/C_Sharp_wordmark.svg"></img>
                    
                    <img className="w-16" src="/Microsoft_Azure.svg"></img>
                    <img className="w-16 h-16"  src="/kubernetes-icon.svg"></img>
                    <img className="w-16" src="/Typescript_logo_2020.svg"></img>
                    
                </div>
                <div className="flex pt-10 pb-4 justify-evenly items-center " data-aos="fade-left">
                    
                    <img className="w-16" src="/Unofficial_JavaScript_logo_2.svg"></img>
                    <img className="w-16" src="/sql-database-generic.svg"></img>
                    <img className="w-16" src="/angular-icon.svg"></img>
                    <img className="w-16" src="/react-icon.svg"></img>
                    <img className="w-16" src="/docker.svg"></img>
                </div>
                <div className="flex pt-10 justify-evenly items-center" data-aos="fade-right">
                    <img className="w-16" src="/azure_cosmos_db_logo_freelogovectors.net_.png"></img>           
                    <img className="w-16 h-16"  src="/rabbitmq-logo-25641A76DE-seeklogo.com.png"></img>
                    <img className="w-16 h-16"  src="/apache_kafka-icon.svg"></img>
                    <img className="w-16 h-16"  src="/helmsh-icon.svg"></img>
                    <img className="w-16 h-16"  src="/git-Icon-1788C.svg"></img>
                </div>
            </div>
      </>
    );
}
