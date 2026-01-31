import { ReactNode } from 'react';

interface AchievementBadgeProps {
  icon: ReactNode;
  title: string;
  description: string;
  unlocked: boolean;
}

export function AchievementBadge({ icon, title, description, unlocked }: AchievementBadgeProps) {
  return (
    <div className={`rounded-xl p-4 ${
      unlocked ? 'bg-[#F4A259]/20 border-2 border-[#F4A259]' : 'bg-[#2A3B4D] opacity-60'
    }`}>
      <div className={`text-3xl mb-2 ${unlocked ? '' : 'grayscale opacity-40'}`}>
        {icon}
      </div>
      <div className={`font-medium mb-1 ${unlocked ? 'text-[#F4A259]' : 'text-[#D4CFC4]'}`}>
        {title}
      </div>
      <div className="text-[#D4CFC4] text-sm">
        {description}
      </div>
    </div>
  );
}
