import React, { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { AiFillDelete } from "react-icons/ai"; // Importing a delete icon from react-icons
import Swal from "sweetalert2";

const GameWatchlist = () => {
  const [watchList, setWatchList] = useState([]);
  const { user } = useContext(AuthProviderContext); // Get the logged-in user from the AuthContext

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-10-server-gamma-mocha.vercel.app/watchList/${user.email}`)
        .then((res) => res.json())
        .then((data) => setWatchList(data))
        // .catch((error) => alert(error));
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-gamma-mocha.vercel.app/watchList/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your game from watchList has been deleted.",
                icon: "success"
              });
              const remaining = watchList.filter(game => game._id !== _id);
              setWatchList(remaining);
            }
          })
      }
    });
  };

  return (
    <div className="w-full dark:bg-gray-950  py-10">
      <div className="container w-[90%] mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 dark:text-white">My watchList</h2>
      {watchList.length === 0 ? (
        <div className="text-center">
          <h3 className="text-xl text-gray-500 dark:text-300">Your watchList is empty.</h3>
          <p className="dark:text-gray-400">Add games to your watchList from the Review Details page.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-purple-500">
            <thead>
              <tr className="bg-purple-400">
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">No.</th>
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">Thumbnail</th>
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg ">Game Title</th>
                <th className="border border-purple-500 px-1 py-2 text-sm md:text-base lg:text-lg">Genre</th>
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">Publishing Year</th>
                <th className="border border-purple-500 px-1 py-2 text-sm md:text-base lg:text-lg">Rating</th>
                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">Reviewer Name</th>
                <th className="border border-purple-500 px-1 py-2 text-sm md:text-base lg:text-lg">Description</th>

                <th className="border border-purple-500 py-2 text-sm md:text-base lg:text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchList.map((game, index) => (
                <tr key={game._id} className="text-center bg-purple-100">
                  <td className="border border-purple-500  py-2 text-sm md:text-base  ">{index + 1}</td>
                  <td className="border border-purple-500 py-2 text-center " >
                    <div className="inline-flex justify-center items-center">
                      <img
                        src={game.coverImage}
                        alt="Game Cover"
                        className="w-6 md:w-12 h-6 md:h-12 rounded-full object-cover overflow-hidden"
                      />
                    </div>
                  </td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base ">{game.gameTitle}</td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base  ">{game.genre}</td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base" >{game.publishingYear}</td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base  ">{game.rating}</td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base" >{game.reviewerName}</td>
                  <td className="border border-purple-500  py-2 text-sm md:text-base  ">{game.details}</td>

                  <td className="border border-purple-500 py-2 text-sm md:text-base  ">
                    <button
                      onClick={() => handleDelete(game._id)}
                      className=" text-center text-red-600 rounded-full transition-all duration-300"
                    >
                      <AiFillDelete className="text-center" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    
    </div>
  );
};

export default GameWatchlist;
