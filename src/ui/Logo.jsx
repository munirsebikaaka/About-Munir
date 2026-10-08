const Logo = () => {
  return (
    <div className="flex items-center gap-3 px-2 pb-6 border-b border-border-subtle">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-avatar text-brand">
        MIT
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground"> Munir InfraTech</p>
        <p className="text-[11px] text-text-secondary"> Construction Management</p>
      </div>
    </div>
  );
};
export default Logo;
