import { Building2, Plus, Users } from "lucide-react";
import NavigateButton from "../ui/NavigateButton";
import { useLocation } from "react-router-dom";

const NoDataPge = () => {
  const urlParams = useLocation();
  const pathName = urlParams.pathname;

  return (
    <div className="flex min-h-[360px] items-center justify-center rounded-3xl bg-white">
      <div className="max-w-sm px-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FB]">
          {pathName === "/people" ? (
            <Users className="h-6 w-6 text-[#295C9B]" />
          ) : (
            <Building2 className="h-6 w-6 text-[#295C9B]" />
          )}
        </div>

        <h2 className="mt-5 text-lg font-bold text-[#102A43]">
          {pathName === "/people" ? " No team members yet" : "No projects yet"}
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {pathName === "/people"
            ? "Register your first worker or project manager to start assigning responsibilities across your sites."
            : "Create your first construction site to start tracking activities, budgets, materials and progress."}
        </p>

        <div className="mt-6 flex justify-center">
          <NavigateButton page="/register-worker">
            <span className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              {pathName === "/people"
                ? "Register first worker"
                : "Register your first site"}
            </span>
          </NavigateButton>
        </div>
      </div>
    </div>
  );
};
export default NoDataPge;
