import { Link, useLocation } from "react-router-dom";

const AuthLink = ({ start, end }) => {
  const urlParams = useLocation();
  const pathName = urlParams.pathname;
  return (
    <div className="mt-8 text-center border-t border-[#f1f5f9] pt-6">
      <p className="text-[#64748b] text-sm">
        {start} have an account?
        <Link
          to={pathName === "/login" ? "/signup" : "/login"}
          className="text-[#295C9B] font-bold hover:underline">
          Sign {end}
        </Link>
      </p>
    </div>
  );
};
export default AuthLink;
