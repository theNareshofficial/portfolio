import React, { useState, useEffect } from 'react';

const Home = () => {
  const skills = [
    'Student',
    'Programmer',
    'Full-Stack Developer',
    'Security-Tool Developer',
    'Linux Administrator',
    'Technical Associate',
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // Cycle through skills one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) =>
        prevIndex === skills.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [ skills]);

  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col md:flex-row items-center justify-center overflow-x-hidden">

        <div className="text-container space-y-5 md:w-1/2 px-5 md:px-10 text-center md:text-left">
          
          <div className="hello">
            <p className="helloWorld animate-bounce antialiased text-yellow-400 font-bold md:text-lg font-mono">
              HE110-W0R1D
            </p>
          </div>

          <div className="name">
            <h1 className="name font-bold font-sans text-4xl md:text-5xl text-white">
              Hi, I'm{' '}
              <span className="text-yellow-400 italic hover:text-yellow-400 hover:underline hover:decoration-wavy hover:uppercase">
                Nare$h
              </span>
            </h1>
          </div>

          <div className="domain">
            <h1 className="domain text-3xl md:text-4xl font-bold font-serif text-white">
              a{' '}
              <span className="text-yellow-400 animate-pulse hover:text-red-600 hover:uppercase">
                {skills[currentSkillIndex]}
              </span>
            </h1>
          </div>

          <div className="description">
            <p className="text-center first-letter:font-bold hover:uppercase first-letter:text-yellow-400 font-sans text-white text-lg tracking-wide">
              My programming journey began when I was{' '}
              <span className="text-yellow-400 font-bold text-4xl hover:text-red-700 hover:cursor-none">
                17
              </span>{' '}
              years old, and since then I have explored various programming
              languages, frameworks, and libraries. Google has been a constant
              source of knowledge and inspiration, helping me stay updated on
              the latest trends in programming and ethical hacking. Now I'm
              ready to take on a new challenge: diving deep into the network
              layer of real-world ethical hacking. I want to learn how to
              analyze, manipulate, and secure network traffic, as well as how
              to exploit vulnerabilities and perform penetration testing.
            </p>
          </div>
        </div>

        {/* Photo Section */}
        <div className="photo-container md:w-1/3 flex justify-center">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY2U6VHuaSJ6q205WjLGkfnI-2ZnzsrueSNpSDu6Y-5ZCwW46SOemUWqjQvObZICved9SZvyhakf7-sdOwpa92rhsdfL-CZnxeceUcQyUosOLeNjOtS-UTZjuYoloRxFLZ-tQsJfM7apsafdQUtaD5j7CsRRr-QoTSkIFHvkwvczVI2jw/s220/Naresh-modified.png"
            alt="Naresh"
            className="cursor-pointer shadow-2xl shadow-purple-600 hover:shadow-2xl hover:shadow-yellow-500 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
