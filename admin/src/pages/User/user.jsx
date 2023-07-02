import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/tableU/user";

const Users = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
        </div>
        <div className="listContainer">
          <div className="listTitle">Users list</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Users;
