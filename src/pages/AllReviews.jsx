import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const AllReviews = () => {
    const allReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('all'); // Default: no genre filter

    useEffect(() => {
    
        let sortedReviews = [...allReviews];
        // Filter reviews based on selected genre
        if (selectedGenre !== 'all') {
            sortedReviews = sortedReviews.filter(review => review.genre.toLowerCase() === selectedGenre.toLowerCase());
        }
         
        if (sortBy === 'rating') {
            
            sortedReviews.sort((a, b) => a.rating - b.rating);
        } else if (sortBy === 'year') {
            // const yearA = parseInt(a.publishingYear, 10);
            //     const yearB = parseInt(b.publishingYear, 10);
            // Sort by publishingYear in descending order (convert to integers)
            sortedReviews.sort((a, b) => parseInt(b.publishingYear) - parseInt(a.publishingYear));
        }
        setReviews(sortedReviews);
    }, [ sortBy,allReviews,selectedGenre]);
    const genres = [...new Set(allReviews.map(review => review.genre))];


    return (
        <div className='w-[80%] mx-auto'>
            <div className="py-10  bg-gray-50">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-14">All Reviews</h2>

                     {/* Dropdown for Sorting */}
                     <div className="flex justify-between mb-12">
                     <div>
                        <select
                            onChange={(e) => setSortBy(e.target.value)}
                            value={sortBy}
                            className="px-4 py-2 border border-purple-700  rounded-md"
                        >
                            <option value="">Sort Reviews</option>
                            <option value="rating">Rating: Ascending</option>
                            <option value="year">Year: Descending</option>
                        </select>
                    </div>
                       {/* Dropdown for Genre Filtering */}
                    <div>
                        <select
                            onChange={(e) => setSelectedGenre(e.target.value)}
                            value={selectedGenre}
                            className="px-4 py-2 border border-purple-700 rounded-md"
                        >
                            <option value="all">All Genres</option>
                            {genres.map((genre) => (
                                <option key={genre} value={genre.toLowerCase()}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
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