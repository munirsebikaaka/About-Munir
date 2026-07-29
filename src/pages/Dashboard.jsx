import DashboardCards from "../components/dashboard/DashboardCards";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const Dashboard = () => {
  return (
    <div className="h-screen bg-cyan-50 pt-[1rem] px-[1rem]">
      <DashboardHeader />
      <DashboardCards />
    </div>
  );
};
export default Dashboard;
