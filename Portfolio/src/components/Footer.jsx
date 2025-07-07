import React from 'react'

function Footer() {
    return (
        <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h3 className="text-sm md:text-2xl font-normal">
          © 2025 Gurkirat Singh
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <a href="https://github.com/GurkiratSingh1874" target="_blank" rel="noopener noreferrer">GitHub</a>
          
        </li>
        <li className="flex gap-1 items-center">
          <a href="https://www.linkedin.com/in/gurkirat-singh-1a115a28a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
         
        </li>
        
      </ul>
    </div>
    )
}

export default Footer
