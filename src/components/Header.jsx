import React, { useState } from "react";
import globe from "../globee.png";
import { Link } from "react-router-dom";
import main from '../main.png'

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const changeMobile = (item) => {
    return setMobile(item);
  };

  return (
    <div className="bg-[#42AAFF]">
      <div className="flex items-center justify-between h-[80px] leading-[80px] max-w-[1300px] px-2 mx-auto">
        <div
          className="hidden absolute top-0 left-0 w-[200px] pr-5 h-[100vh] pt-3 bg-white "
          style={{ display: mobile ? "block" : "none" }}
        >
          <div className="w-full flex items-center justify-end">
            <svg
              onClick={() => changeMobile(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <ul className="  -leading-[200px] flex flex-col ">
            <Link to="/">
              <li className="hover:bg-[#42AAFF] pl-3 h-[60px] leading-[60px]">
                Home
              </li>
            </Link>
            <a href="#about">
              <li className="hover:bg-[#42AAFF] pl-3 h-[60px] leading-[60px]">
                About
              </li>
            </a>
            <Link to="/map">
              <li className="hover:bg-[#42AAFF] pl-3 h-[60px] leading-[60px]  ">
                Map
              </li>
            </Link>
            <Link to="/signUp">
              <li className="hover:bg-[#42AAFF] pl-3 h-[60px] leading-[60px]  ">
                SignUp
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <svg
            onClick={() => changeMobile(true)}
            className="md:hidden block h-7 w-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <div className=" uppercase text-2xl    font-[500] text-white ">
            Novation
          </div>
        </div>
        <div className="md:flex  items-center">
          <ul className="md:flex hidden items-center gap-6 mr-[60px] text-white ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <a href="#about">
              <li>About</li>
            </a>
            <Link to="/map">
              <li>Map</li>
            </Link>
          </ul>
          <div className="flex items-center gap-3">
       
            <Link to='/signUp'>
            <button className="bg-white h-[40px] md:block hidden leading-[40px] px-4 rounded-lg text-sm text-black">
              Sign Up
            </button>
            </Link>
        
            <button className="bg-white h-[40px] md:block hidden leading-[40px] px-4 rounded-lg text-sm text-black">
              Sign In
            </button>
            <button className=" md:hidden flex items-center justify-center w-7 h-7 bg-white rounded-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 "
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] md:py-[60px] py-[30px] md:flex block  gap-[30px] items-center justify-between px-2 mx-auto text-white">
        <div className=" md:w-[50%]  ">
          <h1 className="md:text-5xl md:text-left text-center font-semibold leading-[40px] text-3xl md:mb-[30px] mb-[20px] uppercase">
            Create a better, more sustainable world
          </h1>
          <p className="mb-[30px] md:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minus
            tempora sit vitae rerum laboriosam. Rem nostrum tempora dolores
            aliquid, quis praesentium labore at dolorum beatae, velit ipsa odit
            adipisci!
          </p>
         <div className="w-full flex items-center md:justify-start justify-center ">
         <button className="bg-white px-6 py-3 md:mb-0 mb-4  rounded-lg text-black text-sm font-semibold ">
            Learn More
          </button>
         </div>
        </div>
        <div className="md:w-[50%] md:h-[300px] h-[200px] md:mt-0 mt-[20px] flex items-center justify-center">
          <img
            className="md:w-[450px] w-[270px] h-auto"
            src={main}
            alt="globe"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
