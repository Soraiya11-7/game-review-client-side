import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const UpdateReview = () => {
    const review = useLoaderData();
    // console.log(review);
    const navigate = useNavigate();
    
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

        console.log(newReview);

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method:"PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
           })
           .then(res => res.json())
           .then(data => {
            // console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Review Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

                  navigate('/myReviews');
            }
           })


    };
    return (
        <div className=" py-12 w-[80%] mx-auto">
             <button onClick={() => navigate('/myReviews')} className='text-left bg-purple-700 rounded-xl p-2 text-white'>&larr;Back</button>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">Update a Review</h2>
            <h3 className='text-sm sm:text-lg  text-center mb-10'> Update detailed reviews for your favorite games effortlessly</h3>
            <form onSubmit={handleSubmit} className='bg-slate-300 py-10 px-6 shadow-lg rounded-xl' >
                {/* form name and Game Cover Image/Thumbnail */}
                <div className=" md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Game Title</span>
                        </label>
                        <input type="text" name="gameTitle" defaultValue={gameTitle} placeholder="Enter Game Title" className="input input-bordered w-full text-xs sm:text-base" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        {/* Game Cover Image/Thumbnail */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Game Cover Image URL</span>
                            </label>
                            <input type="text" name="coverImage" defaultValue={coverImage} placeholder="Enter Game Cover Image URL" className="input input-bordered w-full text-xs sm:text-base" required />

                        </div>
                    </div>

                </div>

                {/* Genre and publishing Year row */}
                <div className=" md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <select name='genre' className="select select-bordered w-full text-xs sm:text-base" defaultValue={genre}>
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
                        <input type="text" name="publishingYear" placeholder="Enter Publishing Year" defaultValue={publishingYear}
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
                        <input type="number" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full text-xs sm:text-base" min="1"
                            max="5" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Review Description</span>
                        </label>
                        <textarea name="details" defaultValue={details} placeholder="Detailed Review" className="input input-bordered w-full text-xs sm:text-base" required />
                    </div>

                </div>


                <input type="submit" value="Update" className="btn btn-block bg-orange-800 text-white font-bold hover:bg-orange-700 border-none" />
            </form>

        </div>
    );
};

export default UpdateReview;