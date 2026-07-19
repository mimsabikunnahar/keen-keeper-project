'use client';

import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const Stats = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const calling = timeline.filter(
      (data) => data.action === "calling"
    ).length;

    const texting = timeline.filter(
      (data) => data.action === "texting"
    ).length;

    const videoCalling = timeline.filter(
      (data) => data.action === "video calling"
    ).length;

    setChartData([
      { id: 0, value: calling, label: "calling" },
      { id: 1, value: texting, label: "texting" },
      { id: 2, value: videoCalling, label: "video calling" },
    ]);
  }, []);
 
 
 
  return (
    <div className='my-5 m-20' >
      <h1 className="text-4xl font-bold text-[#1F2937]">Friendship Analytics</h1>
      <div className='bg-white my-5 rounded-2xl p-5'>
        <h2 className='text-[#244D3F] text-2xl font-bold'>By Interaction Type</h2>
        <PieChart
          series={[{ innerRadius: 50, outerRadius: 100, data: chartData, arcLabel: 'value' }]}
          colors={["#244D3F", "#37A163", "#7E35E1"]}
          width={400}
          height={400}
        />
     </div>
    </div>
  ); 
};

export default Stats;