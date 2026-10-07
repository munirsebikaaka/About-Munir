const StatCard = ({ label, value, detail, tone }) => {
  const toneStyles = {
    info: "bg-[#EEF5FF] text-[#295C9B]",
    warning: "bg-[#FFF4D9] text-[#9A5F00]",
    success: "bg-[#EAF8F1] text-[#1B6A4D]",
    danger: "bg-[#FDECEF] text-[#A93B4D]",
  };

  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm text-[#4B4047]">{label}</span>
        <span
          className={`rounded-full px-2 py-1 text-[10px] font-semibold ${toneStyles[tone]}`}>
          {detail}
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold text-[#0E0E11]">{value}</p>
    </div>
  );
};

export default StatCard;
