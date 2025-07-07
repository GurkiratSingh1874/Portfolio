import React from 'react'
// import { FaGoogle } from "react-icons/fa";
import imgINTERN from "../assets/1674385753078.jpeg"
function Experience() {
    return (
        <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center ">
        
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
             <img src={imgINTERN} alt="" className='w-20 h-20' /> 
            <span className="text-white">
              <h2 className="leading-tight">Software Developer Intern , ScrollAR4U Technologies </h2>
              <p className="text-sm leading-tight font-thin">
                June 2025 - July2025
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                
              </ul>
            </span>
          </div>
          
          
        </div>
      </div>
    </div>
    )
}

export default Experience
