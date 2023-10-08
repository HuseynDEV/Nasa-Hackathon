import React from "react";
import Header2 from "./Header2";

const Register = () => {
  return (
    <div className="max-w-[400px] mt-[80px] mx-auto px-2">
      <h1 className="text-center  text-2xl mb-[16px]">Welcome</h1>
      <p className="text-center mb-[40px] text-[#8F9BB3]">
        On Wednesday, day seven of the trial, lead prosecutor Thomas Binger and
        Judge{" "}
      </p>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" className="p-3 mb-5" placeholder="John" />
        <label htmlFor="SurName">Surname</label>
        <input type="text"   className="p-3 mb-5" placeholder="Doe" />
        <label>Phone</label>
        <input type="number"  className="p-3 mb-5" placeholder="Phone Number" />
        <label>Country</label>
        <select  className="p-3 mb-5">
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Turkey">Turkey</option>
          <option value="USA">USA</option>
        </select>
      </form>
      <p className="text-center my-[30px]">
        By registering you are agreeing to our <span className="text-[#42AAFF]">terms of service</span> and{" "}
        <span className="text-[#42AAFF]">privacy policy</span>{" "}
      </p>
      <button className="mb-[40px] w-full text-center py-4 rounded-xl font-semibold text-xl  bg-[#0095FF] text-white">Sign Up</button>
    </div>
  );
};

export default Register;
