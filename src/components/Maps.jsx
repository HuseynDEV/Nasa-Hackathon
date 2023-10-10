import React from "react";
import fire_map from '../firee.png'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Footer from "./Footer";

const data = [
  {
    name: "America",
    Moderate: 30,
    High: 50,
    Low:20,
    amt: 100,
  },
  {
    name: "Canada",
    Moderate: 15,
    High: 40,
    Low:45 ,
    amt: 100,
  },
  {
    name: "Azerbaijan",
    Moderate: 20,
    High: 10,
    Low:70,
    amt: 100,
  },
  {
    name: "Finland",
    Moderate: 40,
    High: 10,
    Low:50 ,
    amt: 100,
  },
  {
    name: "Egypt",
    Moderate: 40,
    High: 20,
    Low:40,
    amt: 100,
  },
  {
    name: "Alaska",
    Moderate: 60,
    High: 10,
    Low:30,
    amt: 100,
  },

];

export default function Maps() {
  return (
    <div>
        <h1 className="text-3xl mb-[20px]">Fire Map</h1>
      <img
      className="w-full h-[400px] mb-[100px] object-cover"
        src={fire_map}
        alt=""
      />


      <h1 className="text-3xl mb-[40px]">Statistics of Fire</h1>

      <ResponsiveContainer width="95%" height={400}>
        <BarChart
          className="w-[100%]"
          width={1300}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(tick) => {
              return `${tick}%`;
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="High" fill="#DF5331" />
          <Bar dataKey="Moderate" fill="#F48441" />
          <Bar dataKey="Low" fill="#FFD645" />
        </BarChart>
      </ResponsiveContainer>


    </div>
  );
}
