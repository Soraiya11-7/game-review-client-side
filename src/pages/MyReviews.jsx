import React, { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { AiFillDelete } from "react-icons/ai"; // Importing a delete icon from react-icons
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthProviderContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-10-server-gamma-mocha.vercel.app/reviews/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyReviews(data))
        .catch((error) => console.error("Error fetching reviews:", error));
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
        fetch(`https://assignment-10-server-gamma-mocha.vercel.app/review/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success"
              });
              const remaining = myReviews.filter(review => review._id !== _id);
              setMyReviews(remaining);
            }
          })
      }
    });
  };

  return (
    <div className="w-[80%] mx-auto py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">My Review List</h2>
      {myReviews.length === 0 ? (
        <div className="text-center">
          <h3 className="text-xl text-gray-500">Your Review is empty.</h3>
          <p>Add review from the Add Review  page.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-purple-500">
            <thead>
              <tr className="bg-purple-400">
                <th className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base lg:text-lg">No.</th>
                <th className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base lg:text-lg ">Game Title</th>
                <th className="border border-purple-500 px-1 py-2 text-xs sm:text-sm md:text-base lg:text-lg">Genre</th>
                <th className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base lg:text-lg">Review Details</th>
                <th className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base lg:text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((review, index) => (
                <tr key={review._id} className="text-center bg-gray-200">
                  <td className="border border-purple-500  py-2 text-xs sm:text-sm md:text-base  ">{index + 1}</td>
                  <td className="border border-purple-500  py-2 text-xs sm:text-sm md:text-base ">{review.gameTitle}</td>
                  <td className="border border-purple-500  py-2 text-xs sm:text-sm md:text-base  ">{review.genre} </td>
                  <td className="border border-purple-500  py-2 text-xs sm:text-sm md:text-base" >{review.details}</td>
                  <td className="border border-purple-500 py-2 text-xs sm:text-sm md:text-base  ">
                    <div className="flex justify-center items-center gap-2 md:gap-4">
                      <button
                        onClick={() => handleDelete(review._id)}
                        className=" text-center text-red-600 rounded-full transition-all duration-300 "
                      >
                        <AiFillDelete className="text-center" size={20} />
                        
                      </button>
                      <button
                        onClick={() => navigate(`/updateReview/${review._id}`)}
                        className="text-center text-purple-950 rounded-full "
                      >
                        <FaEdit className="text-lg" />
                      </button>
                    </div>
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

export default MyReviews;
