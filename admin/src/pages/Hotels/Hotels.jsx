import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Hotels = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
        </div>
        <div className="listContainer">
          <div className="listTitle">Hotels Latest Activity</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
