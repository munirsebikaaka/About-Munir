import HeaderBar from "../components/layout/HeaderBar";
import Sidebar from "../components/layout/Sidebar";
import StatCard from "../components/dashboard/StatCard";
import ProjectsHealth from "../components/dashboard/ProjectsHealth";
import { useMemo } from "react";
import { useAppData } from "../context/useAppData";

const OwnerDashboard = () => {
  const { projects } = useAppData();

  const activeProjects = useMemo(() => {
    return projects?.filter((project) => project.status === "active");
  }, [projects]);

  const completedProjects = useMemo(() => {
    return projects?.filter((project) => project.status === "completed");
  }, [projects]);

  const atRiskProjects = useMemo(() => {
    return projects?.filter((project) => project.status === "atRisk");
  }, [projects]);

  return (
    <div className="flex min-h-screen bg-[#F6F9FB] text-[#0E0E11] ">
      <Sidebar />

      <main className="flex-1 p-6 md:p-6">
        <HeaderBar title="Dashboard" subtitle="Overview of company projects" />

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Active Projects"
            value={"" + activeProjects.length}
            detail="Live"
            tone="info"
          />
          <StatCard
            label="In Progress"
            value={"" + activeProjects.length}
            detail="Ongoing"
            tone="info"
          />
          <StatCard
            label="Completed"
            value={"" + completedProjects.length}
            detail="Done"
            tone="success"
          />
          <StatCard
            label="Projects At Risk"
            value={"" + atRiskProjects.length}
            detail="Watch"
            tone="danger"
          />
        </div>

        <div className="mt-6 flex flex-col gap-5">
          <ProjectsHealth projectList={projects} />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_1fr]"></div>
      </main>
    </div>
  );
};

export default OwnerDashboard;
