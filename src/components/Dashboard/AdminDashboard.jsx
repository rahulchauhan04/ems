import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
