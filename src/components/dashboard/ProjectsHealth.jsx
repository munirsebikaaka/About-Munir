import { statusStyles } from "../../ui/GlobalVariebles";

const ProjectsHealth = ({ projectList }) => {
  return (
    <section className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#0E0E11]">Project health</h2>
        <span className="text-sm text-[#4B4047]">Overall view</span>
      </div>

      <div className="space-y-4">
        {projectList.length === 0 ? (
          <div className="rounded-xl border border-[#E5E7EB] p-4 text-sm text-[#4B4047]">
            No project data yet. Create a site to get started.
          </div>
        ) : (
          projectList.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-[#E5E7EB] p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#0E0E11]">
                    {project?.name}
                  </p>
                  <p className="text-xs text-[#4B4047]">{project?.location}</p>
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-[10px] font-semibold ${statusStyles[project?.status]}`}>
                  {project.status || 0}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#4B4047]">
                <span>Progress</span>
                <span>{project.progress || 0}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#EEF2F7]">
                <div
                  className="h-full rounded-full bg-[#295C9B]"
                  style={{ width: `${project.progress || 0}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#4B4047]">
                <span>Budget use</span>
                <span>{project.budget || "0%"}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#EEF2F7]">
                <div
                  className="h-full rounded-full bg-[#F0B54B]"
                  style={{
                    width: `${+project.progress || 0}%`,
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
export default ProjectsHealth;
