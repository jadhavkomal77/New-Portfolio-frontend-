import React from 'react';
import { motion } from 'framer-motion'
import holiday from "../../src/asetes/holiday.png"
import urlShortener from "../../src/asetes/urlShortener.png"
import WhatsAppweb from "../../src/asetes/WhatsAppweb.png"
import servicespro from "../../src/asetes/servicespro.png"
import ecom from "../../src/asetes/ecom.png"
const Projects = () => {
    // const { data } = useGetProjectsQuery()

    return (
        <div className='bg-slate-800  py-8 px-14 md:px-8 lg:px-32' id='project' >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{}}
                transition={{ duration: 1, delay: 0.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                className='text-teal-300 pb-10 underline text-center mx-8 lg:mx-14 overflow-hidden'>
                <span className='text-teal-300 text-3xl font-bold '>Projects</span>
            </motion.h1>

            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  md:grid-cols-2 gap-16'>
                <div className="card bg-slate-800 shadow-2xl">
                    <figure><img src={ecom} alt="Shoes" className="w-full h-64" /></figure>
                    <div className="card-body text-slate-200 p-4">
                        <h2 className="card-title text-2xl mb-2">Native-E-Com</h2>
                        <p className="text-sm">I Created a React Native e-commerce app with features like product browsing, cart management, authentication, and checkout. Utilized Redux for state management on the front-end, and Node.js with Express, MongoDB, and JWT for the back-end to ensure secure and efficient operations. Designed for responsive mobile usability.</p>
                        <div className="card-actions mt-2">
                            <button className="btn btn-info text-sm">
                                <a target='_blank' href="https://native-e-com.onrender.com">View</a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <div className="card bg-slate-800 shadow-2xl">
                    <figure><img src={WhatsAppweb} alt="Shoes" className="w-full h-64" /></figure>
                    <div className="card-body text-slate-200 p-4">
                        <h2 className="card-title text-2xl mb-2">WhatsApp</h2>
                        <p>
                            I created a real-time chat application similar to WhatsApp using React for the front-end and Node.js with Socket.io for the back-end. The front-end features user authentication, contact lists, chat windows, and real-time messaging, with state management using Redux and responsive design using Bootstrap.</p>
                        <div className="card-actions mt-2">
                            <button className="btn btn-info text-sm">
                                <a target='_blank' href="https://whahsapp-new.onrender.com">View</a>
                            </button>
                        </div>
                    </div>
                </div> */}

                <div className="card bg-slate-800 shadow-2xl">
                    <figure><img src={servicespro} alt="Shoes" className="w-full h-64" /></figure>
                    <div className="card-body text-slate-200 p-4">
                        <h2 className="card-title text-2xl mb-2">Service Provider</h2>
                        <p>
                            I created a simple service provider website using React.js for the frontend and Node.js for the backend. The frontend utilizes Bootstrap for responsive design, and the website includes user authentication features for registration and login. Node.js handles the backend logic, and a database is used to store user data and services.</p>
                        <div className="card-actions mt-2">
                            <button className="btn btn-info text-sm">
                                <a target='_blank' href="https://service-provider-w0x3.onrender.com">View</a>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="card bg-slate-800 shadow-2xl">
                    <figure><img src={holiday} alt="Shoes" className="w-full h-64" /></figure>
                    <div className="card-body text-slate-200 p-4">
                        <h2 className="card-title text-2xl mb-2">HoliDay</h2>
                        <p className="text-sm">I created a holiday booking application using React for the front-end and Node.js for the back-end. The front-end includes components for browsing destinations, booking holidays, user authentication, and managing bookings, with state management using Redux and responsive design using Bootstrap. The back-end uses Express, MongoDB with Mongoose for storing user data and bookings, and JWT for authentication.</p>
                        <div className="card-actions mt-2">
                            <button className="btn btn-info text-sm">
                                <a target='_blank' href="https://holiday-ay9x.onrender.com">View</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card bg-slate-800 shadow-2xl">
                    <figure><img src={urlShortener} alt="Shoes" className="w-full h-64" /></figure>
                    <div className="card-body text-slate-200 p-4">
                        <h2 className="card-title text-2xl mb-2">URL Shortener</h2>
                        <p className="text-sm">Created a URL shortener application using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project facilitates the generation of short, shareable URLs, with a focus on efficient redirection and real-time link tracking</p>
                        <div className="card-actions mt-2">
                            <button className="btn btn-info text-sm">
                                <a target='_blank' href="https://url-shortnote.onrender.com">View</a></button>
                        </div>
                    </div>
                </div>


                {/* {data && data.map(item => <div className="card bg-slate-800 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.webp?b=1&s=170667a&w=0&k=20&c=ag_iAVhF9G24GHgRIXdwt50NUn7xvmz3ORGTlFPHv7Q=" alt="Shoes" className="object-cover w-full h-64" /></figure>
                    <div className="card-body text-slate-200 p-4">
                        <div>
                            <h2 className="card-title text-2xl text-slate-100 mb-2">{item.name}</h2>
                            <h2 className="card-title text-2xl text-slate-100 mb-2">{item.title}</h2>
                            <h2 className="card-title text-2xl text-slate-100 mb-2">{item.desc}</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, fugiat?</p>
                        </div>
                        <div className="card-actions mt-2">
                            <button className="btn btn-primary text-sm">Visit Website</button>
                        </div>
                    </div>
                </div>)} */}


            </div>
        </div>
    );
};

export default Projects;