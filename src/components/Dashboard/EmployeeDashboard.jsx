import Header from "../other/Header";
import TaskListsNumbers from "../other/TaskListsNumbers";
import TaskLilst from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
     <div className="p-10 bg-[#1c1c1c] h-screen">
          <Header />
          <TaskListsNumbers />
          <TaskLilst />
     </div>
  );
};

export default EmployeeDashboard;
