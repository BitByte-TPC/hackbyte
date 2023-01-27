import React, {useState, useEffect } from 'react'
import CanvasThree from './CanvasThree'
import { useLocation } from "react-router-dom";

export default function CanvasRoute({setIsLoading}) {
    const location = useLocation();
    const [onHome, setonHome] = location.pathname == '/' ? useState(true) : useState(false);

    useEffect(()=> {
      if(onHome && (location.pathname != '/')){
        setonHome(false)
      } else {
        if(!onHome && (location.pathname == '/')){
          setonHome(true)
        }
      }
    },[location.pathname])

  return (
    <>
        <CanvasThree onHome={onHome} setIsLoading={setIsLoading} />
    </>
  )
}
