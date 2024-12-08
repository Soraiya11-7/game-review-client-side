import React from 'react';
import Card from './Card';

const HighestRatedCard = ({reviews, setReviews}) => {
    
    return (
        <div className='dark:bg-slate-700 '>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-center">Highest Rated Games</h2>
            <h3 className="mb-6 md:mb-14 w-full sm:w-[80%] md:w-[60%] text-base md:text-lg mx-auto text-center">Discover the top-rated games that players love, showcasing only the best of the best!</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        reviews.map((review) => (
                            <Card key={review._id}
                                review={review}></Card>)
                        )
                    }
                </div>
        </div>
    );
};

export default HighestRatedCard;