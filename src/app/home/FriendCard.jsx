import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {

  const {id, name, picture, days_since_contact, tags, status} = friend;
  
  return (
    <Link href={`/home/${id}`}>
      <div className='bg-white rounded-2xl flex flex-col items-center text-center p-8'>
        <div>
          <Image
            src={picture}
            alt={name}
            width={80}
            height={80}
            className='rounded-full'
          />
          <h1>{name}</h1>
          <p>{days_since_contact}</p>
          <div className='badge bg-[#CBFADB] mb-2'>{
            tags.map((tag, index) => <span key={index}>{tag}</span>)
          }</div> <br />
          <div
            className={`badge ${status === "on_track"
              ? "bg-purple-500 text-white"
              : status === "almost_due"
                ? "bg-yellow-400 text-black"
                : "bg-red-500 text-white"
              }`}
          >{status}</div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;