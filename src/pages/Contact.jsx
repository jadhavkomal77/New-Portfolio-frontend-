import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSendemailMutation } from '../redux/userApi';

const Contact = () => {

    const [sendemail] = useSendemailMutation()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            subject: '',
            message: ''
        },
        validationSchema: yup.object({
            name: yup.string()
                .required('Full Name is required'),
            email: yup.string()
                .email('Invalid email address')
                .required('Email Address is required'),
            number: yup.string()
                .matches(/^[0-9]+$/, 'Mobile Number must be digits')
                .required('Mobile Number is required'),
            subject: yup.string()
                .required('Email Subject is required'),
            message: yup.string()
                .required('Your Message is required'),
        }),
        onSubmit: values => {
            console.log('Form data', values);
            sendemail(values)
        }
    });

    return (
        <div className='h-full p-3 bg-slate-800' id='contact'>
            <div className='lg:mx-72 md:mx-32 pb-20 h-full p-5 text-center overflow-hidden md:w-3/4 lg:w-2/3 xl:w-1/2'>
                <div className='text-3xl mt-8 font-bold text-center'>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{}}
                        transition={{ duration: 1, delay: 0.2 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className='text-white'
                    >
                        Contact
                        <span className='text-teal-300 ms-2'>
                            Me !
                        </span>
                    </motion.h1>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col md:flex-row md:mt-8 md:justify-between md:gap-4'>
                        <div className='md:w-1/2'>
                            <input
                                className='border peer-focus:border-teal-300 w-full text-white bg-slate-700 rounded-md my-3 p-2'
                                type="text"
                                placeholder='Full Name'
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className='text-red-500'>{formik.errors.name}</div>
                            ) : null}
                            <input
                                className='border mt-8 peer-focus:border-teal-300 w-full text-white bg-slate-700 rounded-md my-3 p-2'
                                type="email"
                                placeholder='Email Address'
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='text-red-500'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className='md:w-1/2'>
                            <input
                                className='border  peer-focus:border-teal-300 w-full text-white bg-slate-700 rounded-md my-3 p-2'
                                type="text"
                                placeholder='Mobile Number'
                                {...formik.getFieldProps('number')}
                            />
                            {formik.touched.number && formik.errors.number ? (
                                <div className='text-red-500'>{formik.errors.number}</div>
                            ) : null}
                            <input
                                className='border mt-8 peer-focus:border-teal-300 w-full text-white bg-slate-700 rounded-md my-3 p-2'
                                type="text"
                                placeholder='Email Subject'
                                {...formik.getFieldProps('subject')}
                            />
                            {formik.touched.subject && formik.errors.subject ? (
                                <div className='text-red-500'>{formik.errors.subject}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className='mx-auto mt-8 w-full md:w-5/6'>
                        <textarea
                            className='border w-full text-white bg-slate-700 rounded-md my-3 p-4'
                            placeholder='Your Message'
                            {...formik.getFieldProps('message')}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <div className='text-red-500'>{formik.errors.message}</div>
                        ) : null}
                    </div>
                    <div className='text-center bg-slate-800 mt-5'>
                        <button type='submit' className='bg-teal-300 p-3 rounded-full font-bold text-slate-700 shadow-md hover:shadow-lg hover:shadow-teal-500'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
