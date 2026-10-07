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

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useAppData();

  const project = projects?.find((item) => item.id === id);

  const formatMoney = (amount) => `UGX ${+amount}`;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1500px]">
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#295C9B] transition hover:text-[#1d4778]">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </button>

            <div className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.035)]">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF4FB]">
                      <Building2 className="h-7 w-7 text-[#295C9B]" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-2xl font-bold text-[#102A43]">
                          {project.name}
                        </h1>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold capitalize`}>
                          {project.status}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {project.location}
                      </div>
                    </div>
                  </div>

                  <button className="cursor-pointer rounded-xl text-[#295C9B] px-4 py-2.5 text-sm font-semibold  shadow-sm">
                    Update project status
                  </button>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#295C9B]" />

                    <h2 className="text-sm font-bold text-[#102A43]">
                      Project Description
                    </h2>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.035)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Project Progress
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#102A43]">
                      {project.progress}%
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FB]">
                    <CheckCircle2 className="h-6 w-6 text-[#295C9B]" />
                  </div>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#295C9B] to-[#4C82BC] transition-all duration-500"
                    style={{
                      width: `${project.progress || 0}%`,
                    }}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.035)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Project Budget
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#102A43]">
                      {formatMoney(project.budget)}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FB]">
                    <CircleDollarSign className="h-6 w-6 text-[#295C9B]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.035)]">
              <div className="border-b border-slate-100 p-6">
                <h2 className="text-base font-bold text-[#102A43]">
                  Project Information
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Important dates and project metadata
                </p>
              </div>

              <div className="grid gap-px bg-slate-100 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF4FB]">
                      <CalendarDays className="h-4 w-4 text-[#295C9B]" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                        Start Date
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#102A43]">
                        {formatDate(project.startDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF4FB]">
                      <Clock3 className="h-4 w-4 text-[#295C9B]" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                        Expected End Date
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#102A43]">
                        {formatDate(project.expectedEndDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF4FB]">
                      <MapPin className="h-4 w-4 text-[#295C9B]" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                        Location
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#102A43]">
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
