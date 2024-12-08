import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProviderContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddReview = () => {
    const { user, setLoading } = useContext(AuthProviderContext);
    const navigate = useNavigate();

    const [reviewerEmail, setReviewerEmail] = useState(user?.email || '');
    const [reviewerName, setReviewerName] = useState(user?.displayName || '');
    const [userLogo, setUserLogo] = useState(user?.photoURL || '');


    useEffect(() => {
        if (user) {
            setReviewerEmail(user.email);
            setReviewerName(user.displayName);
            setUserLogo(user.photoURL);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const gameTitle = form.gameTitle.value;
        const rating = form.rating.value;
        const publishingYear = form.publishingYear.value;
        const genre = form.genre.value;
        const details = form.details.value;
        const coverImage = form.coverImage.value;

        const newReview = { gameTitle, rating, publishingYear, genre, details, coverImage, reviewerEmail, reviewerName, userLogo };

        fetch("https://assignment-10-server-gamma-mocha.vercel.app/reviews", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myReviews');
                }
            })


    };

    return (
        <div className=" py-12 w-[80%] mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">Add a New Review</h2>
            <h3 className='text-sm sm:text-lg  text-center mb-10'> Submit detailed reviews for your favorite games effortlessly</h3>
            <form onSubmit={handleSubmit} className='bg-slate-300 py-10 px-6 shadow-lg rounded-xl' >
                {/* form name and Game Cover Image/Thumbnail */}
                <div className=" md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Game Title</span>
                        </label>
                        <input type="text" name="gameTitle" placeholder="Enter Game Title" className="input input-bordered w-full text-xs sm:text-base" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        {/* Game Cover Image/Thumbnail */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Game Cover Image URL</span>
                            </label>
                            <input type="text" name="coverImage" placeholder="Enter Game Cover Image URL" className="input input-bordered w-full text-xs sm:text-base" required />

                        </div>
                    </div>

                </div>

                {/* Genre and publishing Year row */}
                <div className=" md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <select name='genre' className="select select-bordered w-full text-xs sm:text-base" required>
                            <option value="">Select Genre</option>
                            <option value="Action">Action</option>
                            <option value="RPG">RPG</option>
                            <option value="Adventure">Adventure</option>

                        </select>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Publishing Year</span>
                        </label>
                        <input type="text" name="publishingYear" placeholder="Enter Publishing Year"
                            className="input input-bordered w-full text-xs sm:text-base" pattern="\d{4}"
                            title="Please enter a valid 4-digit year." required />
                    </div>

                </div>

                {/* User Email and Name */}
                <div className=" md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="Category" className="input input-bordered w-full text-xs sm:text-base" value={reviewerName}
                            readOnly />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email"
                            value={reviewerEmail}
                            placeholder="Enter Your Detailed Review" className="input input-bordered w-full text-xs sm:text-base" readOnly />
                    </div>

                </div>

                {/* Rating and Details */}
                <div className="md:flex  mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Rating (1-5)</span>
                        </label>
                        <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full text-xs sm:text-base" min="1"
                            max="5" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Review Description</span>
                        </label>
                        <textarea name="details" placeholder="Detailed Review" className="input input-bordered w-full text-xs sm:text-base" required />
                    </div>

                </div>


                <input type="submit" value="Submit Review" className="btn btn-block bg-purple-500 text-white font-bold border-none" />
            </form>

        </div>
    );
};

export default AddReview;
