import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";

import p1 from './Images/project-1.png'
import p2 from './Images/project-2.png'
import p3 from './Images/project-3.png'


const Projects = () => {
  return (
    <div className="w-full fluid2" id="projects">
      <div className="w-full min-h-screen py-20 bg-[#000000b8] backdrop-blur-2xl px-8 md:px-24">
        <h1 className="text-white text-4xl md:text-5xl text-center inter relative">
          Projects
          <span className="rainbow-underline"></span>
        </h1>
        <div className="cards flex flex-col justify-center gap-4 mt-20">
            <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="card cursor-pointer w-full md:w-1/4 h-[60vh] bg-[#00000050] border-2xl backdrop-blur-2xl rounded-3xl hover:scale-105 duration-300 px-8 py-5">
                    <div className="cardimg h-3/4 w-full rounded-3xl">
                        <img src={p1} alt="" className="rounded-3xl h-full object-cover" />
                    </div>
                    <h1 className="text-center inter text-white text-2xl mt-3 neue text-nowrap">VigilantEye</h1>
                    <div className="links text-white flex flex-row justify-center gap-4 mt-5">
                        <a href="#"><FaGithub className="inline-block text-2xl"/></a>
                        <a href=""><RxEnter className="inline-block text-2xl"/></a>
                    </div>
                </div>
                <div className="card cursor-pointer w-full md:w-1/4 h-[60vh] bg-[#00000050] border-2xl backdrop-blur-2xl rounded-3xl hover:scale-105 duration-300 px-8 py-5">
                    <div className="cardimg h-3/4 w-full rounded-3xl">
                        <img src={p2} alt="" className="rounded-3xl h-full object-cover" />
                    </div>
                    <h1 className="text-center inter text-white text-2xl mt-3 neue text-nowrap">OAuth-ToDo</h1>
                    <div className="links text-white flex flex-row justify-center gap-4 mt-5">
                        <a href="#"><FaGithub className="inline-block text-2xl"/></a>
                        <a href=""><RxEnter className="inline-block text-2xl"/></a>
                    </div>
                </div>
                <div className="card cursor-pointer w-full md:w-1/4 h-[60vh] bg-[#00000050] border-2xl backdrop-blur-2xl rounded-3xl hover:scale-105 duration-300 px-8 py-5">
                    <div className="cardimg h-3/4 w-full rounded-3xl">
                        <img src={p3} alt="" className="rounded-3xl h-full object-cover" />
                    </div>
                    <h1 className="text-center inter text-white text-2xl mt-3 neue text-nowrap">Reminisce</h1>
                    <div className="links text-white flex flex-row justify-center gap-4 mt-5">
                        <a href="#"><FaGithub className="inline-block text-2xl"/></a>
                        <a href=""><RxEnter className="inline-block text-2xl"/></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
