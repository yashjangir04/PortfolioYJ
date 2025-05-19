import React from "react";
import img from './Images/kota.jpg'

const About = () => {
  return (
    <div className="w-full min-h-screen py-20 bg-[#00000089] backdrop-blur-2xl px-8 md:px-24 " id="about">
      <h1 className="text-white text-4xl md:text-5xl inter text-center relative">
        About Me
        <span className="rainbow-underline"></span>
      </h1>
      <div className="abtPartitions mt-20 flex flex-col md:flex-row w-[100%] gap-8 md:gap-0">
        <div className="abtLeft w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <img
            src={img}
            alt="gif"
            className="w-[60%] rounded-2xl"
          />
        </div>
        <div className="abtRight w-full md:w-1/2 flex flex-col justify-center gap-10 items">
          <h1 className="text-white inter text-lg md:text-xl">
            <span className="text-3xl md:text-4xl text-purple-600">A</span> second year{" "}
            B.Tech CSE
            student at IIIT Kota who enjoy building stuffs with code — especially
            in web development and data structures and like solving problems and
            creating user-friendly, efficient solutions.
          </h1>
          <h1 className="text-white inter text-lg md:text-xl">
            In my <span className="neue">Free Time</span>, I play the piano and
            basketball to stay balanced and refreshed. I'm always eager to learn
            new technologies, take on challenges, and grow as a developer.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
