
import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ review, reviews, setReviews }) => {
    const { gameTitle, rating, publishingYear, genre, details, coverImage, userEmail, userName } = review;
    console.log(details);
    return (
        <div className="w-full mx-auto flex justify-center items-center">
            <div className="shadow-xl w-full h-full rounded-lg bg-white overflow-hidden">
                {/* Header */}
                <div className="bg-purple-400 px-4 pt-8 text-center w-full">
                    <div  className="h-48 w-[90%] mx-auto shadow-xl rounded-t-lg ">
                        <img src={coverImage} className="h-full w-full object-cover overflow-hidden rounded-t-lg" alt="coverImage" />

                    </div>
                </div>

                <div className=" bg-white px-4 py-8 text-center w-full">
                    {/* Card Content */}
                    <div className="relative bg-white p-8 w-[90%] text-center mx-auto shadow-xl rounded-b-lg min-h-[250px] flex flex-col ">
                        {/* Profile Image */}
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

                        {/* Quote */}
                        <div className="mt-1 flex-flex-col flex-grow h-full">
                            <p className="text-sm font-semibold text-gray-800 mb-4">{userName}</p>
                            <p className="text-gray-600 italic text-sm flex-grow">
                                <span>"</span>{details}<span>"</span>
                            </p>


                            <div className="bg-white px-4 text-center border-t border-gray-300  mt-4 flex flex-col ">
                                <h3 className="text-lg font-semibold flex-grow">{gameTitle}</h3>
                                <p className="text-sm text-gray-500 uppercase">{genre}</p>
                                {/* Star Ratings */}

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


                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Card;