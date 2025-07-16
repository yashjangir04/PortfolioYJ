import React, { useEffect, useRef, useState } from "react";

const Education = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set once
          observer.disconnect(); // Stop observing after it's visible once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect(); // Clean up just in case
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#00000089] backdrop-blur-2xl flex flex-col items-center py-20"
      id="education"
    >
      <h1 className="text-white text-4xl md:text-5xl text-center inter relative">
        Education
        <span className="rainbow-underline"></span>
      </h1>

      <div
        className={`timeline relative w-[80%] rounded-lg mt-20 neue transition-all duration-700 ${
          isVisible ? "applyAnim2" : ""
        }`}
      >
        {/* 1 */}
        <div
          className={`container w-1/2 relative py-[10px] px-[50px] left-0 md:left-1/2 ${
            isVisible ? "applyAnim1" : ""
          }`}
        >
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] left-[-20px]"></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">
              Indian Institute of Information Technology, Kota
            </h2>
            <small className="font-medium text-md text-zinc-600">
              2024 - Present
            </small>
            <p className="text-md text-purple-600">Current CGPA :- 9.67</p>
            <span className="rightc-arrow"></span>
          </div>
        </div>

        {/* 2 */}
        <div
          className={`container w-1/2 relative py-[10px] px-[50px] left-0 ${
            isVisible ? "applyAnim1" : ""
          }`}
        >
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] right-[-20px] "></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">
              Matrix JEE Academy, Sikar
            </h2>
            <small className="font-medium text-md text-zinc-600">
              2023 - 2024
            </small>
            <span className="leftc-arrow"></span>
          </div>
        </div>

        {/* 3 */}
        <div
          className={`container w-1/2 relative py-[10px] px-[50px] left-0 md:left-1/2 ${
            isVisible ? "applyAnim1" : ""
          }`}
        >
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] left-[-20px]"></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">
              Lakshmipat Singhania Academy, Bissau
            </h2>
            <p className="text-md text-purple-600">Senior Secondary Education (2023)  </p>
            <span className="rightc-arrow"></span>
          </div>
        </div>

        {/* 4 */}
        <div
          className={`container w-1/2 relative py-[10px] px-[50px] left-0 ${
            isVisible ? "applyAnim1" : ""
          }`}
        >
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] right-[-20px] "></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">
              Lakshmipat Singhania Academy, Bissau
            </h2>
            <p className="text-md text-purple-600">Secondary Education (2021)</p>
            <span className="leftc-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
