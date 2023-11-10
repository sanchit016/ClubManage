import React, { useEffect, useState } from "react"
import { Routes, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"

const CustomSwitch = ({ children }) => {
   const [progress, setProgress] = useState(false)
   const [prevLoc, setPrevLoc] = useState("")
   const location = useLocation()

   useEffect(() => {
      setPrevLoc(location.pathname)
      setProgress(true)
      if(location.pathname===prevLoc){
          setPrevLoc('')
      }
   }, [location])

   useEffect(() => {
      setProgress(false)
   }, [prevLoc])

   TopBarProgress.config({
    barColors: {
      "0": "#21e6c1",
      "0.5" : "#278ea5",
      "1.0": "#1f4287"
    },
    barThickness: 7,
    shadowBlur: 5
  });

   return (
      <>
         {progress && <TopBarProgress  />}
         <Routes>{children}</Routes>
      </>
   )
}

export default CustomSwitch