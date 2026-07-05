import React from "react";

type StatsElementProps = {
  title: string;
  value: string;
  description: string;
  accent?: string;
  icon?: React.ReactNode;
};

const StatsElement = ({ title, value, description, accent = "from-[#2e7d32] to-[#4caf50]", icon }: StatsElementProps) => {
  return (
    <div className={`rounded-3xl bg-gradient-to-br ${accent} p-5 text-white shadow-lg shadow-black/10`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{title}</p>
          <p className="mt-3 text-3xl font-semibold">{value}</p>
        </div>
        {icon ? <div className="rounded-2xl bg-white/15 p-3 text-2xl">{icon}</div> : null}
      </div>
      <p className="mt-4 text-sm text-white/90">{description}</p>
    </div>
  );
};

export default StatsElement;
