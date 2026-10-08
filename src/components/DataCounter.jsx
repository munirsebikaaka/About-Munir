import { useLocation } from "react-router-dom";

const DataCounter = ({ loading, data }) => {
  const urlParams = useLocation();
  const pathName = urlParams.pathname;
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h2 className="text-base font-bold tracking-tight text-text-primary">
          {pathName === "/people" ? "Team directory" : "Your projects"}
        </h2>

        <p className="mt-0.5 text-xs text-text-secondary">
          {pathName === "/people"
            ? "Your registered staff and project worker"
            : "Overview of your registered construction sites"}
        </p>
      </div>

      {!loading && data.length > 0 && (
        <span className="rounded-full bg-surface-subtle px-3 py-1 text-xs font-medium text-text-secondary">
          {data.length}
          {data.length === 1 ? "project" : "projects"}
        </span>
      )}
    </div>
  );
};
export default DataCounter;
