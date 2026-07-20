'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { VscCopilotSnooze } from "react-icons/vsc";
import { FaFileArchive } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

import call from './../../../assets/call.png';
import text from './../../../assets/text.png';
import video from './../../../assets/video.png';
import { toast, ToastContainer } from "react-toastify";

const FriendDetailPage = () => {
  const { friendId } = useParams();

  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const fetchFriend = async () => {
      const res = await fetch('/friend.json');
      const friends = await res.json();

      const selectedFriend = friends.find(
        (item) => item.id === Number(friendId)
      );

      setFriend(selectedFriend);
    };

    fetchFriend();
  }, [friendId]);

  if (!friend) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  const handleTimeline = (action) => {
    console.log(action);
    const timeline =
      JSON.parse(localStorage.getItem("timeline")) || [];

    const newEvent = {
      name: friend.name,
      action,
      date: new Date().toLocaleString(),
    };
    toast.success(`${action} ${friend.name} successfully`);
    timeline.unshift(newEvent);

    localStorage.setItem("timeline", JSON.stringify(timeline));
  };
  return (
    <div className="grid-details p-10 text-[#64748B]">

      {/* Left Side */}
      <div className="flex flex-col gap-4">

        <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-2 text-center">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="rounded-full"
          />

          <h1 className="text-2xl font-bold text-black">
            {friend.name}
          </h1>

          <div className="badge bg-[#CBFADB]">
            {friend.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          <div
            className={`badge ${friend.status === "on_track"
                ? "bg-purple-500 text-white"
                : friend.status === "almost_due"
                  ? "bg-yellow-400 text-black"
                  : "bg-red-500 text-white"
              }`}
          >
            {friend.status}
          </div>

          <h3 className="font-bold">"{friend.bio}"</h3>

          <p>{friend.email}</p>
        </div>

        <div className="bg-white rounded-2xl p-4 flex items-center justify-center gap-2 text-black">
          <VscCopilotSnooze className="text-2xl" />
          <p>Snooze for 3 days</p>
        </div>

        <div className="bg-white rounded-2xl p-4 flex items-center justify-center gap-2 text-black">
          <FaFileArchive className="text-2xl" />
          <p>Archive</p>
        </div>

        <div className="bg-white rounded-2xl p-4 flex items-center justify-center gap-2 text-red-500">
          <MdDeleteSweep className="text-2xl" />
          <p>Delete</p>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-5">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold">
              {friend.days_since_contact}
            </h2>
            <p>Days Since Contact</p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold">
              {friend.goal}
            </h2>
            <p>Goal (Days)</p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold">
              {friend.next_due_date}
            </h2>
            <p>Next Due</p>
          </div>

        </div>

        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-xl font-bold text-[#244D3F]">
            Relationship Goal
          </h2>

          <p>
            Connect every <b>{friend.goal} days</b>
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-5">

          <h1 className="font-bold text-black">
            Quick Check-In
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            <button onClick={()=>handleTimeline("calling")}
              className="btn h-auto min-h-0 px-15 py-8 flex flex-col">
              <Image
                src={call}
                alt="Call"
                width={30}
                height={30}
              />
              <span>Call</span>
            </button>

            <button onClick={() => handleTimeline("texting")}
              className="btn h-auto min-h-0 px-15 py-8 flex flex-col">
              <Image
                src={text}
                alt="Text"
                width={30}
                height={30}
              />
              <span>Text</span>
            </button>

            <button onClick={() => handleTimeline("video calling")}
              className="btn h-auto min-h-0 px-15 py-8 flex flex-col">
              <Image
                src={video}
                alt="Video"
                width={30}
                height={30}
              />
              <span>Video</span>
            </button>

          </div>

        </div>

      </div>
  <ToastContainer />
    </div>
  );
};

export default FriendDetailPage;