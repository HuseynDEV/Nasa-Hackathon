import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Header2 = () => {
    const [mobile, setMobile] = useState(false);

  return (
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
           <Link to='/'>
              <li className="hover:bg-[#42AAFF] pl-3 h-[60px] leading-[60px]">
                About
              </li>
              </Link>
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
            className="md:hidden block h-7 w-7 text-[#42AAFF]"
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

          <div className=" uppercase text-2xl    font-[500] text-[#42AAFF] ">
          <Link to='/'>Novation</Link>
          </div>
        </div>
        <div className="md:flex  items-center">
          <ul className="md:flex hidden items-center gap-6 mr-[60px]  ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to='/'>
              <li>About</li>
              </Link>
            <Link to="/map">
              <li>Map</li>
            </Link>
          </ul>
          <div className="flex items-center gap-3">
       
            <Link to='/signUp'>
            <button className="  border-[1px] bg-[#42AAFF] text-white   h-[40px] md:block hidden leading-[40px] px-4 rounded-lg text-sm ">
              Sign Up
            </button>
            </Link>
        
            <button className="bg-white  border-[1px] border-white h-[40px] md:block hidden leading-[40px] px-4 rounded-lg text-sm text-black">
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
  )
}

export default Header2