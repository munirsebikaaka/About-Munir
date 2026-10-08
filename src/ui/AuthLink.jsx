import { Link, useLocation } from "react-router-dom";

const AuthLink = ({ start, end }) => {
  const urlParams = useLocation();
  const pathName = urlParams.pathname;
  return (
    <div className="mt-8 text-center border-t border-border-subtle pt-6">
      <p className="text-text-secondary text-sm">
        {start} have an account?
        <Link
          to={pathName === "/login" ? "/signup" : "/login"}
          className="text-brand font-bold hover:underline">
          Sign {end}
        </Link>
      </p>
    </div>
  );
};
export default AuthLink;
