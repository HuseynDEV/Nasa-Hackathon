import React from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import '../App.css'
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//     {
//       name: "America",
//       Moderate: 30,
//       High: 50,
//       Low:20,
//       amt: 100,
//     },
//     {
//       name: "Canada",
//       Moderate: 15,
//       High: 40,
//       Low:45 ,
//       amt: 100,
//     },
//     {
//       name: "Azerbaijan",
//       Moderate: 20,
//       High: 10,
//       Low:70,
//       amt: 100,
//     },
//     {
//       name: "Finland",
//       Moderate: 40,
//       High: 10,
//       Low:50 ,
//       amt: 100,
//     },
//     {
//       name: "Egypt",
//       Moderate: 40,
//       High: 20,
//       Low:40,
//       amt: 100,
//     },
//     {
//       name: "Alaska",
//       Moderate: 60,
//       High: 10,
//       Low:30,
//       amt: 100,
//     },
  
//   ];

const ForestMap = () => {
  return (
    <div>
        <Header2/>
        <div className='max-w-[1300px] mx-auto px-2 my-[50px]' >
            <h1 className='text-3xl font-bold mb-4'>Forest Map</h1>
        <iframe className='w-full h-[500px]'  frameborder="0" src="https://www.globalforestwatch.org/embed/map/"></iframe>
        <h1 className='text-3xl font-bold'>Forest Chart</h1>
      <div className='w-full h-[500px] relative'>
     
      <iframe className='w-full h-full' src="https://ourworldindata.org/grapher/annual-change-forest-area?stackMode=absolute%C2%AEion" loading="lazy"  ></iframe>
<div className='absolute bottom-0 left-0 w-full bg-white h-[100px] '></div>
<div className='absolute top-0 left-0 w-full bg-white h-[60px] '></div>
      </div>
        </div>


      {/* <ResponsiveContainer width="95%" height={400}>
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
      </ResponsiveContainer> */}

        <Footer/>
    </div>
  )
}

export default ForestMap