const StatCard = ({ label, value, detail, tone }) => {
  const toneStyles = {
    info: "bg-brand-soft text-brand",
    warning: "bg-warning-soft text-warning-text",
    success: "bg-success-soft text-success",
    danger: "bg-danger-soft text-danger-text",
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm text-text-secondary">{label}</span>
        <span
          className={`rounded-full px-2 py-1 text-[10px] font-semibold ${toneStyles[tone]}`}>
          {detail}
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold text-foreground">{value}</p>
    </div>
  );
};

export default StatCard;
