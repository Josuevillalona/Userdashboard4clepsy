import { ClepsyCharacter } from '@/app/components/ClepsyCharacter';
import { StatCard } from '@/app/components/StatCard';
import { AppListItem } from '@/app/components/AppListItem';
import { AchievementBadge } from '@/app/components/AchievementBadge';
import { 
  Clock, 
  TrendingUp, 
  Instagram,
  BookOpen,
  Copy,
  Check
} from 'lucide-react';
import { useState } from 'react';

export function DesignSystem() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: 'Midnight Blue', hex: '#1E2A3A', usage: 'Primary background', var: 'clepsyMidnight' },
    { name: 'Surface', hex: '#2A3B4D', usage: 'Cards, elevated elements', var: 'clepsySurface' },
    { name: 'Sand Gold', hex: '#F4A259', usage: 'Primary accent, CTAs, earned time', var: 'clepsyGold' },
    { name: 'Hourglass Brown', hex: '#8B6F47', usage: 'Character frame, warm accents', var: 'clepsyBrown' },
    { name: 'Accent Teal', hex: '#4ECDC4', usage: 'Success states, earning', var: 'clepsyTeal' },
    { name: 'Warning Orange', hex: '#FF8C42', usage: 'Spending, low balance', var: 'clepsyOrange' },
    { name: 'Text Primary', hex: '#F9F6F0', usage: 'Primary text', var: 'textPrimary' },
    { name: 'Text Secondary', hex: '#D4CFC4', usage: 'Secondary text, labels', var: 'textSecondary' },
  ];

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1E2A3A] text-[#F9F6F0]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F4A259] to-[#FF8C42] px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">CLEPSY Design System</h1>
          <p className="text-xl text-white/90">
            Strategic Brand Document • iOS Visual Design System • v1.0
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Brand Purpose */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Brand Purpose</h2>
          <div className="bg-[#2A3B4D] rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-[#FF8C42] font-semibold mb-2">THE PROBLEM</div>
                <p className="text-[#D4CFC4]">
                  Gen Z/Millennials opening TikTok/Instagram on autopilot, losing 3.5+ hours/week to doomscrolling
                </p>
              </div>
              <div>
                <div className="text-[#F4A259] font-semibold mb-2">OUR SOLUTION</div>
                <p className="text-[#D4CFC4]">
                  iOS-enforced time-trading—earn productive time, unlock vice apps with earned time
                </p>
              </div>
              <div>
                <div className="text-[#4ECDC4] font-semibold mb-2">THE OUTCOME</div>
                <p className="text-[#D4CFC4]">
                  Break autopilot habit, transform leisure from shame to earned reward
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Color System</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((color) => (
              <div key={color.hex} className="bg-[#2A3B4D] rounded-2xl p-6">
                <div 
                  className="w-full h-24 rounded-xl mb-4 border-2 border-[#1E2A3A]"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="font-semibold mb-2">{color.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-sm text-[#4ECDC4] bg-[#1E2A3A] px-2 py-1 rounded">
                    {color.hex}
                  </code>
                  <button
                    onClick={() => copyToClipboard(color.hex, color.name)}
                    className="p-1 hover:bg-[#1E2A3A] rounded transition-colors"
                  >
                    {copiedColor === color.name ? (
                      <Check className="w-4 h-4 text-[#4ECDC4]" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#D4CFC4]" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-[#D4CFC4] mb-2">{color.usage}</p>
                <code className="text-xs text-[#F4A259]">{color.var}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Typography System</h2>
          <div className="bg-[#2A3B4D] rounded-2xl p-8 space-y-6">
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Large Title • SF Pro Display • 34pt Bold</div>
              <div className="text-4xl font-bold">Dashboard</div>
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Heading 1 • SF Pro Display • 28pt Semibold</div>
              <div className="text-3xl font-semibold">Today's Stats</div>
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Heading 2 • SF Pro Display • 22pt Semibold</div>
              <div className="text-2xl font-semibold">Vice Apps</div>
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Body Text • SF Pro Text • 17pt Regular</div>
              <div className="text-base">You've earned 38 minutes today. Keep it up!</div>
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Button/CTA • SF Pro Rounded • 17pt Semibold</div>
              <button className="bg-[#F4A259] text-[#1E2A3A] px-6 py-3 rounded-full font-semibold">
                Earn More Time
              </button>
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Metadata • SF Pro Text • 15pt Regular</div>
              <div className="text-sm text-[#D4CFC4]">From 3 apps</div>
            </div>
          </div>
        </section>

        {/* Spacing System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Spacing System (8pt Grid)</h2>
          <div className="bg-[#2A3B4D] rounded-2xl p-8">
            <div className="space-y-4">
              {[
                { size: '8pt', class: 'space-1', usage: 'Tight spacing, inline elements' },
                { size: '16pt', class: 'space-2', usage: 'Standard spacing between elements' },
                { size: '24pt', class: 'space-3', usage: 'Section spacing, card padding' },
                { size: '32pt', class: 'space-4', usage: 'Large spacing, screen margins' },
                { size: '40pt', class: 'space-5', usage: 'Extra large spacing' },
                { size: '48pt', class: 'space-6', usage: 'Maximum spacing, sections' },
              ].map(({ size, usage }) => (
                <div key={size} className="flex items-center gap-4">
                  <div 
                    className="bg-[#F4A259] rounded"
                    style={{ width: size, height: '24px' }}
                  />
                  <div className="flex-1">
                    <code className="text-[#4ECDC4]">{size}</code>
                    <span className="text-[#D4CFC4] ml-4">{usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Character States */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Clepsy Character States</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#2A3B4D] rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-center">Default / Patient 😊</h3>
              <div className="flex justify-center mb-4">
                <ClepsyCharacter balance={30} maxBalance={60} state="default" size="small" />
              </div>
              <p className="text-sm text-[#D4CFC4] mb-2">
                <strong>When:</strong> Shield screens, waiting states
              </p>
              <p className="text-sm text-[#D4CFC4]">
                <strong>Copy:</strong> "Earn productivity minutes to unlock TikTok"
              </p>
            </div>
            <div className="bg-[#2A3B4D] rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-center">Encouraging 😄</h3>
              <div className="flex justify-center mb-4">
                <ClepsyCharacter balance={45} maxBalance={60} state="encouraging" size="small" />
              </div>
              <p className="text-sm text-[#D4CFC4] mb-2">
                <strong>When:</strong> Earning time, milestones
              </p>
              <p className="text-sm text-[#D4CFC4]">
                <strong>Copy:</strong> "Nice! You just earned 15 minutes. Keep it up!"
              </p>
            </div>
            <div className="bg-[#2A3B4D] rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-center">Celebrating 🎉</h3>
              <div className="flex justify-center mb-4">
                <ClepsyCharacter balance={60} maxBalance={60} state="celebrating" size="small" />
              </div>
              <p className="text-sm text-[#D4CFC4] mb-2">
                <strong>When:</strong> Achievements, streaks
              </p>
              <p className="text-sm text-[#D4CFC4]">
                <strong>Copy:</strong> "🔥 7 Day Streak! You're building a real habit here."
              </p>
            </div>
          </div>
        </section>

        {/* Components - Stat Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Stat Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Default Variant</div>
              <StatCard
                icon={<Clock className="w-6 h-6" />}
                label="Current Balance"
                value="38 min"
                variant="default"
              />
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Earning Variant (Teal Border)</div>
              <StatCard
                icon={<TrendingUp className="w-6 h-6" />}
                label="Time Earned"
                value="38 min"
                subtext="From 3 apps"
                variant="earning"
              />
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Spending Variant (Orange Border)</div>
              <StatCard
                icon={<Clock className="w-6 h-6" />}
                label="Time Spent"
                value="22 min"
                subtext="On TikTok"
                variant="spending"
              />
            </div>
          </div>
        </section>

        {/* Components - App List Items */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">App List Items</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Vice App (Orange)</div>
              <AppListItem
                icon={<Instagram className="w-6 h-6" />}
                name="Instagram"
                time="15 min today"
                type="vice"
              />
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Productive App (Teal)</div>
              <AppListItem
                icon={<BookOpen className="w-6 h-6" />}
                name="Kindle"
                time="12 min earned"
                type="productive"
              />
            </div>
          </div>
        </section>

        {/* Components - Achievement Badges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Achievement Badges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Unlocked (Gold Border)</div>
              <AchievementBadge
                icon="🏆"
                title="First Week"
                description="7 day streak"
                unlocked={true}
              />
            </div>
            <div>
              <div className="text-sm text-[#D4CFC4] mb-2">Locked (Grayscale)</div>
              <AchievementBadge
                icon="⚡"
                title="Power User"
                description="Earn 100 min in a day"
                unlocked={false}
              />
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Buttons</h2>
          <div className="bg-[#2A3B4D] rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-[#D4CFC4] mb-2">Primary CTA (Gold)</div>
                <button className="bg-[#F4A259] text-[#1E2A3A] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FF8C42] transition-colors">
                  Earn More Time
                </button>
              </div>
              <div>
                <div className="text-sm text-[#D4CFC4] mb-2">Success Button (Teal)</div>
                <button className="bg-[#4ECDC4] text-[#1E2A3A] px-8 py-4 rounded-full font-semibold text-lg hover:brightness-110 transition-all">
                  Continue Streak
                </button>
              </div>
              <div>
                <div className="text-sm text-[#D4CFC4] mb-2">Secondary Button (Surface)</div>
                <button className="bg-[#2A3B4D] text-[#F9F6F0] border-2 border-[#F4A259] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1E2A3A] transition-colors">
                  View Stats
                </button>
              </div>
              <div>
                <div className="text-sm text-[#D4CFC4] mb-2">Text Button</div>
                <button className="text-[#F4A259] px-6 py-3 rounded-full font-semibold hover:bg-[#F4A259]/10 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Voice & Tone */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Voice & Tone Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#4ECDC4]/20 border-2 border-[#4ECDC4] rounded-2xl p-6">
              <h3 className="text-[#4ECDC4] font-semibold text-xl mb-4">✓ We Sound Like</h3>
              <ul className="space-y-2 text-[#F9F6F0]">
                <li>• Encouraging</li>
                <li>• Direct</li>
                <li>• Honest</li>
                <li>• Empathetic</li>
                <li>• Patient</li>
                <li>• Celebrating wins</li>
                <li>• "We're doing this together"</li>
              </ul>
            </div>
            <div className="bg-[#FF8C42]/20 border-2 border-[#FF8C42] rounded-2xl p-6">
              <h3 className="text-[#FF8C42] font-semibold text-xl mb-4">✗ We Don't Sound Like</h3>
              <ul className="space-y-2 text-[#F9F6F0]">
                <li>• Shaming</li>
                <li>• Guilt-tripping</li>
                <li>• Preachy</li>
                <li>• Condescending</li>
                <li>• Therapy-speak</li>
                <li>• Overly cute/childish</li>
                <li>• "You failed again"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Copy Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Copy Examples by Context</h2>
          <div className="space-y-4">
            {[
              {
                context: 'Shield Screen',
                userState: 'Frustrated, blocked',
                copy: 'Earn productivity minutes to unlock TikTok',
                why: 'Direct, shows exact need, no shame'
              },
              {
                context: 'Milestone',
                userState: 'Needs reinforcement',
                copy: 'Nice! You just earned 15 minutes. Keep it up!',
                why: 'Celebrates without patronizing'
              },
              {
                context: 'Low Balance',
                userState: 'Needs gentle warning',
                copy: 'Heads up: 5 minutes left. Wrap up soon, or earn more.',
                why: 'Gentle, offers solution, respects autonomy'
              },
              {
                context: 'Unlock Success',
                userState: 'Claiming reward',
                copy: "✓ TikTok unlocked! You've earned this. Enjoy your 23 minutes.",
                why: 'Affirms earning, guilt-free permission'
              },
              {
                context: 'Achievement',
                userState: 'Pride, accomplishment',
                copy: "🔥 7 Day Streak! You're building a real habit here.",
                why: 'Names achievement, genuine celebration'
              }
            ].map(({ context, userState, copy, why }) => (
              <div key={context} className="bg-[#2A3B4D] rounded-2xl p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-[#F4A259] text-sm font-semibold mb-1">Context</div>
                    <div className="text-[#F9F6F0]">{context}</div>
                  </div>
                  <div>
                    <div className="text-[#F4A259] text-sm font-semibold mb-1">User State</div>
                    <div className="text-[#D4CFC4]">{userState}</div>
                  </div>
                  <div>
                    <div className="text-[#F4A259] text-sm font-semibold mb-1">Copy Example</div>
                    <div className="text-[#F9F6F0]">"{copy}"</div>
                  </div>
                  <div>
                    <div className="text-[#F4A259] text-sm font-semibold mb-1">Why It Works</div>
                    <div className="text-[#D4CFC4] text-sm">{why}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Animation Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Animation Guidelines</h2>
          <div className="bg-[#2A3B4D] rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-[#F4A259]">Principles</h3>
                <ul className="space-y-2 text-[#D4CFC4]">
                  <li>• Use iOS spring curves for natural feel</li>
                  <li>• Keep animations under 0.4s (feels responsive)</li>
                  <li>• Character float: 3-4s loop, subtle (10pt movement)</li>
                  <li>• Button interactions: 0.2s spring</li>
                  <li>• Sheet presentations: 0.3s ease-in-out</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-[#F4A259]">Touch Targets (iOS HIG)</h3>
                <ul className="space-y-2 text-[#D4CFC4]">
                  <li>• Minimum: 44pt × 44pt</li>
                  <li>• Primary CTAs: 48pt height minimum</li>
                  <li>• Icons: 24pt × 24pt with 44pt tap area</li>
                  <li>• List items: 48pt minimum height</li>
                  <li>• Spacing between tappable: 8pt minimum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-12 border-t border-[#2A3B4D]">
          <p className="text-[#D4CFC4]">
            CLEPSY Design System • Version 1.0 • January 2026
          </p>
          <p className="text-[#D4CFC4] text-sm mt-2">
            Strategic Brand Document for iOS Product Development
          </p>
        </div>
      </div>
    </div>
  );
}