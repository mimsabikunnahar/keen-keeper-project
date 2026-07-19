"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import logo from './../../assets/logo.png';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineQueryStats } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="navbar bg-base-100 shadow-sm px-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/" >
                <button onClick={() => setActive("home")}
                  className={`flex justify-between gap-0.5 rounded-2xl p-4 items-center text-[#64748B] font-bold
            ${active === "home" ? 'bg-[#244D3F] text-white' : ''}`}><IoHomeOutline />Home</button>
              </Link>
            </li>
            <li>
              <Link href="/timeline" >
                <button onClick={() => setActive("timeline")}
                  className={`flex justify-between gap-0.5 rounded-2xl p-4 items-center text-[#64748B] font-bold
            ${active === "timeline" ? 'bg-[#244D3F] text-white' : ''}`}
                ><IoMdTimer />Timeline</button>
              </Link>
            </li>
            <li>
              <Link href="/stats">
                 <button onClick={() => setActive("stats")}
            className={`flex justify-between gap-0.5 rounded-2xl p-4 items-center text-[#64748B] font-bold
            ${active === "stats" ? 'bg-[#244D3F] text-white' : ''}`}><MdOutlineQueryStats />Stats</button>
        </Link>
            </li>
          </ul>
        </div>
        <h1 className='text-2xl font-bold '><span className='text-[#1F2937]'>Keen</span><span className='text-[#244D3F]'>Keeper</span></h1>
      </div>
      <div className="navbar-end hidden lg:flex gap-2">
        <Link href="/home" >
          <button onClick={() => setActive("home")}
            className={`flex justify-between gap-0.5 rounded-2xl p-4 items-center text-[#64748B] font-bold
            ${active === "home" ? 'bg-[#244D3F] text-white' : ''}`}><IoHomeOutline />Home</button>
        </Link>

        <Link href="/timeline" >
          <button onClick={() => setActive("timeline")}
            className={`flex justify-between gap-0.5 rounded-2xl p-4 items-center text-[#64748B] font-bold
            ${active === "timeline" ? 'bg-[#244D3F] text-white' : ''}`}
           ><IoMdTimer />Timeline</button>
        </Link>

        <Link href="/stats">
          <button onClick={() => setActive("stats")}
            className={`flex justify-between gap-0.5 rounded-2xl p-4 items-center text-[#64748B] font-bold
            ${active === "stats" ? 'bg-[#244D3F] text-white' : ''}`}><MdOutlineQueryStats />Stats</button>
        </Link>
        
      
      </div>
    </div>
  );
};

export default Navbar;