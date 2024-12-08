import React, { useEffect, useState } from 'react';
import HighestRatedCard from '../components/HighestRatedCard';
import { useLoaderData } from 'react-router-dom';
// import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import { FaMoon, FaSun } from 'react-icons/fa';
import ExtraOne from '../components/ExtraOne';
import ExtraTwo from '../components/ExtraTwo';

const Home = () => {
    const sixRatedReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);

    // const [text] = useTypewriter({
    //     words: ['Welcome to Our Website!', 'Enjoy the Experience'],
    //     loop: 0,
    //     typeSpeed: 100,
    //     deleteSpeed: 50,
    // });

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Set initial reviews
    useEffect(() => {
        setReviews(sixRatedReviews);
    }, [sixRatedReviews]);

    return (
        <div className='w-[80%] mx-auto py-10 bg-white dark:bg-gray-900  text-black dark:text-white'>
            {/* <h2>{text}</h2> */}

            <div className="flex justify-end mb-4">
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 p-2 rounded-full shadow-lg bg-gray-200 dark:bg-gray-800 border-2 dark:border-white transition-all duration-300"
                >
                    {theme === 'light' ? (
                        <FaMoon className="text-yellow-500 text-xl" />
                    ) : (
                        <FaSun className="text-orange-400 text-xl" />
                    )}
                    <span className="text-gray-900 dark:text-gray-100 font-semibold">
                        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                </button>
            </div>

            <HighestRatedCard key={reviews._id} reviews={reviews} setReviews={setReviews}></HighestRatedCard>
            <ExtraTwo></ExtraTwo>
            {
                
                <ExtraOne></ExtraOne>
            }
        </div>
    );
};

export default Home;