import Image from 'next/image';
import React from 'react';
import { VscCopilotSnooze } from "react-icons/vsc";
import { FaFileArchive } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import call from './../../../assets/call.png';
import text from './../../../assets/text.png';
import video from './../../../assets/video.png'


const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch("http://localhost:3000/friend.json");
  const friends = await res.json();

  const friend = friends.find(
    (item) => item.id === Number(friendId)
  );

  return (
    <div className='grid-details item-center p-10 text-[#64748B]'>
      <div className='flex flex-col gap-4'>
        <div className='bg-white rounded-2xl p-8 flex flex-col items-center gap-2 text-center'>
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className='rounded-full'
          />
          <h1 className='text-2xl text-black font-bold'>{friend.name}</h1>
          <div className='badge bg-[#CBFADB]'>{
            (friend.tags).map((tag, index) => <span key={index}>{tag}</span>)
          }</div>
          <div
            className={`badge ${friend.status === "on_track"
              ? "bg-purple-500 text-white"
              : friend.status === "almost_due"
                ? "bg-yellow-400 text-black"
                : "bg-red-500 text-white"
              }`}
          >{friend.status}</div>
          <h3 className='font-bold'>"{friend.bio}"</h3>
          <p>{friend.email}</p>
        </div>
        <div className='bg-white rounded-2xl p-4 flex items-center justify-center gap-2 text-black '>
          <VscCopilotSnooze className='text-2xl' />
          <p>Snooze for 3 days</p>
        </div>

        <div className='bg-white rounded-2xl p-4 flex items-center justify-center gap-2 text-black'>
          <FaFileArchive className='text-2xl' />
          <p>Archive</p>
        </div>

        <div className='bg-white rounded-2xl p-4 flex items-center justify-center gap-2 text-red-500'>
          <MdDeleteSweep className='text-2xl'/>
          <p>Delete</p>
        </div>
      </div>
      


      <div className='flex flex-col gap-5'>
       
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='bg-white rounded-2xl p-8'>
            <h2 className='text-3xl font-bold'>{friend.days_since_contact}</h2>
            <p>Days Since Contact</p>
          </div>

          <div className='bg-white rounded-2xl p-8'>
            <h2 className='text-3xl font-bold'>{friend.goal}</h2>
            <p>Goal(Days)</p>
          </div>

          <div className='bg-white rounded-2xl p-8'>
            <h2 className='text-3xl font-bold'>{friend.next_due_date}</h2>
            <p>Next Due</p>
          </div>
        </div>

          <div className='bg-white rounded-2xl p-8 big-layout'>
          <h2 className='text-xl font-bold text-[#244D3F]'>Relationship Goal</h2>
          <p className=''><span>Connect every</span><b> {friend.goal} days</b></p>
          </div>



          <div className='bg-white rounded-2xl p-8 items-center flex flex-col gap-5'>
            <h1 className='font-bold text-black'>Quick Check-In</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 big-layout '>
              <div className='btn h-auto min-h-0 px-15 py-8 flex flex-col items-center justify-center'>
                <Image
                  src={call}
                  alt='call'
                  width={30}
                  height={30}
                />
                <h2>Call</h2>
              </div>
              <div className='btn h-auto min-h-0 px-15 py-8 flex flex-col items-center justify-center'>
                <Image
                  src={text}
                  alt='text'
                  width={30}
                  height={30}
                />
                <h2>Text</h2>
              </div>
              <div className='btn h-auto min-h-0 px-15 py-8 flex flex-col items-center justify-center'>
                <Image
                  src={video}
                  alt='video'
                  width={30}
                  height={30}
                />
                <h2>Video</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    
   
    
  );
};

export default FriendDetailPage;