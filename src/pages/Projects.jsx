import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../components/layout/HeaderBar";
import Sidebar from "../components/layout/Sidebar";
import { useAppData } from "../context/useAppData";
import NoDataPge from "../components/NoDataPage";
import DataCounter from "../components/DataCounter";
import LoadingPage from "../components/LoadingPage";

const Projects = () => {
  const { projects, loading } = useAppData();
  const navigate = useNavigate();

  const handleViewProjectDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
    console.log(projectId);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1500px]">
            <HeaderBar
              title="Projects"
              subtitle="Manage and monitor all construction projects"
            />

            <div className="mt-8">
              <DataCounter loading={loading} data={projects} />

              {loading ? (
                <LoadingPage data="projects" />
              ) : projects.length === 0 ? (
                <NoDataPge />
              ) : (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {projects.map((project) => {
                    return (
                      <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FB]">
                                <Building2 className="h-5 w-5 text-[#295C9B]" />
                              </div>

                              <h3 className="text-[17px] font-bold text-[#102A43]">
                                {project.name}
                              </h3>
                            </div>

                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold capitalize text-slate-600 ring-1 ring-slate-200">
                              {project.status}
                            </span>
                          </div>

                          <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                            <span>{project.location}</span>
                          </div>

                          <div className="p-3 pt-5">
                            <p className="text-[9px] font-bold uppercase text-slate-400">
                              Budget
                            </p>

                            <p className="mt-1 truncate text-sm font-bold text-[#102A43]">
                              UGX {+project.budget}
                            </p>
                          </div>

                          <div className="mt-5">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-[11px] font-medium text-slate-500">
                                Project progress
                              </span>

                              <span className="text-[11px] font-bold text-[#295C9B]">
                                {project.progress}%
                              </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-[#295C9B] to-[#4C82BC] transition-all duration-500"
                                style={{
                                  width: `${project.progress}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                            <span className="text-[11px] font-medium text-slate-400">
                              View project details
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                handleViewProjectDetails(project.id)
                              }
                              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-all duration-200 hover:border-[#295C9B]/20 hover:bg-[#EEF4FB] hover:text-[#295C9B]">
                              <ArrowUpRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
