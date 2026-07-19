import Image from 'next/image';
import React from 'react';
import facebook from './../../assets/facebook.png';
import insta from './../../assets/instagram.png';
import twitt from './../../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white p-8">
      <div className='items-center text-center'>
        <h1 className='text-5xl font-bold'>KeenKeeper</h1>
        <p><small>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</small></p>
        <span className='font-black'>Social Links</span>
        <div className='flex justify-center items-center gap-4 mt-4'>
          <Image
            src={facebook}
            alt='facebook'
            width={40}
            height={40}
          />
          <Image
            src={insta}
            alt='instagram'
            width={40}
            height={40}
          />
          <Image
            src={twitt}
            alt='twitter'
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="divider px-8"></div>
      <div className='flex justify-between gap-8 px-8'>
        <p><small>© 2026 KeenKeeper. All rights reserved.</small></p>
        <div className='flex justify-between gap-5'>
          
          <p><small>Privacy Policy </small></p>
          <p><small>Terms of Service</small></p>
         
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;