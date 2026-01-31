import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subtext?: string;
  variant?: 'default' | 'earning' | 'spending';
}

export function StatCard({ icon, label, value, subtext, variant = 'default' }: StatCardProps) {
  const variantColors = {
    default: 'bg-[#2A3B4D]',
    earning: 'bg-[#2A3B4D] border-2 border-[#4ECDC4]',
    spending: 'bg-[#2A3B4D] border-2 border-[#FF8C42]'
  };

  return (
    <div className={`${variantColors[variant]} rounded-2xl p-6`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[#F4A259]">
          {icon}
        </div>
        <span className="text-[#D4CFC4] text-sm">{label}</span>
      </div>
      <div className="text-[#F9F6F0] text-3xl font-semibold mb-1">
        {value}
      </div>
      {subtext && (
        <div className="text-[#D4CFC4] text-sm">
          {subtext}
        </div>
      )}
    </div>
  );
}
