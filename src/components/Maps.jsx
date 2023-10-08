import React from "react";
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

const data = [
  {
    name: "America",
    normal: 40,
    severe: 60,
    amt: 100,
  },
  {
    name: "Canada",
    normal: 30,
    severe: 70,
    amt: 100,
  },
  {
    name: "Azerbaijan",
    normal: 80,
    severe: 20,
    amt: 100,
  },
  {
    name: "Finland",
    normal: 90,
    severe: 10,
    amt: 100,
  },
  {
    name: "Egypt",
    normal: 40,
    severe: 60,
    amt: 100,
  },
  {
    name: "French",
    normal: 80,
    severe: 20,
    amt: 100,
  },
  {
    name: "Italy",
    normal: 90,
    severe: 10,
    amt: 100,
  },
];

export default function Maps() {
  return (
    <div>
        <h1 className="text-3xl mb-[20px]">Fire Map</h1>
      <img
      className="w-full h-[400px] mb-[100px] object-cover"
        src="https://beta.ctvnews.ca/content/dam/ctvnews/images/2023/8/20/1_6526347.jpg?cache_timestamp=1692540566469
"
        alt=""
      />

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
          <Bar dataKey="severe" fill="#fc3003" />
          <Bar dataKey="normal" fill="#fcdb03" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
