import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import HeaderLogo  from '../img/break_time_logo_2.png';
import "./Styles/Navbar.css";

function NavBar() {
    const [menu,setMenu] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={HeaderLogo}
                            className="mr-5 my-0 w-[40%] max-w-[400px]"
                            alt="Logo"
                        />
                    </Link>
                    <div className="hidden items-center lg:order-2"> // flex
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                    onClick={()=>{
                        setMenu((prev)=>!prev);
                    }} 
                    className='m-3 cursor-pointer text-lg p-2 lg:hidden text-gray-700 hover:text-gray-500'
                    style={{position:'absolute',top:'10px',right:'15px'}}
                    >
                        <i className="fa-solid fa-bars" />
                    </div>
                    <div
                        className={`duration-200 ${menu?"flex flex-col":"hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 `}
                        id="mobile-menu-2"
                        onClick={(e)=>{
                            if(e.target.tagName === 'A'){
                                setMenu(false);
                            }
                        }}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700 ":"text-gray-700"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="movies"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700 ":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                                    }
                                >
                                    Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="tv"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700 ":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                                    }
                                >
                                    Web Series
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700 ":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700 ":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700 ":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar