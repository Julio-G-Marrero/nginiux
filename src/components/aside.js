import React from "react";
import logo from '../images/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Aside(){
    return(
        <>
            <div class="w-64 bg-gray-800 text-white h-screen">
                <div class="p-6">
                  <img alt="Company logo with a simple geometric design" class="mx-auto mb-4" height="100" src={logo} width="100"/>
                  <h1 class="text-2xl font-bold">
                      Nginiux
                  </h1>
                </div>
                <nav class="mt-10">
                <Link to="/nomina">
                  <button className='flex justify-start items-center w-full gap-2 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700'>
                    <div>
                      <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd"/>
                      <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd"/>
                      <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                      </svg>
                    </div>
                    <div>
                      <h1 className='text-lg'>Nomina</h1>
                    </div>
                  </button>
                </Link>
                <Link to="/ordenes">
                  <button className='flex justify-start items-center w-full gap-2 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700'>
                    <div>
                      <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h1 className='text-lg'>Ordenes de compra</h1>
                    </div>
                  </button>
                </Link>
                
                </nav>
            </div>
        </>
    )
}

export default Aside