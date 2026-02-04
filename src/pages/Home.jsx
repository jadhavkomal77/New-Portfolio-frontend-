import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import resume from "../asetes/resume.pdf"
// import Navbar from './Navbar';

const Home = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['FrontEnd Developer', 'backEnd Developer', 'UI/UX Developer', 'Graphic Designer'],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <div className='h-screen bg-slate-800 pt-8 ' id='home'>

      <div className='flex flex-col justify-center items-center h-full'>
        <div className=''>
          <img className='h-64 w-64 object-cover rounded-full'
            src="https://media.istockphoto.com/id/1081869198/photo/shes-focused-on-cracking-it.webp?b=1&s=170667a&w=0&k=20&c=uGba9LmoxNsZ4f2PYwb5YY13LOna8NxwpoZqLlHELzQ=" alt="" />
        </div>
        <h1 className='font-bold text-white text-4xl mb-4 text-center'>Hello, it's Me
          <span className=' text-red-400'> Komal</span>
        </h1>
        <div className='flex flex-col items-center mb-6'>
          <div className='font-bold text-white text-2xl mb-2'>
            I am{' '}
            <span className='underline text-teal-200' ref={typedTextRef} />
          </div>
          <div className='text-white font-mono text-center'>
            <p>I am a BCS student.</p>
            <p>I am interested in web development and also doing competitive programming.</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <a href='https://www.linkedin.com/in/komal-jadhav-66a9722b9/' className='border-2 border-teal-300 text-teal-300 hover:text-white hover:bg-teal-300 rounded-full p-2 px-3'>
            <FaLinkedin />
          </a>
          {/* <a href='https://github.com/jadhavko' className='border-2 border-teal-300 text-teal-300 hover:text-white hover:bg-teal-300 rounded-full p-2 px-3'> */}
          <a href='https://github.com/jadhavkomal77' className='border-2 border-teal-300 text-teal-300 hover:text-white hover:bg-teal-300 rounded-full p-2 px-3'>
            <FaGithub />
          </a>
          <a href='https://twitter.com/home' className='border-2 border-teal-300 text-teal-300 hover:text-white hover:bg-teal-300 rounded-full p-2 px-3'>
            <FaTwitter />
          </a>
        </div>
        <div className='mt-8'>
          {/* <a href='../src/asetes.resume.pdf' className='bg-teal-300 text-slate-700 font-bold rounded-full py-2 px-4 hover:shadow-lg  hover:shadow-teal-500 '>Download Resume</a> */}
          <a href={resume} className='bg-teal-300 text-slate-700 font-bold rounded-full py-2 px-4 hover:shadow-lg  hover:shadow-teal-500 '>Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
