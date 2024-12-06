import React, { useEffect, useState } from 'react';
import HighestRatedCard from '../components/HighestRatedCard';
import { useLoaderData } from 'react-router-dom';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip';
const Home = () => {
    const sixRatedReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [text] = useTypewriter({
        words: ['Welcome to Our Website!', 'Explore Our Amazing Content', 'Enjoy the Experience'],
        loop: 3,
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    useEffect(() => {
        setReviews(sixRatedReviews);
    }, [sixRatedReviews])
    return (
        <div className='w-[80%] mx-auto py-10'>
            <h2>{text}</h2>
            <div>
                <h2 className='text-center' id='clickable'>Hmmmmmmmmm</h2>
                {/* <a id="clickable">◕‿‿◕</a> */}
                <Tooltip anchorSelect="#clickable" clickable>
                    <button>hello</button>
                </Tooltip>
            </div>
            <HighestRatedCard key={reviews._id} reviews={reviews} setReviews={setReviews}></HighestRatedCard>

        </div>
    );
};

export default Home;