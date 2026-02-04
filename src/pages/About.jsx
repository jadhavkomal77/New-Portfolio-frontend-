// import React from 'react';
// import { motion } from 'framer-motion'

// const About = () => {
//     return (
//         <div className='bg-slate-800 h-full pb-32' id='about'>
//             <motion.h1
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{}}
//                 transition={{ duration: 1, delay: 0.2 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 className='text-4xl text-white font-bold text-center pt-16'>About
//                 <span className='text-teal-300 ms-2'>
//                     Me
//                 </span>
//             </motion.h1>

//             <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-8'>
//                 <div className='px-4 sm:px-10'>
//                     <div className='mx-auto max-w-md sm:max-w-none'>
//                         <div className='p-8'>
//                             <p className='text-slate-100 text-xl my-5'>Name <span className='ms-6'>:</span> <span className='ms-2'>Komal Jadhav</span></p>
//                             <p className='text-slate-100 text-xl my-5 flex'>Email <span className='ms-8'>:</span> <span className='ms-4'>komaljadhav2535@gmail.com</span></p>
//                             <p className='text-slate-100 text-xl my-5'>DOB<span className='ms-10'>:</span> <span className='ms-2'>April 17, 2004</span></p>
//                             <p className='text-slate-100 text-xl my-5'>Mobile <span className='ms-3'>:</span> <span className='ms-2'>7709171195</span></p>
//                             <p className='text-slate-100 text-xl my-5 flex'>Address <span className='ms-2'>: </span><span className='ms-2'>Chhatrapati.Sambhajinagar</span></p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='pt-8 sm:pt-10 px-9'>
//                     <div className='mx-auto max-w-md sm:max-w-none'>
//                         <p className='text-white font-normal text-xl'>I am a Full-Stack Developer, specializing in both front-end and back-end web development. Proficient in languages like HTML, CSS, JavaScript, and frameworks such as React and Node.js for creating dynamic and interactive user interfaces. On the back-end, I utilize languages like JavaScript along with databases like MongoDB to handle server-side logic and data management. With skills in API development, testing, and a knack for problem-solving, I am equipped to build robust and scalable web applications from start to finish.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-slate-800 min-h-screen pb-16 px-4 sm:px-8 lg:px-16" id="about">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center pt-16"
      >
        About
        <span className="text-teal-300 ms-2">Me</span>
      </motion.h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">
        {/* Left Section (Personal Info) */}
        <div className="bg-slate-700/40 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          <p className="text-slate-100 text-lg sm:text-xl my-3">
            <span className="font-semibold text-teal-300">Name:</span> Komal Jadhav
          </p>
          <p className="text-slate-100 text-lg sm:text-xl my-3 break-words">
            <span className="font-semibold text-teal-300">Email:</span>{" "}
            komaljadhav2535@gmail.com
          </p>
          <p className="text-slate-100 text-lg sm:text-xl my-3">
            <span className="font-semibold text-teal-300">DOB:</span> April 17, 2004
          </p>
          <p className="text-slate-100 text-lg sm:text-xl my-3">
            <span className="font-semibold text-teal-300">Mobile:</span> 7709171195
          </p>
          <p className="text-slate-100 text-lg sm:text-xl my-3">
            <span className="font-semibold text-teal-300">Address:</span>{" "}
            Chhatrapati Sambhajinagar
          </p>
        </div>

        {/* Right Section (About Description) */}
        <div className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
          <p className="bg-slate-700/30 rounded-2xl p-6 sm:p-8 shadow-lg">
            I am a <span className="text-teal-300 font-semibold">Full-Stack Developer</span>,
            specializing in both front-end and back-end web development. I’m proficient in
            <span className="text-teal-300 font-semibold"> HTML</span>,{" "}
            <span className="text-teal-300 font-semibold">CSS</span>,{" "}
            <span className="text-teal-300 font-semibold">JavaScript</span>, and frameworks such as{" "}
            <span className="text-teal-300 font-semibold">React</span> and{" "}
            <span className="text-teal-300 font-semibold">Node.js</span> for creating dynamic and
            interactive user interfaces.
            <br />
            <br />
            On the back-end, I work with{" "}
            <span className="text-teal-300 font-semibold">MongoDB</span> for data management and
            build robust RESTful APIs to ensure scalability and efficiency. With a passion for
            problem-solving and clean code, I aim to deliver high-quality web applications from
            start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
