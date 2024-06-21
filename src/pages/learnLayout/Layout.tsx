import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Aside from "../../components/Aside";

const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <Aside />
      <div className="ml-72">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;
