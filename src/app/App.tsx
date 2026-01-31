import { useState } from 'react';
import { ClepsyCharacter } from '@/app/components/ClepsyCharacter';
import { StatCard } from '@/app/components/StatCard';
import { AppListItem } from '@/app/components/AppListItem';
import { AchievementBadge } from '@/app/components/AchievementBadge';
import { DesignSystem } from '@/app/components/DesignSystem';
import { 
  Clock, 
  TrendingUp, 
  Target, 
  Flame,
  Instagram,
  Youtube,
  Twitter,
  BookOpen,
  Dumbbell,
  Languages,
  Award,
  Zap,
  Trophy,
  Palette
} from 'lucide-react';

export default function App() {
  const [balance] = useState(38); // Current balance in minutes
  const maxBalance = 60; // Maximum balance
  const [characterState] = useState<'default' | 'encouraging' | 'celebrating'>('default');
  const [showDesignSystem, setShowDesignSystem] = useState(false);

  if (showDesignSystem) {
    return (
      <div>
        <button
          onClick={() => setShowDesignSystem(false)}
          className="fixed top-6 right-6 z-50 bg-[#F4A259] text-[#1E2A3A] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#FF8C42] transition-colors"
        >
          ← Back to Dashboard
        </button>
        <DesignSystem />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E2A3A] text-[#F9F6F0] pb-20">
      {/* Design System Toggle Button */}
      <button
        onClick={() => setShowDesignSystem(true)}
        className="fixed top-6 right-6 z-50 bg-[#2A3B4D] text-[#F4A259] border-2 border-[#F4A259] p-3 rounded-full shadow-lg hover:bg-[#F4A259] hover:text-[#1E2A3A] transition-colors"
        title="View Design System"
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-[#D4CFC4]">Track your time, build better habits</p>
      </div>

      {/* Clepsy Character Section */}
      <div className="px-6 mb-8">
        <div className="bg-[#2A3B4D] rounded-3xl p-8 flex flex-col items-center">
          <ClepsyCharacter 
            balance={balance} 
            maxBalance={maxBalance}
            state={characterState}
            size="large"
          />
          
          <div className="mt-6 text-center">
            <div className="text-[#D4CFC4] text-sm mb-2">Current Balance</div>
            <div className="text-5xl font-bold text-[#F4A259] mb-2">
              {balance} <span className="text-2xl">min</span>
            </div>
            <p className="text-[#D4CFC4] text-sm max-w-xs">
              You've earned {balance} minutes today. Keep it up!
            </p>
          </div>
        </div>
      </div>

      {/* Streak Badge */}
      <div className="px-6 mb-8">
        <div className="bg-gradient-to-r from-[#F4A259] to-[#FF8C42] rounded-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🔥</div>
            <div>
              <div className="text-2xl font-bold text-white">7 Day Streak!</div>
              <div className="text-white/90 text-sm">You're building a real habit here</div>
            </div>
          </div>
          <Flame className="w-8 h-8 text-white/50" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Today's Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="Time Earned"
            value="38 min"
            subtext="From 3 apps"
            variant="earning"
          />
          <StatCard
            icon={<Clock className="w-6 h-6" />}
            label="Time Spent"
            value="22 min"
            subtext="On TikTok"
            variant="spending"
          />
        </div>
      </div>

      {/* Weekly Goal */}
      <div className="px-6 mb-8">
        <div className="bg-[#2A3B4D] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-[#4ECDC4]" />
              <span className="font-semibold">Weekly Goal</span>
            </div>
            <span className="text-[#4ECDC4] font-semibold">75%</span>
          </div>
          <div className="h-3 bg-[#1E2A3A] rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#F4A259] rounded-full transition-all duration-500"
              style={{ width: '75%' }}
            />
          </div>
          <p className="text-[#D4CFC4] text-sm">
            263 of 350 minutes earned this week
          </p>
        </div>
      </div>

      {/* Vice Apps */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Vice Apps</h2>
        <div className="space-y-3">
          <AppListItem
            icon={<Instagram className="w-6 h-6" />}
            name="Instagram"
            time="15 min today"
            type="vice"
          />
          <AppListItem
            icon={<Youtube className="w-6 h-6" />}
            name="YouTube"
            time="7 min today"
            type="vice"
          />
          <AppListItem
            icon={<Twitter className="w-6 h-6" />}
            name="Twitter"
            time="0 min today"
            type="vice"
          />
        </div>
      </div>

      {/* Productive Apps */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Productive Apps</h2>
        <div className="space-y-3">
          <AppListItem
            icon={<Languages className="w-6 h-6" />}
            name="Duolingo"
            time="23 min earned"
            type="productive"
          />
          <AppListItem
            icon={<BookOpen className="w-6 h-6" />}
            name="Kindle"
            time="12 min earned"
            type="productive"
          />
          <AppListItem
            icon={<Dumbbell className="w-6 h-6" />}
            name="Nike Training"
            time="3 min earned"
            type="productive"
          />
        </div>
      </div>

      {/* Achievements */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <div className="grid grid-cols-2 gap-4">
          <AchievementBadge
            icon={<Trophy className="w-6 h-6" />}
            title="First Week"
            description="7 day streak"
            unlocked={true}
          />
          <AchievementBadge
            icon={<Zap className="w-6 h-6" />}
            title="Power User"
            description="Earn 100 min in a day"
            unlocked={false}
          />
          <AchievementBadge
            icon={<Award className="w-6 h-6" />}
            title="Balanced"
            description="Equal earn & spend"
            unlocked={true}
          />
          <AchievementBadge
            icon="🎯"
            title="Goal Crusher"
            description="Hit weekly goal 4 weeks"
            unlocked={false}
          />
        </div>
      </div>

      {/* Bottom Navigation Spacer */}
      <div className="h-20" />
    </div>
  );
}