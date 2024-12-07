import { Link, NavLink, useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import { RiCoupon3Fill } from "react-icons/ri";
import logo from "../assets/gamer.jpg"
import { useContext, useState } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthProviderContext);
   
    const location = useLocation();
    const [showTooltip, setShowTooltip] = useState(false);
    // const location = useLoaderData();
    const navigate = useNavigate();

    const links = <>

        <li><NavLink to='/'
            className={({ isActive }) =>
                `flex items-center gap-x-1  ${isActive ? 'text-teal-800 font-bold' : 'text-[#0B0B0BB3]'}`
            }>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            `flex items-center gap-x-0.5  ${isActive ? 'text-teal-800 font-bold' : 'text-[#0B0B0BB3]'}`
        } to='/reviews'>All Reviews</NavLink></li>

        {
            user ? (
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center ${isActive ? 'text-teal-800 font-bold' : 'text-[#0B0B0BB3]'}`
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
                                `flex items-center  text-[#0B0B0BB3] bg-transparent`
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
                    `flex items-center gap-0 ${isActive ? 'text-teal-800 font-bold' : 'text-[#0B0B0BB3]'}`
                } to='/myReviews'>My Reviews</NavLink></li>
            </>
        }
        {
            user && <>
                <li> <NavLink className={({ isActive }) =>
                    `flex items-center gap-0 ${isActive ? 'text-teal-800 font-bold' : 'text-[#0B0B0BB3]'}`
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
        <div className="navbar bg-gray-300 w-[80%] mx-auto p-2 md:p-4 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 sm:p-2 mr-1 lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {links}
                    </ul>
                </div>
                <div className="avatar w-14 h-10 md:w-20 md:h-14"><img className="w-full h-full overflow-hidden rounded-xl object-cover" src={logo} alt="" /></div>
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
                                <div className="h-10 w-12 md:h-12 md:w-14 rounded-full px-1 relative" id='click' onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}>
                                    <img className=" h-full w-full  rounded-full object-cover overflow-hidden" src={user?.photoURL}
                                        alt="Avatar image"
                                    />
                                    <Tooltip anchorSelect="#click" clickable>
                                        <button> {user?.displayName}</button>
                                    </Tooltip>

                                </div>
                                {/* {showTooltip && (
                                    <div className="absolute mr-4 top-16 text-sm text-teal-800 bg-white p-2 rounded-lg border ">
                                        {user?.displayName}
                                    </div>
                                )} */}

                            </div>
                            :

                            (<Link to='/auth/login' className="bg-teal-500 text-white md:px-3 md:py-3 px-2 py-2 font-medium md:font-bold text-sm md:text-base rounded-xl">Login</Link>)
                    }

                </div>
                <div>
                    {
                        user && user?.email ?
                            (<button onClick={handleLogOut} className="bg-teal-500 text-white md:px-3 md:py-3 px-2 py-2 font-medium md:font-bold text-sm md:text-base rounded-xl ">LogOut</button>)
                            :
                            (<Link to='/auth/register' className=" bg-teal-500 text-white md:px-3 md:py-3 px-2 py-2 font-medium md:font-bold text-sm md:text-base rounded-xl ">Register</Link>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Navbar;