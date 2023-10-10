import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import SignUp from "./pages/SignUp";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import ForestMap from "./pages/ForestMap";
import FireMap from "./pages/FireMap";
import CameraMap from "./pages/CameraMap";
import Test from "./pages/Test";

function App() {
  return (
    <div className=" font-sans ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/map" element={<Map />} />
        <Route path="/forestMap" element={<ForestMap />} />
        <Route path="/fireMap" element={<FireMap />} />
        <Route path="/cameraMap" element={<CameraMap />} />
        <Route path="/test" element={<Test/>} />
      </Routes>

      {/* <Header /> */}
      {/* <Routes>
        <div className="max-w-[1300px] px-2 mx-auto">
         <Route path='/' element={ <Main />} />
          <Register path='/signIn' element={<Register/>} />
        </div>
      </Routes> */}
    </div>
  );
}

export default App;
