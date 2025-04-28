import React, { useContext, useEffect, useState } from 'react';
import HighestRatedCard from '../components/HighestRatedCard';
import { useLoaderData } from 'react-router-dom';
// import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import { FaMoon, FaSun } from 'react-icons/fa';
import ExtraOne from '../components/ExtraOne';
import ExtraTwo from '../components/ExtraTwo';
import Banner from '../components/Banner';
import { AuthProviderContext } from '../Provider/AuthProvider';

const Home = () => {
    const sixRatedReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);
 
    // Set initial reviews
    useEffect(() => {
        setReviews(sixRatedReviews);
    }, [sixRatedReviews]);

    return (
        <div className='container w-full mx-auto bg-gray-50 dark:shadow-xl dark:shadow-black dark:bg-gray-950  text-black dark:text-white'>
            <Banner></Banner>
            <HighestRatedCard key={reviews._id} reviews={reviews} setReviews={setReviews}></HighestRatedCard>
            <ExtraTwo></ExtraTwo>
            {
                
                <ExtraOne></ExtraOne>
            }
        </div>
    );
};

export default Home;