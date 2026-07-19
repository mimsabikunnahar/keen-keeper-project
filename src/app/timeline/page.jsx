'use client';

import { useEffect, useState } from "react";

const TimeLine =() => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const loadTimeline = () => {
      const data = JSON.parse(localStorage.getItem("timeline")) || [];
      setTimeline(data);
    };

    loadTimeline();
  }, []);
  

  return (
    <div className="my-5 p-10">
      <h1 className="text-4xl font-bold text-[#244D3F]">Timeline</h1>
      <div className=" flex flex-col gap-3 mt-5 rounded-2xl">
        {
          timeline.map((history, index) => <div key={index}>
            <div className="bg-white p-5">
              <h2>{history.action} with {history.name}</h2>
              <p>{history.date}</p>
            </div>
          </div>)
        }
    </div>
    </div>
  );
};

export default TimeLine;