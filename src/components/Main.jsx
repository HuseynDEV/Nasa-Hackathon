import React from "react";
import fireMap from "../fireMap.png";
import cameraMap from "../cameraMap.png";
import forestMap from "../forestMap.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="md:mt-[80px] mt-[50px] max-w-[1300px] px-2 mx-auto">
      <div id="about">
        <h1 className="text-center text-3xl font-bold">What we work?</h1>

        <div className="grid  md:grid-cols-3 grid-cols-1  gap-[30px] md:mt-[80px] mt-[30px] text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[60px] h-[60px] bg-[#42AAFF] rounded-[50%] mb-[30px] flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">
              Detection of fire in advance with sensors
            </h3>
            <p>
              These are performed through specialized AI (artificial
              intelligence) programs
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-[60px] h-[60px] bg-[#42AAFF] rounded-[50%] mb-[30px]  flex items-center justify-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">
              Alerting people living nearby.
            </h3>
            <p>
              Sending an SMS about the fire to the registered and nearby
              residents' phones.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-[60px] h-[60px] bg-[#42AAFF] rounded-[50%] mb-[30px] flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">
              Maximum speed and quality
            </h3>
            <p>
              The rapid delivery of information to the necessary institutions
              with effective AI technologies
            </p>
          </div>
        </div>

        <div className="w-full md:h-[430px] h-[230px]  mt-[70px]">
            <h1 className="text-3xl text-center font-bold mb-4">Our AI Detector</h1>
          <video
            src="https://firescout.ai/wp-content/uploads/2022/04/Hero-01.mp4"
            className="h-full w-full object-cover"
            loop
            autoPlay
            muted
          ></video>
        </div>

        <div className="mt-[100px] mb-[100px]">
          <h1 className="text-center text-3xl mb-3">Our Maps</h1>
          <div className=" md:flex block items-start justify-between gap-[20px]">
            <div className="md:w-[33.33%] shadow-xl md:mb-0 mb-[50px]  pb-3 ">
              <img
                className="w-full md:h-[300px] h-[200px] object-cover"
                src={forestMap}
                alt=""
              />
              <div className="p-2">
                <h3 className="font-bold mt-2">Forest Map</h3>
                <p>Bu bizə meşə xəritəsini göstərir</p>
                <Link to='/forestMap' type='button' className="mt-4 px-4 py-2 rounded-[10px] text-white bg-[#42AAFF]">For More</Link>
              </div>
            </div>
            <div className="md:w-[33.33%] shadow-xl md:mb-0 mb-[60px] pb-2 ">
              <img
                className="w-full md:h-[300px] h-[200px] object-cover"
                src={fireMap}
                alt=""
              />
              <div className="p-2">
                <h3 className="font-bold mt-2">Fire Location Map</h3>
                <p>
                  Bu bizə hal-hazırda yanğın baş verən və ya yanğın təhlükəsi
                  olan yerləri göstərir
                </p>
                <button className="mt-4 px-4 py-2 rounded-[10px] text-white bg-[#42AAFF]">For More</button>
              </div>
            </div>
            <div className="md:w-[33.33%] shadow-xl pb-2">
              <img
                className="w-full md:h-[300px] h-[200px] object-cover"
                src={cameraMap}
                alt=""
              />
              <div className="p-2">
                <h3 className="font-bold mt-2">Camera Location Map</h3>
                <p>Bu bizə hal-hazırda kameraların yerləşdiyi ünvanları göstərir</p>
                <button className="mt-4 px-4 py-2 rounded-[10px] text-white bg-[#42AAFF]">For More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
