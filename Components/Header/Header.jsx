import Link from 'next/link';
import React, { useState } from 'react';
import { MdEmojiPeople } from 'react-icons/md';
import { IoMdNotifications } from 'react-icons/io';
import { GoHome } from 'react-icons/go';
import { MdOutlineWork } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { ImMakeGroup } from 'react-icons/im';




const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (


        <nav className="w-full border-b-[1px] border-[#3086b818]  ">
            <div className="justify-between  mx-auto container  md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between  md:block">
                        <a href="https://ibb.co/c235w5g"><img className='w-48 h-16' src="https://i.ibb.co/WB5909x/image-removebg-preview.png" alt="image-removebg-preview" border="0" /></a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>





                {/*  nav menu for large devices */}
                <div className=''>
                    <div
                        className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-[#423e3d] font-mono font-semibold text-[17px]">
                                <Link className='flex  px-3 rounded-lg py-2 nav-menu-title bg-[#23bfef33]  items-center gap-3' href="/">
                                    <p>Home</p>
                                    <span className='text-lg'><GoHome /></span>
                                </Link>
                            </li>
                            <li className="text-[#423e3d] font-mono font-semibold text-[17px]">
                                <Link className='flex items-center gap-3' href="/jobs">
                                    <p>Find Work</p>
                                    <span className='text-lg'> <MdOutlineWork /></span>

                                </Link>
                            </li>
                            <li className="text-[#423e3d] font-mono font-semibold text-[17px]">
                                <Link className='flex items-center gap-3' href="/">
                                    <p>Messages</p>
                                    <span className='text-lg'> <BiMessageSquareDetail /></span>

                                </Link>
                            </li>
                            <li className="text-[#423e3d] font-mono font-semibold text-[17px]">
                                <Link className='flex items-center gap-3' href="/">
                                    <p>Group</p>
                                    <span className='text-lg'> <ImMakeGroup /></span>

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>






                {/* Profile section */}
                <div className='flex items-center b gap-5'>

                    <div className=''>
                        <button className='text-white  bg-[#d6e8fa49] rounded-full p-[6px]'>
                            <IoMdNotifications className='text-2xl  text-[#423e3d] ' />
                        </button>
                    </div>
                    <div className='flex gap-4 items-center '>
                        <button className='text-white  bg-[#d6e8fa49] rounded-full p-[6px]'>
                            <MdEmojiPeople className='text-2xl text-[#423e3d]' />
                        </button>
                        <div>
                            <h2 className='text-[#423e3d] font-mono font-bold text-lg'>Shafinur Islam</h2>
                            <span className='text-slate-400 text-xs font-semibold '>shafinur512@gmail.com</span>
                        </div>
                    </div>


                </div>
            </div>
        </nav>


    );
};

export default Header;