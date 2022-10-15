import React,  { useEffect, useState } from "react";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { PageContext } from "../index";
import {useContext} from 'react';
import { useQueryState } from 'next-usequerystate'

//
export default function EnglishSwitch()
{
    
    const { settings, setSettings } = useContext(PageContext);
    const [langQuery, setLangQuery] = useQueryState('lang');
    const [checked, setChecked] = useState(false);
    const [label, setLabel ] = useState("Switch to English");
    
    function setEnglish() {
        
        const newConfig = { ...settings };
        newConfig.lang = "en";
        setSettings(newConfig);
        setChecked(true);
        setLabel("Växla till svenska");
        setLangQuery('en');
    }

    function setSwedish() {
        
      const newConfig = { ...settings };
      newConfig.lang = "sv";
      
      setSettings(newConfig);
      setChecked(false);
      setLabel("Switch to English");
      setLangQuery('sv');
      
  }
 
  useEffect(()=>{
    if(langQuery === "en")
    {
      setEnglish();
      
    }
    else
    {
      setSwedish();
    }
    
   }, []);
    return (
        <FormControlLabel control={
          <Switch checked={checked} onChange={(v)=>{
              if (v.target.checked)
              {
                  setEnglish();
              }
              else
              {
                  setSwedish();
              }
              
          }} />
      } label={label} />
    );
}



