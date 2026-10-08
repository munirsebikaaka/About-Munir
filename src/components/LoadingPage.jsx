import Loader from "../ui/Loader";

const LoadingPage = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-1 flex-col mt-[6rem] z-10">
      <div className="relative">
        <Loader />
      </div>
      <p className="text-text-faint font-medium animate-pulse">
        Fetching {data}...
      </p>
    </div>
  );
};

export default LoadingPage;
