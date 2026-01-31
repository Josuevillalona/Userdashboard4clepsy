import { ReactNode } from 'react';

interface AppListItemProps {
  icon: ReactNode;
  name: string;
  time: string;
  type: 'vice' | 'productive';
}

export function AppListItem({ icon, name, time, type }: AppListItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#2A3B4D] rounded-xl">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
          type === 'vice' ? 'bg-[#FF8C42]/20 text-[#FF8C42]' : 'bg-[#4ECDC4]/20 text-[#4ECDC4]'
        }`}>
          {icon}
        </div>
        <div>
          <div className="text-[#F9F6F0] font-medium">{name}</div>
          <div className="text-[#D4CFC4] text-sm">{time}</div>
        </div>
      </div>
      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
        type === 'vice' 
          ? 'bg-[#FF8C42]/20 text-[#FF8C42]' 
          : 'bg-[#4ECDC4]/20 text-[#4ECDC4]'
      }`}>
        {type === 'vice' ? 'Vice' : 'Productive'}
      </div>
    </div>
  );
}
