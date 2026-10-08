import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../components/layout/HeaderBar";
import Sidebar from "../components/layout/Sidebar";
import { useAppData } from "../context/useAppData";
import NoDataPge from "../components/NoDataPage";
import DataCounter from "../components/DataCounter";
import LoadingPage from "../components/LoadingPage";
import Error from "../components/Error";

const Projects = () => {
  const { projects, loading, error } = useAppData();
  const navigate = useNavigate();

  const handleViewProjectDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
    console.log(projectId);
  };

  return (
    <div className="min-h-screen bg-canvas">
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1500px]">
            <HeaderBar
              title="Projects"
              subtitle="Manage and monitor all construction projects"
            />

            <div className="mt-8">
              <Error error={error} />
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
                        className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-card-hover">
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint">
                                <Building2 className="h-5 w-5 text-brand" />
                              </div>

                              <h3 className="text-[17px] font-bold text-text-primary">
                                {project.name}
                              </h3>
                            </div>

                            <span className="rounded-full bg-surface-subtle px-2.5 py-1 text-[10px] font-bold capitalize text-text-secondary ring-1 ring-border">
                              {project.status}
                            </span>
                          </div>

                          <div className="mt-1 flex items-center gap-1.5 text-xs text-text-secondary">
                            <MapPin className="h-3.5 w-3.5 text-text-faint" />
                            <span>{project.location}</span>
                          </div>

                          <div className="p-3 pt-5">
                            <p className="text-[9px] font-bold uppercase text-text-faint">
                              Budget
                            </p>

                            <p className="mt-1 truncate text-sm font-bold text-text-primary">
                              UGX {+project.budget}
                            </p>
                          </div>

                          <div className="mt-5">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-[11px] font-medium text-text-secondary">
                                Project progress
                              </span>

                              <span className="text-[11px] font-bold text-brand">
                                {project.progress}%
                              </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-surface-subtle">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-brand to-brand-gradient transition-all duration-500"
                                style={{
                                  width: `${project.progress}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-4">
                            <span className="text-[11px] font-medium text-text-faint">
                              View project details
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                handleViewProjectDetails(project.id)
                              }
                              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-border text-text-faint transition-all duration-200 hover:border-brand/20 hover:bg-brand-tint hover:text-brand">
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
