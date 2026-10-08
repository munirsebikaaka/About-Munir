import { ArrowUpRight } from "lucide-react";
import { statusStyles } from "../../ui/GlobalVariebles";

const ProjectsAlert = ({ projects }) => {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
      <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Projects requiring attention
            </h2>
            <p className="text-sm text-text-secondary">
              They might be a risk or having any other issues
            </p>
          </div>
          <button className="rounded-xl bg-brand px-3 py-2 text-sm font-medium text-text-on-brand">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {projects?.length === 0 ? (
            <div className="rounded-2xl border border-border bg-surface-subtle p-4 text-sm text-text-secondary">
              No active project alerts right now.
            </div>
          ) : (
            projects?.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-border bg-surface-subtle p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="text-sm text-text-secondary">{project.location}</p>
                  </div>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[project.health]}`}>
                    {project.health}
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-text-muted">
                      Progress
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {project.progress}%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-text-muted">
                      Expected
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {project.expectedProgress}%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-text-muted">
                      Budget used
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {project.budget ? "Budget set" : "0%"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-text-secondary">
                    Deadline: {project.expectedEndDate}
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-xl border border-brand-border bg-brand-soft px-3 py-2 text-sm font-medium text-brand">
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
