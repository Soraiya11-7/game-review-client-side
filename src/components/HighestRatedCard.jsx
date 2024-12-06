import React from 'react';
import Card from './Card';

const HighestRatedCard = ({reviews, setReviews}) => {
    console.log(reviews);
    return (
        <div>
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