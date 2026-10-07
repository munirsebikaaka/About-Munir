import { TriangleAlert } from "lucide-react";

const Error = ({ error }) => {
  return (
    <>
      {error && (
        <div className="flex items-center justify-center mt-4 gap-2 rounded-xl bg-red-50 p-1.5 text-sm text-red-700">
          <TriangleAlert className="h-5 w-5 flex-shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}
    </>
  );
};
export default Error;
