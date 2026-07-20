'use client';

import { useEffect, useState } from "react";

import call from './../../assets/call.png';
import text from './../../assets/text.png';
import video from './../../assets/video.png';
import Image from "next/image";

const TimeLine =() => {
  const [timeline, setTimeline] = useState([]);
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType);
  useEffect(() => {
    const loadTimeline = () => {
      const data = JSON.parse(localStorage.getItem("timeline")) || [];
      setTimeline(data);
    };

    loadTimeline();
  }, []);
  const filteredTimeline =
    sortingType === ""
      ? timeline
      : timeline.filter(item => item.action === sortingType);
  

  return (
    <div className="my-5 p-10">
      <h1 className="text-4xl font-bold text-[#244D3F]">Timeline</h1>
      <div className='flex justify-center my-3'>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">Sort By⬇️</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => setSortingType('calling')}>
              <a>Calling</a></li>
            <li onClick={() => setSortingType('texting')}>
              <a>Texting</a></li>
            <li onClick={() => setSortingType('video calling')}>
              <a>Video Calling</a></li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col gap-3 mt-5 rounded-2xl">
        {
        filteredTimeline.map((history, index) => <div key={index}>
            <div className="bg-white p-5 flex justify-baseline gap-4">
                  <Image
                src={history.action === "calling" ? call
                  : history.action === "texting" ?  text :
                  video
                            }
                alt={history.name}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
              <div>
                
                <span><h2 className="font-bold text-[#244D3F] text-xl ">{history.action}</h2>with {history.name}</span>
                <p>{history.date}</p>
             </div>
            </div>
          </div>)
        }
    </div>
    </div>
  );
};

export default TimeLine;