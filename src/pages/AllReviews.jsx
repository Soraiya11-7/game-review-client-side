import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const AllReviews = () => {
    const allReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(allReviews);
    }, [allReviews])


    return (
        <div className='w-[80%] mx-auto'>
            <div className="py-10  bg-gray-50">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6">All Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        reviews.map((review) => (
                            <Card key={review._id}
                                review={review} reviews={reviews} setReviews={setReviews}></Card>)
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviews;