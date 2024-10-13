// import React from 'react'
// import { IoLocationSharp } from "react-icons/io5";
// import { MdOutlineMail } from "react-icons/md";
// import { FaMobileAlt } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <>
//             <footer className='grid grid-cols-3 w-full h-aoto bg-blue-900 text-white p-5'>

//                 <div className=' h-44  text-center items-center '>
//                     <div className='flex justify-center'>
//                         <img src='./logo192.png' alt='logo' width="100px" />
//                     </div>
//                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

//                 </div>
//                 <div className='h-auto flex justify-center items-center flex-col'>

//                     <h3 className='py-2 '>Quick link</h3>
//                     <ul>
//                         <li className='py-2 ps-14'>&#10147; <a href=''>Home</a></li>
//                         <li className='py-2 ps-14'>&#10147; <a href=''>About</a></li>
//                         <li className='py-2 ps-14'>&#10147; <a href=''>Top Destinations</a></li>
//                         <li className='py-2 ps-14'>&#10147; <a href=''>Texi Services</a></li>
//                         <li className='py-2 ps-14'>&#10147; <a href=''>Contect Us</a></li>
//                     </ul>


//                 </div>
//                 <div className='h-44'>
//                     <h3 className='p-2'>Contact Info</h3>
//                     <address className='p-2'>
//                         <span><IoLocationSharp className='inline' /> Address L-4 Mangalm Building </span> <br />Ridhi Sidhi Circle Gopalpura Road,<br />  Jaipur,Rajasthan 302018
//                     </address>
//                     <div>
//                         <a href='#'> <MdOutlineMail className='inline' /> toursntravels.sbm@gmail.com</a>
//                         <span className='block'><FaMobileAlt className='inline' /> 9571718500</span>
//                     </div>

//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer

import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full bg-blue-900 text-white p-5 gap-4'>

                <div className='h-auto text-center flex flex-col items-center'>
                    <div className='mb-4'>
                        <img src='./logo192.png' alt='logo' width="80px" className='mx-auto' />
                    </div>
                    <p className='text-sm md:text-base'>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>

                <div className='h-auto flex flex-col items-center'>
                    <h3 className='py-2 text-lg md:text-xl'>Quick Links</h3>
                    <ul>
                        <li className='py-2 text-sm md:text-base'><a href='#'>&#10147; Home</a></li>
                        <li className='py-2 text-sm md:text-base'><a href='#'>&#10147; About</a></li>
                        <li className='py-2 text-sm md:text-base'><a href='#'>&#10147; Top Destinations</a></li>
                        <li className='py-2 text-sm md:text-base'><a href='#'>&#10147; Taxi Services</a></li>
                        <li className='py-2 text-sm md:text-base'><a href='#'>&#10147; Contact Us</a></li>
                    </ul>
                </div>

                <div className='h-auto text-center'>
                    <h3 className='py-2 text-lg md:text-xl'>Contact Info</h3>
                    <address className='text-sm md:text-base'>
                        <span><IoLocationSharp className='inline' /> Address: L-4 Mangalm Building </span><br />
                        Ridhi Sidhi Circle, Gopalpura Road,<br />
                        Jaipur, Rajasthan 302018
                    </address>
                    <div className='mt-4'>
                        <a href='mailto:toursntravels.sbm@gmail.com' className='block'>
                            <MdOutlineMail className='inline' /> toursntravels.sbm@gmail.com
                        </a>
                        <span className='block mt-2'>
                            <FaMobileAlt className='inline' /> 9571718500
                        </span>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;
