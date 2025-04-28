import React from 'react';
import Card from './Card';

const HighestRatedCard = ({reviews, setReviews}) => {
    
    return (
        <div className='w-[90%] mx-auto '>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-center">Highest Rated Games</h2>
            <h3 className="mb-6 md:mb-14 w-full sm:w-[80%] md:w-[60%] text-base md:text-lg mx-auto text-center">Discover the top-rated games that players love, showcasing only the best of the best!</h3>
            {
                    reviews.length === 0 ? (
                        <div className="text-center  ">
                          <h3 className="text-xl text-gray-500">No Highly Rated Reviews Found.</h3>
                          <p>Add New Review.</p>
                        </div>
                      ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        reviews.map((review) => (
                            <Card key={review._id}
                                review={review} ></Card>)
                        )
                    }
                </div>)
                }
           
        </div>
    );
};

export default HighestRatedCard;