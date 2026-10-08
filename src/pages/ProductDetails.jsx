import {
  ArrowLeft,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileText,
  MapPin,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import { useAppData } from "../context/useAppData";
import Error from "../components/Error";
import LoadingPage from "../components/LoadingPage";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, error, loading } = useAppData();

  const project = projects?.find((item) => item.id === id);

  const formatMoney = (amount) => `UGX ${+amount}`;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-canvas">
        <div className="flex min-h-screen flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 p-4 md:p-6">
            <Error error={error} />
            {loading ? (
              <LoadingPage data="project" />
            ) : (
              !error && (
                <p className="mt-8 text-center text-text-secondary">
                  Project not found.
                </p>
              )
            )}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas">
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1500px]">
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="mb-6 flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-hover">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </button>

            <div className="rounded-2xl border border-border bg-surface shadow-card">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-tint">
                      <Building2 className="h-7 w-7 text-brand" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-2xl font-bold text-text-primary">
                          {project.name}
                        </h1>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold capitalize`}>
                          {project.status}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-sm text-text-secondary">
                        <MapPin className="h-4 w-4 text-text-faint" />
                        {project.location}
                      </div>
                    </div>
                  </div>

                  <button className="cursor-pointer rounded-xl text-brand px-4 py-2.5 text-sm font-semibold  shadow-sm">
                    Update project status
                  </button>
                </div>

                <div className="mt-8 border-t border-border-subtle pt-6">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-brand" />

                    <h2 className="text-sm font-bold text-text-primary">
                      Project Description
                    </h2>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-text-faint">
                      Project Progress
                    </p>

                    <p className="mt-2 text-3xl font-bold text-text-primary">
                      {project.progress}%
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint">
                    <CheckCircle2 className="h-6 w-6 text-brand" />
                  </div>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-surface-subtle">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand to-brand-gradient transition-all duration-500"
                    style={{
                      width: `${project.progress || 0}%`,
                    }}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-text-faint">
                      Project Budget
                    </p>

                    <p className="mt-2 text-2xl font-bold text-text-primary">
                      {formatMoney(project.budget)}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint">
                    <CircleDollarSign className="h-6 w-6 text-brand" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-surface shadow-card">
              <div className="border-b border-border-subtle p-6">
                <h2 className="text-base font-bold text-text-primary">
                  Project Information
                </h2>

                <p className="mt-1 text-xs text-text-faint">
                  Important dates and project metadata
                </p>
              </div>

              <div className="grid gap-px bg-surface-subtle sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint">
                      <CalendarDays className="h-4 w-4 text-brand" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-text-faint">
                        Start Date
                      </p>

                      <p className="mt-1 text-sm font-semibold text-text-primary">
                        {formatDate(project.startDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint">
                      <Clock3 className="h-4 w-4 text-brand" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-text-faint">
                        Expected End Date
                      </p>

                      <p className="mt-1 text-sm font-semibold text-text-primary">
                        {formatDate(project.expectedEndDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint">
                      <MapPin className="h-4 w-4 text-brand" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-text-faint">
                        Location
                      </p>

                      <p className="mt-1 text-sm font-semibold text-text-primary">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetails;
