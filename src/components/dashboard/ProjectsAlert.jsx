import { ArrowUpRight } from "lucide-react";
import { statusStyles } from "../../ui/GlobalVariebles";

const ProjectsAlert = ({ projects }) => {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
      <section className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#0E0E11]">
              Projects requiring attention
            </h2>
            <p className="text-sm text-[#4B4047]">
              They might be a risk or having any other issues
            </p>
          </div>
          <button className="rounded-xl bg-[#295C9B] px-3 py-2 text-sm font-medium text-white">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {projects?.length === 0 ? (
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FBFD] p-4 text-sm text-[#4B4047]">
              No active project alerts right now.
            </div>
          ) : (
            projects?.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-[#E5E7EB] bg-[#F9FBFD] p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-[#0E0E11]">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#4B4047]">{project.location}</p>
                  </div>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[project.health]}`}>
                    {project.health}
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-[#7E7B86]">
                      Progress
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#0E0E11]">
                      {project.progress}%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-[#7E7B86]">
                      Expected
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#0E0E11]">
                      {project.expectedProgress}%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-[#7E7B86]">
                      Budget used
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#0E0E11]">
                      {project.budget ? "Budget set" : "0%"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-[#4B4047]">
                    Deadline: {project.expectedEndDate}
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-xl border border-[#D7E3F8] bg-[#EEF5FF] px-3 py-2 text-sm font-medium text-[#295C9B]">
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};
export default ProjectsAlert;
