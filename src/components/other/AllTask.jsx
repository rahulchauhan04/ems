import React from "react";

const AllTask = () => {
  return (
    <div className="bg-gray-800/80 p-5 rounded-xl mt-5 shadow-lg h-48 overflow-auto">
      {/* Task 1 */}
      <div className="bg-gray-700 mb-2 py-3 px-4 flex justify-between items-center rounded-lg text-gray-300 hover:bg-gray-600 transition duration-200">
        <h2 className="font-semibold">Rahul</h2>
        <h3 className="text-sm">Make a UI Design</h3>
        <h5 className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">Pending</h5>
      </div>

      {/* Task 2 */}
      <div className="bg-gray-700 mb-2 py-3 px-4 flex justify-between items-center rounded-lg text-gray-300 hover:bg-gray-600 transition duration-200">
        <h2 className="font-semibold">Naina</h2>
        <h3 className="text-sm">Start creating folder setup</h3>
        <h5 className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Completed</h5>
      </div>

      {/* Task 3 */}
      <div className="bg-gray-700 mb-2 py-3 px-4 flex justify-between items-center rounded-lg text-gray-300 hover:bg-gray-600 transition duration-200">
        <h2 className="font-semibold">Astonkonishkov</h2>
        <h3 className="text-sm">Make system design</h3>
        <h5 className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">In Progress</h5>
      </div>

      {/* Task 4 */}
      <div className="bg-gray-700 mb-2 py-3 px-4 flex justify-between items-center rounded-lg text-gray-300 hover:bg-gray-600 transition duration-200">
        <h2 className="font-semibold">Susiya</h2>
        <h3 className="text-sm">Connect Database</h3>
        <h5 className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Review</h5>
      </div>

      {/* Task 5 */}
      <div className="bg-gray-700 py-3 px-4 flex justify-between items-center rounded-lg text-gray-300 hover:bg-gray-600 transition duration-200">
        <h2 className="font-semibold">Merry</h2>
        <h3 className="text-sm">Design Frontend</h3>
        <h5 className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">Waiting</h5>
      </div>
    </div>
  );
};

export default AllTask;
