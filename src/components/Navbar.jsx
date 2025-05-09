import { Link, NavLink, useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import { RiCoupon3Fill } from "react-icons/ri";
import logo from "../assets/gamer.jpg"
import { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { FaMoon, FaSun } from "react-icons/fa";


const Navbar = () => {
    const { user, signOutUser,darkMode,setDarkMode } = useContext(AuthProviderContext);

    const location = useLocation();
    const [showTooltip, setShowTooltip] = useState(false);
    // const location = useLoaderData();
    const navigate = useNavigate();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }

    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    // Check if the current route is the home page
    const isHomePage = location.pathname === "/";

    // Navbar background classes
    const navbarClass = isHomePage
        ? darkMode
            ? "bg-black text-white"
            : "bg-purple-500 "
        : "bg-purple-500";

   

    
    const links = <>

        <li><NavLink to='/'
            className={({ isActive }) =>
                `flex items-center gap-x-1  ${isActive ? 'text-lime-400 font-bold' : 'text-white '}`
            }>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            `flex items-center gap-x-0.5  ${isActive ? 'text-lime-400 font-bold' : 'text-white'}`
        } to='/reviews'>All Reviews</NavLink></li>

        {
            user ? (
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center ${isActive ? 'text-lime-400 font-bold' : 'text-white'}`
                        }
                        to='/addReview'
                    >
                        Add Review
                    </NavLink>
                </li>
            )
                : (
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                `flex items-center  text-white bg-transparent`
                            }

                            state={'/addReview'}
                            to='/auth/login'

                        >
                            Add Review
                        </NavLink>
                    </li>
                )
        }
        {
            user && <>
                <li> <NavLink className={({ isActive }) =>
                    `flex items-center gap-0 ${isActive ? 'text-lime-400 font-bold' : 'text-white'}`
                } to='/myReviews'>My Reviews</NavLink></li>
            </>
        }
        {
            user && <>
                <li> <NavLink className={({ isActive }) =>
                    `flex items-center gap-0 ${isActive ? 'text-lime-400 font-bold' : 'text-white'}`
                } to='/myWatchlist'> Game WatchList</NavLink></li>
            </>
        }


    </>

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                const error = err.message;
            })
    }
    return (
        <div className={`navbar ${navbarClass} navbar w-full py-2 md:py-4 sticky top-0 z-50`}>
            <div className="container w-[91%] mx-auto">
            <div className="navbar-start flex items-center gap-2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 sm:p-2 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {links}
                    </ul>
                </div>
                <div className="avatar w-12 h-8 md:w-20 md:h-14"><img className="w-full h-full overflow-hidden rounded-xl object-cover" src={logo} alt="" /></div>

                <div className="">
                <button
                    onClick={toggleTheme}
                    className="flex items-center ml-0 sm:ml-1 bg-white  p-1 rounded-full shadow-lg bg-gray-white dark:bg-gray-800 border-2 dark:border-white border-purple-800 transition-all duration-300"
                >
                    {theme === 'light' ? (
                        <FaMoon className="text-yellow-500 text-base" />
                    ) : (
                        <FaSun className="text-orange-400 text-base" />
                    )}
                   
                </button>
            </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 -space-x-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end flex  items-center gap-0.5 md:gap-2">
                <div className=" flex flex-col items-center">
                    {
                        user ?
                            <div className="flex items-center">
                                <div className="h-10 w-12 md:h-12 md:w-14 rounded-full  px-1 relative" id='click' onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}>
                                    <img className=" h-full w-full  rounded-full object-cover overflow-hidden" src={user?.photoURL}
                                        alt="Avatar image"
                                    />
                                    <Tooltip className="z-10" anchorSelect="#click" clickable>
                                        <button> {user?.displayName}</button>
                                    </Tooltip>

                                </div>
                                {/* {showTooltip && (
                                    <div className="absolute mr-4 top-16 text-sm text-lime-400 bg-white p-2 rounded-lg border ">
                                        {user?.displayName}
                                    </div>
                                )} */}

                            </div>
                            :

                            (<Link to='/auth/login' className="bg-white text-black md:px-3 md:py-3 px-2 py-2 font-medium md:font-bold text-sm md:text-base rounded-xl">Login</Link>)
                    }

                </div>
                <div>
                    {
                        user && user?.email ?
                            (<button onClick={handleLogOut} className="bg-white text-black md:px-3 md:py-3 px-2 py-2 font-medium md:font-bold text-sm md:text-base rounded-xl ">LogOut</button>)
                            :
                            (<Link to='/auth/register' className=" bg-white text-black md:px-3 md:py-3 px-2 py-2 font-medium md:font-bold text-sm md:text-base rounded-xl ">Register</Link>)
                    }
                </div>

            </div>
            </div>
           

        </div>
    );
};

export default Navbar;