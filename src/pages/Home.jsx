import React, { useEffect, useState } from 'react';
import HighestRatedCard from '../components/HighestRatedCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const sixRatedReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        setReviews(sixRatedReviews);
    },[sixRatedReviews])
    return (
        <div className='w-[80%] mx-auto py-10'>
            <h2>Home!</h2>
            <HighestRatedCard key={reviews._id} reviews={reviews} setReviews={setReviews}></HighestRatedCard>

        </div>
    );
};

export default Home;