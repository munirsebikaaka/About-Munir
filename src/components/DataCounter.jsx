import { useLocation } from "react-router-dom";

const DataCounter = ({ loading, data }) => {
  const urlParams = useLocation();
  const pathName = urlParams.pathname;
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h2 className="text-base font-bold tracking-tight text-[#102A43]">
          {pathName === "/people" ? "Team directory" : "Your projects"}
        </h2>

        <p className="mt-0.5 text-xs text-slate-500">
          {pathName === "/people"
            ? "Your registered staff and project worker"
            : "Overview of your registered construction sites"}
        </p>
      </div>

      {!loading && data.length > 0 && (
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
          {data.length}
          {data.length === 1 ? "project" : "projects"}
        </span>
      )}
    </div>
  );
};
export default DataCounter;
