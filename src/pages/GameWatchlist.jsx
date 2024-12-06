import React, { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { AiFillDelete } from "react-icons/ai"; // Importing a delete icon from react-icons
import Swal from "sweetalert2";

const GameWatchlist = () => {
  const [watchList, setWatchList] = useState([]);
  const { user } = useContext(AuthProviderContext); // Get the logged-in user from the AuthContext

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/watchList/${user.email}`)
        .then((res) => res.json())
        .then((data) => setWatchList(data))
        .catch((error) => console.error("Error fetching watchList:", error));
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
          fetch(`http://localhost:5000/watchList/${_id}`,{
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
              // console.log(data);
              if(data.deletedCount > 0){
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
    <div className="w-[80%] mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My watchList</h2>
      {watchList.length === 0 ? (
        <div className="text-center">
          <h3 className="text-xl text-gray-500">Your watchList is empty.</h3>
          <p>Add games to your watchList from the Review Details page.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-purple-500">
            <thead>
              <tr className="bg-purple-400">
                <th className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base lg:text-lg">No.</th>
                <th className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base lg:text-lg ">Game Title</th>
                <th className="border border-purple-500 px-1 py-2 text-xs sm:text-sm md:text-base lg:text-lg">Genre</th>
                <th className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base lg:text-lg">Publishing Year</th>
                <th className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base lg:text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchList.map((game, index) => (
                <tr key={game._id} className="text-center bg-purple-100">
                  <td className="border border-purple-500  py-2 text-xs sm:text-sm md:text-base  ">{index + 1}</td>
                  <td className="border border-purple-500  py-2 text-xs sm:text-sm md:text-base ">{game.gameTitle}</td>
                  <td className="border border-purple-500  py-2 text-xs sm:text-sm md:text-base  ">{game.genre}</td>
                  <td className="border border-purple-500  py-2 text-xs sm:text-sm md:text-base" >{game.publishingYear}</td>
                  <td className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base  ">
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
  );
};

export default GameWatchlist;
