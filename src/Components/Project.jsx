import React from 'react';

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-8">
          
          {/* Sample Project Card */}
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-2 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanMaster/blob/main/assets/image.png?raw=true" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">WinClearCache</div>
            <div className="tags text-yellow-400 font-bold mb-2">#Python</div>
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
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-2 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanMaster/blob/main/assets/image.png?raw=true" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">IPScanMaster</div>
            <div className="tags text-yellow-400 font-bold mb-2">#Python</div>
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
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-2 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanMaster/blob/main/assets/image.png?raw=true" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">IPScanMaster</div>
            <div className="tags text-yellow-400 font-bold mb-2">#Python</div>
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
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-2 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanMaster/blob/main/assets/image.png?raw=true" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">IPScanMaster</div>
            <div className="tags text-yellow-400 font-bold mb-2">#Python</div>
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
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-2 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanMaster/blob/main/assets/image.png?raw=true" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">IPScanMaster</div>
            <div className="tags text-yellow-400 font-bold mb-2">#Python</div>
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
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-2 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanMaster/blob/main/assets/image.png?raw=true" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">IPScanMaster</div>
            <div className="tags text-yellow-400 font-bold mb-2">#Python</div>
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
          <div className="project-card hover:shadow-xl hover:shadow-gray-700 bg-gray-700 p-5 rounded-lg border-dashed border-2 border-yellow-400">
            <div className="photo h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <img src="https://github.com/theNareshofficial/IPScanMaster/blob/main/assets/image.png?raw=true" alt="No Image" className="w-full h-full object-cover rounded-lg hover:shadow-2xl hover:shadow-yellow-200 hover:translate-y-1 ease-in-out hover:duration-200" />
            </div>
            <div className="title text-xl font-bold mb-2 text-center hover:text-yellow-400">IPScanMaster</div>
            <div className="tags text-yellow-400 font-bold mb-2">#Python</div>
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

        </div>
      </div>
    </>
  );
};

export default Project;
