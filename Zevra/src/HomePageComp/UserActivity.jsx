import React, { useState } from 'react';

const UserActivity = () => {
  // Sample Data (This could come from an API)
  const rides = [
    {
      id: 1,
      pickupLocation: 'Main St, City Center',
      dropLocation: 'Central Park',
      date: '2025-05-09',
      status: 'Completed',
      driverRating: 4.5,
      riderRating: 5,
      driverReview: 'Great customer, very friendly!',
      riderReview: 'The ride was smooth, and the driver was very polite.',
    },
    {
      id: 2,
      pickupLocation: 'Downtown, Building 22',
      dropLocation: 'Airport Terminal 3',
      date: '2025-05-08',
      status: 'Completed',
      driverRating: 4.7,
      riderRating: 4.8,
      driverReview: 'Very prompt and respectful.',
      riderReview: 'Comfortable ride, just a little late.',
    },
    {
      id: 3,
      pickupLocation: '5th Avenue, Hotel XYZ',
      dropLocation: 'Museum of Modern Art',
      date: '2025-05-07',
      status: 'Cancelled',
      driverRating: 0,
      riderRating: 0,
      driverReview: 'Cancelled due to personal reasons.',
      riderReview: 'Unfortunately, I had to cancel the ride.',
    },
  ];

  // State to manage visibility of the "View More" button
  const [viewMore, setViewMore] = useState(Array(rides.length).fill(false));

  // Toggle function for "View More"
  const handleViewMore = (index) => {
    const updatedViewMore = [...viewMore];
    updatedViewMore[index] = !updatedViewMore[index];
    setViewMore(updatedViewMore);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Your Recent Rides</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {rides.map((ride, index) => (
          <div
            key={ride.id}
            className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {ride.pickupLocation} &rarr; {ride.dropLocation}
                </h2>
                <p className="text-sm text-gray-500">Date: {ride.date}</p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-white font-semibold ${
                  ride.status === 'Completed' ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {ride.status}
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <div className="flex flex-col items-center">
                <p className="text-lg font-medium text-gray-600">Driver Rating</p>
                <div className="text-yellow-400">{'★'.repeat(Math.floor(ride.driverRating))}</div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg font-medium text-gray-600">Your Rating</p>
                <div className="text-yellow-400">{'★'.repeat(Math.floor(ride.riderRating))}</div>
              </div>
            </div>

            {/* Conditionally Render More Info */}
            {viewMore[index] && (
              <div className="mt-4 text-gray-600">
                <p className="font-semibold">Driver Review:</p>
                <p>{ride.driverReview}</p>

                <p className="font-semibold mt-2">Your Review:</p>
                <p>{ride.riderReview}</p>
              </div>
            )}

            <button
              onClick={() => handleViewMore(index)}
              className="mt-4 text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              {viewMore[index] ? 'View Less' : 'View More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivity;
