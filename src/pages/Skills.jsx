
import { motion } from 'framer-motion'

const Skills = () => {
  return <>
    <div className='bg-slate-800 h-screen p-5 pb-20 ' id='skills'>
      <div className='text-center'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{}}
          transition={{ duration: 1, delay: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='text-teal-300 underline mx-8 lg:mx-20 overflow-hidden'>
          <span className='text-teal-300 text-4xl font-bold '>Skills</span>
        </motion.h1>
      </div>
      <div className='flex justify-around mt-20'>
        <div className='w-[40%]'>
          <h1 className='text-white text-center text-3xl font-semibold'>FrontEnd</h1>
          <div className=''><span className='text-white m-3 flex justify-between'>HTML<span className=''>90%</span></span>
            <div className='bg-white w-full rounded-full text-center h-4'>
              <div className='bg-gradient-to-t from-blue-500 to-teal-100 rounded-full rounded-e-none h-4 w-[90%]'></div>
            </div>
          </div>
          <div className=''><span className='text-white m-3 flex justify-between'>CSS<span className=''>95%</span></span>
            <div className='bg-white w-full rounded-full text-center h-4'>
              <div className='bg-gradient-to-t from-blue-500 to-teal-100 rounded-full rounded-e-none h-4 w-[88%]'></div>
            </div>
          </div>
          <div className=''><span className='text-white m-3 flex justify-between'>JavaScript<span className=''>85%</span></span>
            <div className='bg-white w-full rounded-full text-center h-4'>
              <div className='bg-gradient-to-t from-blue-500 to-teal-100 rounded-full rounded-e-none h-4 w-[85%]'></div>
            </div>
          </div>
          <div className=''>
            <span className='text-white m-3 flex justify-between'>React-Js<span className=''>90%</span></span>
            <div className='bg-white w-full rounded-full text-center h-4'>
              <div className='bg-gradient-to-t from-blue-500 to-teal-100 rounded-full rounded-e-none h-4 w-[85%]'></div>
            </div>
          </div>
        </div>
        <div className='w-[40%]'>
          <h1 className='text-white text-center text-3xl font-semibold'>BackEnd</h1>
          <div className=''><span className='text-white m-3 flex justify-between'>MongoDB<span className=''>70%</span></span>
            <div className='bg-white w-full rounded-full text-center h-4'>
              <div className='bg-gradient-to-t from-blue-500 to-teal-100 rounded-full rounded-e-none h-4 w-[70%]'></div>
            </div>
          </div>
          <div className=''><span className='text-white m-3 flex justify-between'>React-Native<span className=''>75%</span></span>
            <div className='bg-white w-full rounded-full text-center h-4'>
              <div className='bg-gradient-to-t from-blue-500 to-teal-100 rounded-full rounded-e-none h-4 w-[75%]'></div>
            </div>
          </div>
          <div className=''><span className='text-white m-3 flex justify-between'>Express<span className=''>80%</span></span>
            <div className='bg-white w-full rounded-full text-center h-4'>
              <div className='bg-gradient-to-t from-blue-500 to-teal-100 rounded-full rounded-e-none h-4 w-[80%]'></div>
            </div>
          </div>
          <div className=''><span className='text-white m-3 flex justify-between'>Node-Js<span className=''>85%</span></span>
            <div className='bg-white w-full rounded-full text-center h-4'>
              <div className='bg-gradient-to-t from-blue-500 to-teal-100 rounded-full rounded-e-none h-4 w-[85%]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Skills