import React from 'react';
import CinesourceHub from "../assets/CinesourceHub.png";
import MentalHealthAI from "../assets/Mental-Health-AI.png";

const Project = () => {
  return (
    <>
      <div className="w-full select-none min-h-screen bg-black text-white p-5">
        
        {/* Search Bar */}
        <div className="search-bar flex justify-end mb-5">
          <div className="relative w-full max-w-sm">
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full pl-4 pr-12 py-2 text-black rounded-full border-2 border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-3 py-1">
              🔍
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-8">

          {/* Card 1 - Cine Source Hub */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src={CinesourceHub} alt="Cine Source Hub" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">Cine Source Hub 🎬</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-red-600 rounded-full px-2'>python</h1>
              <h1 className='bg-blue-600 rounded-full px-2'>API</h1>
            </div>
            <div className="bio text-gray-300">Cine Source Hub is a Python-based movie search aggregator that searches across multiple torrent and movie indexing websites in parallel.</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/CineSourceHub.git', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>

          {/* Card 2 - Mental-Health-AI */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src={MentalHealthAI} alt="Cine Source Hub" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">Mental-Health-AI</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-red-600 rounded-full px-2'>python</h1>
              <h1 className='bg-blue-600 rounded-full px-2'>LLM</h1>
            </div>
            <div className="bio text-gray-300">A Conversational AI designed to provide emotional support and mental well-being guidance through intelligent conversations.</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/Mental-Health-AI.git', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>
          
          {/* Card 3 - IPScanMaster */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanMaster/raw/main/assets/image.png" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">IPScanMaster</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-red-600 rounded-full px-2'>python</h1>
              <h1 className='bg-blue-600 rounded-full px-2'>shell</h1>
            </div>
            <div className="bio text-gray-300">IPScanMaster is a network analysis tool with Scan and Attack functionalities.</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/IPScanMaster', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>
          
          {/* Card 4 - IPScanAPI */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanAPI/blob/main/assets/dashboard.png?raw=true" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">IPScanAPI</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-red-600 rounded-full px-2'>Flask</h1>
              <h1 className='bg-blue-600 rounded-full px-2'>python</h1>
            </div>
            <div className="bio text-gray-300">IPScanAPI - A Flask-based API for retrieving detailed IP address information and network details. 🚀</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/IPScanAPI.git', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>
          
          {/* Card 5 - FinalRecon */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://camo.githubusercontent.com/162c7c056f9eff99ed25619c8a4111168da8e3d1d666341b1a838f2be8efc438/68747470733a2f2f692e696d6775722e636f6d2f724c454e6843702e6a7067" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">FinalRecon</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-red-600 rounded-full px-2'>python</h1>
              <h1 className='bg-blue-600 rounded-full px-2'>Docker</h1>
            </div>
            <div className="bio text-gray-300">FinalRecon is an all in one automatic web reconnaissance tool written in python.</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/FinalRecon.git', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>
          
          {/* Card 6 - reverse-pySHELL */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/reverse-pySHELL/raw/main/assests/image.png" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">reverse-pySHELL</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-red-600 rounded-full px-2'>python</h1>
            </div>
            <div className="bio text-gray-300">A Python-based reverse shell project containing both attacker and victim files.</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/reverse-pySHELL.git', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>
          
          {/* Card 7 - Password-Manager */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/Password-Manager/raw/main/assests/password_manager.png" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">Password-Manager</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-red-600 rounded-full px-2'>python</h1>
              <h1 className='bg-blue-600 rounded-full px-2'>Docker</h1>
            </div>
            <div className="bio text-gray-300">A CLI application that allows users to securely store, retrieve, and generate passwords.</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/Password-Manager.git', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>
          
          {/* Card 8 - File-Encryptions */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/File-Encryptions/raw/main/assests/file-encryption-Banner.png" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">File-Encryptions</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-red-600 rounded-full px-2'>python</h1>
              <h1 className='bg-blue-600 rounded-full px-2'>Docker</h1>
            </div>
            <div className="bio text-gray-300">Securely encrypt and decrypt various text file formats using a customizable security key.</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/File-Encryptions.git', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>
          
          {/* Card 9 - WinClearCache */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-4 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/WinClearCache/raw/main/assets/WinCleat-Cache-logo.png" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">WinClearCache</div>
            <div className="tags flex font-mono gap-1 font-bold mb-2">
              <h1 className='bg-blue-600 rounded-full px-2'>Batchfile</h1>
            </div>
            <div className="bio text-gray-300">A comprehensive Windows cleaning tool designed to remove temporary and unnecessary cache files.</div>
            <div className="btn flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => window.open('https://github.com/theNareshofficial/WinClearCache.git', '_blank')}
                className="bg-gradient-to-r animate-bounce from-orange-400 to-yellow-500 hover:from-teal-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
                View
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Project;