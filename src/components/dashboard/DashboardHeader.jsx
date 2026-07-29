const DashboardHeader = () => {
  const mainStyles = "flex justify-between items-center";
  const inputStyles =
    "border border-gray-200/60 px-[1rem] py-[0.2rem] rounded-sm focus:outline-none";
  return (
    <div
      className={`${mainStyles} bg-white px-[0.6rem] py-[0.2rem] border border-gray-200/60 rounded-lg`}>
      <div>
        <h1 className="">Projects</h1>
        <p className="text-sm">Manage and monitor all projects</p>
      </div>
      <div className={`${mainStyles} gap-[2rem]`}>
        <input className={inputStyles} type="text" placeholder="search" />
        <div className={`${mainStyles} gap-[0.7rem]`}>
          <p>MS</p>
          <div>
            <h2>Munir</h2>
            <p className="text-sm">munirsebikaaka@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;
