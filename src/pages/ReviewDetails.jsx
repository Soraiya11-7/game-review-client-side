import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ReviewDetails = () => {
    const navigate = useNavigate();
    const review = useLoaderData();
    const {user} = useContext(AuthProviderContext)
    const {
        _id,
        gameTitle,
        rating,
        publishingYear,
        genre,
        details,
        coverImage,
        reviewerEmail,
        reviewerName,
        userLogo
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
        if(!user) {
            navigate('/auth/login', { state: `/review/${_id}` });

        }
        else{
            const newWatchList = { gameTitle, rating, publishingYear, genre, details, coverImage, reviewerEmail, reviewerName, email,name };

        fetch("https://assignment-10-server-gamma-mocha.vercel.app/watchlist", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWatchList)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // if (data.insertedId) {
                //     Swal.fire({
                //         title: 'Success!',
                //         text: 'Review added on watchList Successfully',
                //         icon: 'success',
                //         confirmButtonText: 'Cool'
                //     })
                // }
            })
        }
    };

    return (
        <div className='w-full bg-gradient-to-tr from-purple-500 via-indigo-300 to-lime-700 dark:bg-none dark:bg-gray-950 py-10'>
            <div className="container w-[90%] mx-auto  ">
                {/* Page Title */}
                <div className="text-center text-white mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold">Review Details</h1>
                    <p className="text-xs sm:text-base md:text-lg">Detailed information about the game and review</p>
                </div>

                {/* Review Card */}
                <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden ">

                    <div className="h-[250px] sm:h-[300px] md:h-[400px] w-full mx-auto border  rounded-lg mb-4 p-4">
                        <img src={coverImage} className="h-full w-full object-cover border overflow-hidden rounded-lg " alt="coverImage" />

                    </div>


                    {/* Review Information.................................. */}
                    <div className="p-3">
                        {/* Game Title & Rating */}
                        <div className="md:flex justify-between mb-2">
                            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800  mb-2 md:mb-0">{gameTitle}</h2>
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-xs md:text-sm text-white py-1 px-4 rounded-full inline-block md:flex">
                                Rating: {rating}/5
                            </div>
                        </div>

                        {/* Publishing Year & Genre */}
                        <div className="md:flex justify-between mb-4">
                            <p className="text-gray-600 text-sm md:text-lg mb-2 md:mb-0">
                                <span className="font-semibold">Published in:</span> {publishingYear}
                            </p>
                            <p className="text-gray-600 text-sm md:text-lg font-semibold">Genre:
                                <span className="font-medium uppercase"> {genre}</span>
                            </p>
                        </div>

                       <hr/>

                        {/* Reviewer Info */}
                        <div className="flex items-center gap-2 mb-3 mt-2">
                            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full border'>
                            <img
                                src={userLogo}
                                alt="User Avatar"
                                className="w-full h-full rounded-full border object-cover overflow-hidden "
                            />
                            </div>
                            <div className='text-left'>
                                <p className="font-semibold text-sm md:text-lg">{reviewerName}</p>
                                <p className="text-gray-600 text-xs md:text-base">{reviewerEmail}</p>
                            </div>
                        </div>

                         {/* Review Description */}
                        <div className="text-gray-700 font-semibold mb-6">
                            <span className="text-xs md:text-base font-normal">"{details}"</span>

                        </div>
                      

                        {/* Add to WatchList Button */}
                        <div className="flex justify-center ">
                            <button
                                onClick={() =>handleAddToWatchList()}
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
