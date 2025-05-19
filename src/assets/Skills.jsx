import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="w-full" id="skills">
      <div className="w-full min-h-screen py-20 bg-[#00000089] backdrop-blur-2xl px-8 md:px-24">
        <h1 className="text-white text-4xl md:text-5xl text-center inter relative">
          Skills
          <span className="rainbow-underline"></span>
        </h1>
        <div className="skillsPartition flex flex-col md:flex-row w-full mt-20 gap-4">
          <div className="skpLeft w-full md:w-1/2 rounded-2xl border-1 border-zinc-800 backdrop-blur-2xl py-10 px-5 md:px-30">
            <h1 className="text-center text-white gt text-3xl">
              Frontend <span className="text-purple-600">Development</span>
            </h1>
            <div className="webdSkills w-full flex flex-col md:flex-row gap-12 md:gap-30 mt-8 md:mt-14 items-center md:items-start">
              <div className="skpartl flex flex-col w-1/2 gap-12 border-2 ">
                <div className="r h-[30px] flex flex-row items-center">
                  <TbRosetteDiscountCheckFilled className="text-purple-600 text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">HTML</span>
                </div>
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-white text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">
                    BootStrap
                  </span>
                </div>
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-purple-600 text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">React</span>
                </div>
              </div>
              <div className="skpartl flex flex-col w-1/2 gap-12 border-2 ">
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-white text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">CSS</span>
                </div>
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-purple-600 text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">
                    JavaScript
                  </span>
                </div>
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-white text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skpRight w-full md:w-1/2 rounded-2xl border-1 border-zinc-800 backdrop-blur-2xl py-10 px-5 md:px-30">
            <h1 className="text-center text-white gt text-3xl">
              Backend <span className="text-purple-600">Development</span>
            </h1>
            <div className="webdSkills w-full flex flex-col md:flex-row gap-12 md:gap-30 mt-14 items-center md:items-start">
              <div className="skpartl flex flex-col w-1/2 gap-12 border-2 ">
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-purple-600 text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">MySQL</span>
                </div>
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-white text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">
                    MongoDB
                  </span>
                </div>
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-purple-600 text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">Expess JS</span>
                </div>
              </div>
              <div className="skpartl flex flex-col w-1/2 gap-12 border-2 ">
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-white text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">Node JS</span>
                </div>
                <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-purple-600 text-2xl md:text-3xl inline self-center" />
                  <span className="text-white text-xl ml-2 neue">
                    Git
                  </span>
                </div>
                {/* <div className="r h-[30px] flex flex-row">
                  <TbRosetteDiscountCheckFilled className="text-purple-600 text-2xl md:text-3xl inline self-center " />
                  <span className="text-white text-xl ml-2 neue">
                    SpringBoot
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
