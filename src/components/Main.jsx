import React from "react";

const Main = () => {
  return (
    <div className="md:mt-[80px] mt-[50px] max-w-[1300px] px-2 mx-auto">
      <div id='about'>
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
            These are performed through specialized AI (artificial intelligence) programs
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
            Sending an SMS about the fire to the registered and nearby residents' phones.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-[60px] h-[60px] bg-[#42AAFF] rounded-[50%] mb-[30px] flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

            </div>
            <h3 className="font-bold text-xl mb-3">
            Maximum speed and quality
            </h3>
            <p>
            The rapid delivery of information to the necessary institutions with effective AI technologies
            </p>
          </div>
        </div>

        <div className="w-full md:h-[430px] h-[230px] bg-gray-300 mt-[70px]">
          <video
            src="https://firescout.ai/wp-content/uploads/2022/04/Hero-01.mp4"
            className="h-full w-full object-cover"
            loop
            autoPlay
            muted
          ></video>
        </div>

        <div className="mt-[100px] md:flex block items-center justify-between gap-[50px]">
          <div className=" md:w-[50%]  md:h-[430px] h-[230px]">
          <iframe width="670" height="430" frameborder="0" src="https://www.globalforestwatch.org/embed/map/"></iframe>
          </div>
          <div className="md:w-[50%] md:mt-0 mt-5">
            <h1 className="md:text-3xl text-2xl font-semibold mb-4 ">
              Projects to Power Your Goals
            </h1>
            <p>
              Vitae a rhoncus viverra sed a, velit sagittis ac. Dignissim
              ullamcorper bibendum netus faucibus eros cursus blandit dictumst.
              Vel mauris nisl ullamcorper netus enim dapibus.itae a rhoncus
              viverra sed a, velit sagittis ac. Dignissim ullamcorpe r Vel
              mauris nisl ullamcorper netus enim dapibus.itae a rhoncus viverra
              sed a, velit sagittis ac
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
