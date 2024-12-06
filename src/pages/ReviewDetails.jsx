import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ReviewDetails = () => {
    const review = useLoaderData();
    const {user} = useContext(AuthProviderContext)
    const {
        gameTitle,
        rating,
        publishingYear,
        genre,
        details,
        coverImage,
        reviewerEmail,
        reviewerName,
    } = review;


    //current logged in users info
    const [email, setUserEmail] = useState(user?.email || '');
    const [name, setUserName] = useState(user?.displayName || '');
   


    useEffect(() => {
        if (user) {
            setUserEmail(user.email);
            setUserName(user.displayName);
        }
    }, [user]);

    const handleAddToWatchList = () => {
        const newWatchList = { gameTitle, rating, publishingYear, genre, details, coverImage, reviewerEmail, reviewerName, email,name };

        console.log(newWatchList);

        fetch("http://localhost:5000/watchlist", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWatchList)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review added on watchList Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };

    return (
        <div className='w-[80%] mx-auto'>
            <div className=" bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-10 px-4 md:px-12">
                {/* Page Title */}
                <div className="text-center text-white mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold">Review Details</h1>
                    <p className="text-xs sm:text-base md:text-lg">Detailed information about the game and review</p>
                </div>

                {/* Review Card */}
                <div className="w-full md:w-[80%] lg:w-[60%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

                    <div className="h-auto w-full mx-auto shadow-xl rounded-t-lg ">
                        <img src={coverImage} className="h-full w-full object-cover overflow-hidden rounded-t-lg" alt="coverImage" />

                    </div>


                    {/* Review Information.................................. */}
                    <div className="p-6">
                        {/* Game Title & Rating */}
                        <div className="md:flex justify-between mb-2">
                            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800  mb-2 md:mb-0">{gameTitle}</h2>
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-xs md:text-sm text-white py-1 px-4 rounded-full inline-block md:flex">
                                Rating: {rating}/5
                            </div>
                        </div>

                        {/* Publishing Year & Genre */}
                        <div className="md:flex justify-between mb-6">
                            <p className="text-gray-600 text-sm md:text-lg mb-2 md:mb-0">
                                <span className="font-semibold">Published in:</span> {publishingYear}
                            </p>
                            <p className="text-gray-600 text-sm md:text-lg font-semibold">Genre:
                                <span className="font-medium uppercase"> {genre}</span>
                            </p>
                        </div>

                       <hr/>

                        {/* Reviewer Info */}
                        {/* <div className="flex items-center gap-4 mb-2 mt-6">
                            <img
                                src="https://i.ibb.co.com/HKw5bSk/istockphoto-1209654046-612x612.jpg"
                                alt="User Avatar"
                                className="w-16 h-16 rounded-full border-2 border-gray-300"
                            />
                            <div>
                                <p className="font-semibold text-lg">{userName}</p>
                                <p className="text-gray-600">{userEmail}</p>
                            </div>
                        </div> */}

                         {/* Review Description */}
                        <div className="text-gray-700 font-semibold mb-6">
                            <span className="text-xs sm:text-sm md:text-lg font-normal">"{details}"</span>

                        </div>
                        <div className='text-right'>
                                <p className="font-semibold text-sm md:text-lg">{reviewerName}</p>
                                <p className="text-gray-600 text-xs md:text-lg">{reviewerEmail}</p>
                            </div>

                        {/* Add to WatchList Button */}
                        <div className="flex justify-center mt-10">
                            <button
                                onClick={handleAddToWatchList}
                                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white  text-xs sm:text-sm md:text-base font-bold py-2 px-6 rounded-lg shadow-md hover:from-blue-500 hover:to-green-400 transition-all duration-300"
                            >
                                Add to WatchList
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
