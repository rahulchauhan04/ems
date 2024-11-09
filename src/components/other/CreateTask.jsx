import React from "react";

const CreateTask = () => {
  return (
    <div className="bg-gray-800/80 p-6 rounded-xl shadow-lg">
      <form className="flex flex-wrap w-full space-y-6 md:flex-nowrap">
        {/* Left Column */}
        <div className="w-full md:w-1/2 pr-4 space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-1">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="w-full p-3 rounded-lg bg-gray-700/70 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-1">Date</h3>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-gray-700/70 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-1">Assign to</h3>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full p-3 rounded-lg bg-gray-700/70 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-1">Category</h3>
            <input
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full p-3 rounded-lg bg-gray-700/70 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 pl-4 space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-1">Description</h3>
            <textarea
              placeholder="Describe the task here..."
              className="w-full p-3 rounded-lg bg-gray-700/70 text-gray-100 placeholder-gray-400 h-40 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-2xl"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
