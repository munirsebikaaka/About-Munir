import { useLocation } from "react-router-dom";

const AuthLayout = ({ children, title, description, Icon }) => {
  const urlParams = useLocation();
  const pathName = urlParams.pathname;
  return (
    <div className="flex items-center justify-center bg-[#f8fafc] font-['Outfit',_sans-serif] p-6">
      <div className="w-full max-w-xl bg-white rounded-[2rem] border border-[#e2e8f0] shadow-2xl shadow-indigo-100/50 p-5 z-10">
        <div className="flex flex-col items-center mb-4">
          {pathName === "/login" ? (
            <h1 className="text-xl font-bold py-2.5 px-3 mb-1 rounded-xl bg-[#CFE2FD] text-[#295C9B]">
              MIT
            </h1>
          ) : (
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-100">
              <Icon className="text-white" size={28} />
            </div>
          )}
          <h3 className="text-2xl font-bold text-[#0f172a]">{title} </h3>
          <p className="text-[#64748b] text-sm mt-2 text-center">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
