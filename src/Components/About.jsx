import React from 'react';

const About = () => {
  // List of skills categorized as Languages and Frameworks/Libraries
  const languages = [
    { name: 'Python', level: '80%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'HTML & CSS', level: '85%' },
    { name: 'PHP', level: '60%' },
    { name: 'MySQL', level: '75%' },
    { name: 'Linux', level: '90%' },
  ];

  const frameworks = [
    { name: 'React', level: '70%' },
    { name: 'Angular', level: '60%' },
    { name: 'Node.js', level: '65%' },
    { name: 'Docker', level: '70%' },
    { name: 'Flask', level: '55%' },
    { name: 'Azure', level: '60%' },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-black text-white p-5">
        <h1 className="text-3xl font-bold mb-8 text-center text-yellow-400">About Me</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Languages */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-400">Languages</h2>
            {languages.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-yellow-400">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-400">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Frameworks/Libraries */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center text-purple-400">Frameworks & Libraries</h2>
            {frameworks.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-yellow-400">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-400">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
