import React from "react";

const About = () => {
  const languages = [
    { name: "C", level: "80%" },
    { name: "PYTHON", level: "90%" },
    { name: "JAVA", level: "70%" },
    { name: "JAVASCRIPT", level: "65%" },
    { name: "PHP", level: "85%" },
    { name: "BASH", level: "85%" },
    { name: "BATCH", level: "55%" },
  ];

  const frameworks = [
    { name: "FLASK", level: "75%" },
    { name: "REACT", level: "70%" },
    { name: "BOOTSTRAP 5", level: "85%" },
    { name: "TAILWIND CSS", level: "85%" },
    { name: "MYSQL", level: "70%" },
    { name: "DOCKER", level: "80%" },
    { name: "GIT & GITHUB", level: "90%" },
  ];

  const tools = [
    { name: "METASPLOIT FRAMWORK", level: "70%" },
    { name: "NMAP", level: "85%" },
    { name: "SOCIAL ENGINEERING TOOLKIT", level: "80%" },
    { name: "BURP SUITE", level: "70%" },
    { name: "JOHN THE RIPPER", level: "60%" },
    { name: "NETCAT", level: "60%" },
  ];

  const iot = [
    { name: "RASPBERRY PI PICO", level: "60%" },
    { name: "MICRO PYTHON", level: "70%" },
    { name: "EMBEDDED C", level: "30%" },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-black text-white p-5 tracking-wide ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side: Languages */}
          <div>
            <h2 className="text-2xl hover:underline font-semibold mb-2 text-center text-blue-400">
              Programming Skills{" "}
            </h2>
            {languages.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-bold text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: WebApplication Development */}
          <div>
            <h2 className="text-2xl hover:underline font-semibold mb-2 text-center text-purple-400">
              WebApplication Development
            </h2>
            {frameworks.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-bold text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Side: TOOLS */}
          <div>
            <h2 className="text-2xl hover:underline font-semibold mb-2 text-center text-blue-400">
              TOOLS
            </h2>
            {tools.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-bold text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Side: IoT & Electronics */}
          <div>
            <h2 className="text-2xl hover:underline font-semibold mb-2 text-center text-purple-400">
              IoT & Electronics
            </h2>
            {iot.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-bold text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="Education m-3">
            <h1 className="text-4xl font-bold mb-4 text-center text-purple-400 hover:underline">
              Education
            </h1>
            <div className="flex">
              <div className="border-x-2 border-purple-600"></div>
              <div>
                <div className="btech mb-8">
                  <button className="font-bold rounded-full bg-purple-600 p-2 hover:bg-black hover:border-4 hover:border-purple-600 hover:border-dashed hover:text-white">
                    2024 - Present
                  </button>
                  <h1 className="text-2xl font-bold p-3 hover:text-purple-600 hover:underline">
                    BTech IT
                  </h1>
                  <p className="p-5 font-medium">
                    Currently pursuing a{" "}
                    <strong className="hover:text-blue-600">
                      B.Tech in Information Technology{" "}
                    </strong>{" "}
                    at{" "}
                    <strong>
                      <a
                        href="https://www.annamalaiarengg.com/"
                        className="text-blue-600 hover: hover:text-red-600"
                      >
                        Annamalaiyar Engineering College
                      </a>
                      ,
                    </strong>{" "}
                    with a strong focus on programming languages, algorithms,
                    web development, object-oriented programming, data science,
                    electronics, and Linux. This education is shaping my
                    technical foundation and preparing me for dynamic challenges
                    in the IT field.
                  </p>
                </div>

                <div className="hack mb-8">
                  <button className="font-bold rounded-full bg-purple-600 p-2 hover:bg-black hover:border-4 hover:border-purple-600 hover:border-dashed hover:text-white">
                    2024 - Present
                  </button>
                  <h1 className="text-2xl font-bold p-3 hover:text-purple-600 hover:underline">
                    Full Ethical Hacking
                  </h1>
                  <p className="p-5 font-medium">
                    Currently pursuing a comprehensive{" "}
                    <strong className="text-blue-600 hover::underline hover:text-red-600">
                      Ethical Hacking Course
                    </strong>
                    , exploring topics like{" "}
                    <span className="hover:text-red-700 hover:font-bold font-bold">
                      penetration testing, network security, cryptography,
                      mobile hacking and malware analysis.
                    </span>{" "}
                    This training is enhancing my understanding of
                    vulnerabilities, exploits, and effective defense mechanisms,
                    helping me develop the skills to secure digital systems
                    proactively.
                  </p>
                </div>

                <div className="sna mb-8">
                  <button className="font-bold rounded-full bg-purple-600 p-2 hover:bg-black hover:border-4 hover:border-purple-600 hover:border-dashed hover:text-white">
                    2023 - 2024
                  </button>
                  <h1 className="text-2xl font-bold p-3 hover:text-purple-600 hover:underline">
                    Offensive & Defensive Programmer
                  </h1>
                  <p className="p-5 font-medium">
                    As a student at{" "}
                    <strong>
                      <a
                        href="https://selfmade.ninja/"
                        className="text-blue-600 hover: hover:text-red-600"
                      >
                        Selfmade Ninja Academy{" "}
                      </a>
                      ,
                    </strong>{" "}
                    I am gaining comprehensive skills in computer operations,
                    architecture, Linux, Docker, and web engineering. My studies
                    focus on secure coding, binary buffer overflow
                    vulnerabilities, network communication, and the use of
                    sockets for network programming. I explore both Offensive
                    and Defensive Cybersecurity techniques, learning to identify
                    and mitigate software and network vulnerabilities. This
                    diverse education is equipping me with the expertise needed
                    for a successful career in cybersecurity and IT.
                  </p>
                  <button
                    className="font-bold rounded-full bg-purple-500 text-white p-2 mx-60 hover:bg-red-600"
                    onClick={() =>
                      window.open("./certificates/SNA_Certificate.jpeg")
                    }
                  >
                    {" "}
                    Certificate
                  </button>
                </div>

                <div className="diploma">
                  <button className="font-bold rounded-full bg-purple-600 p-2 hover:bg-black hover:border-4 hover:border-purple-600 hover:border-dashed hover:text-white">
                    2020 - 2023
                  </button>
                  <h1 className="text-2xl font-bold p-3 hover:text-purple-600 hover:underline">
                    Diploma in Computer Science
                  </h1>
                  <p className="p-5 font-medium">
                    I'm a student at{" "}
                    <strong className="text-blue-600 hover::underline hover:text-red-600">
                      Shri Sitheswarar Polytechnic College
                    </strong>
                    , but I don't learn much from the syllabus. It's boring and
                    outdated. I prefer to explore things outside the syllabus,
                    where I can find more interesting and useful knowledge. It's
                    amazing how much I can learn from the internet and books.
                    Sometimes I wonder why I even go to college...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="Experience m-3">
            <h1 className="text-4xl font-bold mb-4 text-center text-purple-400 hover:underline">
              Experience
            </h1>
            <div className="flex">
              {/* Vertical Line */}
              <div className="border-l-4 border-purple-600"></div>

              {/* Experience Details */}
              <div>
                <div className="pacer mb-8">
                  <button className="font-bold rounded-full bg-purple-600 p-2 hover:bg-black hover:border-4 hover:border-purple-600 hover:border-dashed hover:text-white">
                    June 2025 - Present
                  </button>
                  <h2 className="text-2xl font-bold p-3 hover:text-purple-600 hover:underline">
                    IT Support Engineer
                  </h2>
                  <p className="p-5 font-medium">
                    Hi, I'm a IT Support Specialist at{" "}
                    <strong>
                      <a
                        href="https://www.tvs-e.in/"
                        className="text-blue-600 hover:text-red-600"
                      >
                        TVS Electronics
                      </a>
                    </strong>
                    . I troubleshoot hardware, software, and network issues to
                    ensure smooth IT operations. I enjoy solving problems,
                    learning new technologies, and helping users work more
                    efficiently.
                  </p>
                  <h3 className="text-xl font-bold text-red-600 hover:text-purple-600 hover:underline px-3 mt-2">
                    Projects Deployed
                  </h3>
                  <div className="border-l-2 border-dashed border-gray-600 ml-4 pl-4 mt-1">
                    <div className="text-sm mb-1">
                      <span className="text-blue-400 font-bold">ITC</span>{" "}
                      <span className="text-gray-500 ml-2">
                        (Jan 2025 - Present)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pacer mb-8">
                  <button className="font-bold rounded-full bg-purple-600 p-2 hover:bg-black hover:border-4 hover:border-purple-600 hover:border-dashed hover:text-white">
                    May 2023 - May 2025
                  </button>
                  <h2 className="text-2xl font-bold p-3 hover:text-purple-600 hover:underline">
                    IT Technical Associate
                  </h2>
                  <p className="p-5 font-medium">
                    Hi, I'm an IT Technical Associate at{" "}
                    <strong>
                      <a
                        href="https://pacerautomation.com/"
                        className="text-blue-600 hover: hover:text-red-600"
                      >
                        Pacer Automation Pvt Ltd
                      </a>
                    </strong>
                    . Every day, I get to learn new things and troubleshoot
                    different kinds of problems on various platforms, including
                    networking. It's fun and challenging at the same time. I
                    enjoy helping people with their technical issues and making
                    their lives easier...
                  </p>
                  <h3 className="text-xl font-bold text-red-600 hover:text-purple-600 hover:underline px-3 mt-2">
                    Projects Deployed
                  </h3>
                  <div className="border-l-2 border-dashed border-gray-600 ml-4 pl-4 mt-1">
                    <div className="text-sm mb-1">
                      <span className="text-blue-400 font-bold">
                        Natural Remedies (NRPL)
                      </span>{" "}
                      <span className="text-gray-500 ml-2">
                        (Jan 2025 - May 2025)
                      </span>
                    </div>
                    <div className="text-sm mb-1">
                      <span className="text-blue-400 font-bold">Roechling</span>{" "}
                      <span className="text-gray-500 ml-2">
                        (Jan 2024 - Dec 2024)
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-blue-400 font-bold">
                        Mitsubishi
                      </span>{" "}
                      <span className="text-gray-500 ml-2">
                        (Dec 2023 - Dec 2023)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
