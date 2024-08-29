// 'use client';
// import React, { useState } from 'react';
// import { FaBarsStaggered } from 'react-icons/fa6';
// import { IoClose } from 'react-icons/io5';
// import Button from '../CommonComponent/Button';

// const Header = () => {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const menuContent = [
//         { name: "Home", link: "/" },
//         { name: "Services", link: "/" },
//         { name: "About", link: "/" },
//         { name: "Contect", link: "/" }
//     ];

//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(prevState => !prevState);
//     };

//     return (
//         <div className='w-full md:px-4 pt-12 text-center  bg-slate-100 flex justify-between'>
//             <section className='font-bold text-xl cursor-pointer items-center text-orange-500 px-8 '>
//                 <a > SBM <small>Tours&Travels</small></a>
//             </section>

//             <section className={`absolute w-full flex flex-col bg-slate-100  items-center pb-4 md:static md:bg-slate-100  md:flex md:items-center md:w-auto md:flex-row ${mobileMenuOpen ? 'top-[7.5rem]' : 'top-[-500px]'}`}>
//                 <ul className='flex md:flex-row flex-col md:gap-8 gap-6'>

//                     {menuContent.map((content, index) => {
//                         return (<>
//                             <li className='mx-2 cursor-pointer hover:text-orange-500'>
//                                 <a>{content.name}</a>
//                                 <p className='hover:border-orange-500 border-[1px]'></p>
//                             </li>

//                         </>)
//                     })

//                     }

//                 </ul>
//                 <Button className='md:hidden mt-4 px-4 py-2 bg-orange-600 rounded-2xl cursor-pointer hover:bg-orange-500 text-white transition-all'>
//                     Login/Signup
//                 </Button>
//             </section>

//             <Button className='hidden md:block px-4 py-2 bg-orange-600 rounded-2xl cursor-pointer hover:bg-orange-500 text-white transition-all'>
//                 Login/Signup
//             </Button>

//             <section className='md:hidden px-8' onClick={toggleMobileMenu}>
//                 {mobileMenuOpen ? <IoClose className='text-orange-500 text-2xl' /> : <FaBarsStaggered className='text-orange-500 text-2xl' />}
//             </section>
//         </div>
//     );
// };

// export default Header;
'use client';
import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import Button from '../CommonComponent/Button';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuContent = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" }
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    };

    return (
        <div className='w-full md:px-4  pt-12 text-center bg-slate-100 flex justify-between font-[poppins]'>
            <section className='font-bold  text-xl cursor-pointer items-center text-orange-500 px-8 '>
                <a> SBM <small>Tours&Travels</small></a>
            </section>

            <section className={`absolute w-full flex flex-col bg-slate-100 items-center pb-4 md:static md:bg-slate-100 md:flex md:items-center md:w-auto md:flex-row ${mobileMenuOpen ? 'top-[7.5rem]' : 'top-[-500px]'}`}>
                <ul className='flex md:flex-row flex-col md:gap-8 gap-6'>
                    {menuContent.map((content, index) => (
                        <li key={index} className='mx-2 cursor-pointer border-transparent text-slate-500  font-medium hover:text-orange-500 border-b-2 hover:border-orange-500  transition-all'>
                            <a>{content.name}</a>
                        </li>
                    ))}
                </ul>
                <Button className='md:hidden mt-4 px-4 py-2 bg-orange-600 rounded-2xl cursor-pointer hover:bg-orange-500 text-white transition-all'>
                    Login/Signup
                </Button>
            </section>

            <Button className='hidden md:block px-4 py-2 bg-orange-600 rounded-2xl cursor-pointer hover:bg-orange-500 text-white transition-all'>
                Login/Signup
            </Button>

            <section className='md:hidden px-8' onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <IoClose className='text-orange-500 text-2xl' /> : <FaBarsStaggered className='text-orange-500 text-2xl' />}
            </section>
        </div>
    );
};

export default Header;
