import React from "react";
import Header from "../other/Header";
import TaskListsNumbers from "../other/TaskListsNumbers";

const EmployeeDashboard = () => {
  return (
     <div className="p-10 bg-[#1c1c1c] h-screen">
          <Header />
          <TaskListsNumbers />
     </div>
  );
};

export default EmployeeDashboard;
