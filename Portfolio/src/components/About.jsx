import React from 'react'
import AboutImg from "../assets/7358653-removebg-preview.png"
function About() {
    return (
       <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
       mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>Skills</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center '>
                <img className="md:h-80 w-80  " src={AboutImg} alt="About img" />
                <ul>
                    <div className='flex gap-3 py-4'>
                         
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Languages</h1>
                            <p className='text-sm md:text-md leading-tight'>
                                Python, C++, JavaScript, HTML, CSS
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        {/* <IoArrowForward size={30} className="mt-1"/> */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frameworks / Libraries</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            React, Tkinter                           
                             </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        {/* <IoArrowForward size={30} className="mt-1"/> */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Databases</h1>
                            <p className='text-sm md:text-md leading-tight'>
                                MySQL, SQLite
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        {/* <IoArrowForward size={30} className="mt-1"/> */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Tools / Concepts</h1>
                            <p className='text-sm md:text-md leading-tight'>
                                Git, GitHub, VS Code, OOP, DBMS, Basic ML
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
       </div>
    )
}

export default About
