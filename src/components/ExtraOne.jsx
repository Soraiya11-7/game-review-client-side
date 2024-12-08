import React from "react";
import forum from "../assets/forum.jpg";
import global from "../assets/digital-global.jpg";
import events from "../assets/events.png"
import tournament from "../assets/gaming-tournaments.jpg"
import { Link } from "react-router-dom";
const ExtraOne = () => {
    return (
        <div className="py-10 bg-purple-400 dark:bg-gray-700 mt-10 rounded-t-lg">
            <div className=" mx-auto text-center py-10 px-6">

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Join the Community</h2>
                <p className="mb-10 w-full sm:w-[80%] md:w-[60%] text-base md:text-lg mx-auto text-center">
                    Connect with gamers worldwide. Expand your network and stay updated with the latest trends in gaming.
                </p>

                {/* Features Section................. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center border border-violet-700  rounded-xl px-3 sm:px-6 py-8 bg-black text-white shadow-lg">

                        <div className=" w-36 h-36 rounded-full flex justify-center items-center border-2 border-violet-600 ">
                            <img
                                src={forum}
                                alt="Forum Discussions"
                                className="rounded-full shadow-lg w-full h-full object-cover overflow-hidden border-2 border-violet-600 "
                            />
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold">Forum Discussions</h3>
                        <p className=" mt-2 text-sm md:text-base w-[95%] sm:w-[80%] lg:w-[70%]">
                            Engage in exciting conversations about your favorite games.
                        </p>
                    </div>
                    <div className="flex flex-col items-center border border-violet-700  rounded-xl p-3 sm:p-6 bg-black text-white shadow-lg">
                        
                        <div className=" w-36 h-36 rounded-full flex justify-center items-center border-2 border-violet-600 ">
                            <img
                                src={tournament}
                                alt="Tournaments"
                                className="rounded-full shadow-lg w-full h-full object-cover overflow-hidden border-2 border-violet-600 "
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold">Tournaments</h3>
                        <p className=" mt-2 text-sm md:text-base w-[95%] sm:w-[80%] lg:w-[70%]">
                            Compete in global gaming tournaments and win amazing prizes.
                        </p>
                    </div>
                    <div className="flex flex-col items-center border border-violet-700  rounded-xl p-3 sm:p-6 bg-black text-white shadow-lg">
                    <div className=" w-36 h-36 rounded-full flex justify-center items-center border-2 border-violet-600 ">
                            <img
                                src={events}
                                alt="Events"
                                className="rounded-full shadow-lg w-full h-full object-cover overflow-hidden border-2 border-violet-600 "
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold">Exclusive Events</h3>
                        <p className=" mt-2 text-sm md:text-base w-[95%] sm:w-[80%] lg:w-[70%]">
                            Attend exclusive gaming events and meet industry experts.
                        </p>
                    </div>
                    <div className="flex flex-col items-center border border-violet-700  rounded-xl p-3 sm:p-6 bg-black text-white shadow-lg">
                    <div className=" w-36 h-36 rounded-full flex justify-center items-center border-2 border-violet-600 ">
                            <img
                                src={global}
                                alt="global-connections"
                                className="rounded-full shadow-lg w-full h-full object-cover overflow-hidden border-2 border-violet-600 "
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold">Global Connections</h3>
                        <p className=" mt-2 text-sm md:text-base w-[95%] sm:w-[80%] lg:w-[70%]">
                            Build relationships with gamers across the globe.
                        </p>
                    </div>
                </div>

                {/* Call-to-Action Button */}
                <div className="mt-8">
                    <Link to="https://www.changex.org/us/community-games/">
                    <button className="bg-white text-black px-6 py-3 rounded-xl text-lg font-bold">
                        Join Now
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExtraOne;
