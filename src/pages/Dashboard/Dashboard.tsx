import "./Dashboard.scss";
import SalesFunnelChart from "../../Components/DashBoard/SalesFunnelChart/SalesFunnelChart";
import LineTransactionsChart from "../../Components/DashBoard/LineTransactionsChart/LineTransactionsChart";
import DoughnutCustomersChart from "../../Components/DashBoard/DoughnutCustomersChart/DoughnutCustomersChart";
import GoalsGroup from "../../Components/DashBoard/GoalsGroup/GoalsGroup";
import Filters from "../../Components/DashBoard/Filters/Filters";
import Searchbar from "../../Components/DashBoard/Searchbar/Searchbar";
function Dashboard() {
  return (
    <div className="container-fluid d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-5">
        <Searchbar />
        <Filters />
      </div>
      <GoalsGroup />
      <div className="d-flex gap-4">
        <div className="col">
          <LineTransactionsChart />
        </div>
        <div className="col-3">
          <DoughnutCustomersChart />
        </div>
      </div>
      <div className="col-8">
        <SalesFunnelChart />
      </div>
    </div>
  );
}

export default Dashboard;
