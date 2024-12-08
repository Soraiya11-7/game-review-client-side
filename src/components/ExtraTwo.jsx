import React from 'react';

function ExtraTwo() {
 
  return (
    <div className="py-16 my-10 bg-gradient-to-br from-purple-500 via-indigo-300 to-lime-900 text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-16 text-white">
        Gaming Milestones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 md:px-6 ">
        {/* Milestone Card........................................ */}
        <div className="milestone-card relative bg-gradient-to-tr from-gray-700 to-gray-800 p-3 sm:p-8 md:p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mb-10 lg:mb-0">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
            1990
          </div>
          <h3 className="mt-10 text-lg md:text-xl font-semibold text-center text-white">
            The First 3D Game
          </h3>
          <p className="mt-4 text-gray-300 w-full sm:w-[70%] md:w-full mx-auto text-sm md:text-base text-center">
            One of the earliest 3D games, 'Virtual Racing,' was released, changing the future of gaming visuals forever.
          </p>
        </div>
       {/* .................................... */}
        <div className="milestone-card relative bg-gradient-to-tr from-gray-700 to-gray-800 p-3 sm:p-8 md:p-4  rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mb-10 lg:mb-0">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
            2005
          </div>
          <h3 className="mt-10 text-lg md:text-xl font-semibold text-center text-white">
            Launch of Xbox 360
          </h3>
          <p className="mt-4 text-gray-300 w-full sm:w-[70%] md:w-full mx-auto text-sm md:text-base text-center">
            The Xbox 360 introduced high-definition graphics, taking gaming to the next level.
          </p>
        </div>
        {/* ............................................ */}
        <div className="milestone-card relative bg-gradient-to-tr from-gray-700 to-gray-800 p-3 sm:p-8 md:p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold shadow-lg ">
            2010
          </div>
          <h3 className="mt-10 text-lg md:text-xl font-semibold text-center text-white">
            The Rise of Mobile Gaming
          </h3>
          <p className="mt-4 text-gray-300 w-full sm:w-[70%] md:w-full mx-auto text-sm md:text-base text-center">
            Mobile games became mainstream with titles like Angry Birds and Clash of Clans.
          </p>
        </div>
      </div>
    </div>
  );
}




export default ExtraTwo;
