
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ review}) => {
    const { _id,gameTitle, rating, publishingYear, genre, details, coverImage, reviewerName } = review;
    
    return (
        <div className="w-full mx-auto flex justify-center items-center">
            <div className="shadow-xl w-full h-full rounded-lg bg-white overflow-hidden">
                {/* Header.................... */}
                <div className="bg-purple-400 pt-4 text-center w-full">
                    <div  className="h-52 w-[90%] mx-auto shadow-xl rounded-t-lg ">
                        <img src={coverImage} className="h-full w-full object-cover overflow-hidden rounded-t-lg" alt="coverImage" />

                    </div>
                </div>

                <div className=" bg-white  py-4 text-center w-full">
                    {/* Card Content...................... */}
                    <div className="relative bg-white p-4 w-[90%] text-center mx-auto shadow-xl rounded-b-lg min-h-[300px] flex flex-col flex-grow ">
                        {/* Profile Image................ */}
                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-purple-500 border-none outline-none ring-offset-2">
                                    <img
                                        src={review?.userLogo}
                                        alt="User Profile"
                                    />
                                </div>
                            </div>
                        </div>

            
                        <div className="mt-1 flex flex-col flex-grow min-h-[80px] ">
                            <p className="text-sm font-semibold text-gray-800 mb-3">{reviewerName}</p>
                            <p className="text-gray-600 italic text-sm  min-h-[50px] flex-grow">
                                <span>"{details}"</span>
                            </p>

                            <div className="bg-white px-4 text-center border-t border-gray-300  mt-4 flex flex-col min-h-[50px] flex-grow ">
                                <h3 className="text-lg font-semibold flex-grow">{gameTitle}</h3>
                                <p className="text-sm text-gray-500 uppercase">{genre}</p>
                                <h2 className="text-sm text-gray-500 uppercase"> <span>{publishingYear}</span></h2>
                                {/* Star Ratings............... */}

                                <div className="flex justify-center items-center mt-2 ">
                                    {[...Array(5)].map((_, index) => (
                                        <span className="text-center" key={index}>
                                            {index < rating ? (
                                                <FaStar className="text-yellow-500" />
                                            ) : (
                                                <FaStar className="text-gray-300" />
                                            )}
                                        </span>
                                    ))}
                                </div>
                                <Link to={`/review/${_id}`}>
                                <button className=" bg-purple-500 mt-4 p-2 text-white text-sm font-medium rounded-lg">Explore Details</button>
                           </Link>
                                


                            </div>
                        </div>
                    </div>

                   
                </div>


            </div>
        </div>
    );
};

export default Card;