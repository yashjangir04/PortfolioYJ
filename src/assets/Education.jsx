import React from "react";

const Education = () => {
  return (
    <div className="w-full bg-[#00000089]  backdrop-blur-2xl flex flex-col items-center py-20" id="education">
      <h1 className="text-white text-4xl md:text-5xl text-center inter relative">
        Education
        <span className="rainbow-underline"></span>
      </h1>
      <div className="timeline relative w-[80%] rounded-lg mt-20 neue">
        <div className="container w-1/2 relative py-[10px] px-[50px] left-0 md:left-1/2  ">
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] left-[-20px]"></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">Indian Institute of Information Technology, Kota</h2>
            <small className="font-medium text-md text-zinc-600">
              19 Aug 2024 - Present
            </small>
            <p className="text-md text-purple-600">
              Current CGPA :- 9.46
            </p>
            <span className="rightc-arrow"></span>
          </div>
        </div>

        <div className="container w-1/2 relative py-[10px] px-[50px] left-0">
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] right-[-20px] "></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">Matrix JEE Academy, Sikar</h2>
            <small className="font-medium text-md text-zinc-600">
              3 April 2023 - 26 May 2024
            </small>
            <p className="text-md text-purple-600">
              Cleared JEE Mains and JEE Advanced
            </p>
            <span className="leftc-arrow"></span>
          </div>
        </div>

        <div className="container w-1/2 relative py-[10px] px-[50px] left-0 md:left-1/2  ">
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] left-[-20px]"></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">Lakshmipat Singhania Academy , Bissau</h2>
            <small className="font-medium text-md text-zinc-600">
              Senior Secondary Education (2023)
            </small>
            <p className="text-md text-purple-600">
              Grade - 88.88%
            </p>
            <span className="rightc-arrow"></span>
          </div>
        </div>

        <div className="container w-1/2 relative py-[10px] px-[50px] left-0">
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] right-[-20px] "></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">Lakshmipat Singhania Academy , Bissau</h2>
            <small className="font-medium text-md text-zinc-600">
              Secondary Education (2021)
            </small>
            <p className="text-md text-purple-600">
              Grade - 91.6%
            </p>
            <span className="leftc-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
