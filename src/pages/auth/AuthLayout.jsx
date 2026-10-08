import { useLocation } from "react-router-dom";

const AuthLayout = ({ children, title, description, Icon }) => {
  const urlParams = useLocation();
  const pathName = urlParams.pathname;
  return (
    <div className="flex items-center justify-center bg-canvas font-['Outfit',_sans-serif] p-6">
      <div className="w-full max-w-xl bg-surface rounded-[2rem] border border-border shadow-2xl shadow-auth p-5 z-10">
        <div className="flex flex-col items-center mb-4">
          {pathName === "/login" ? (
            <h1 className="text-xl font-bold py-2.5 px-3 mb-1 rounded-xl bg-brand-avatar text-brand">
              MIT
            </h1>
          ) : (
            <div className="w-14 h-14 bg-success rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-success">
              <Icon className="text-text-on-brand" size={28} />
            </div>
          )}
          <h3 className="text-2xl font-bold text-text-primary">{title} </h3>
          <p className="text-text-secondary text-sm mt-2 text-center">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
