import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import clepsyImage from 'figma:asset/c69bdd58f0d1234870556daa2327121e736283dc.png';

interface ClepsyCharacterProps {
  balance: number;
  maxBalance: number;
  state?: 'default' | 'encouraging' | 'celebrating';
  size?: 'small' | 'medium' | 'large';
}

export function ClepsyCharacter({ 
  balance, 
  maxBalance, 
  state = 'default',
  size = 'large' 
}: ClepsyCharacterProps) {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    setIsFloating(true);
  }, []);

  // Calculate sand level percentage
  const sandLevel = Math.min((balance / maxBalance) * 100, 100);

  // Size configurations
  const sizeConfig = {
    small: { width: 120, height: 160 },
    medium: { width: 180, height: 240 },
    large: { width: 240, height: 320 }
  };

  const config = sizeConfig[size];

  // Show celebration emoji for celebrating state
  const celebrationEmoji = state === 'celebrating' ? '🎉' : null;

  return (
    <motion.div
      className="relative flex flex-col items-center"
      animate={{ y: isFloating ? [-5, 5, -5] : 0 }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      style={{ width: config.width, height: config.height }}
    >
      {/* Celebration emoji overlay */}
      {celebrationEmoji && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
          {celebrationEmoji}
        </div>
      )}

      {/* Clepsy Character Image */}
      <img 
        src={clepsyImage} 
        alt="Clepsy the hourglass character"
        className="w-full h-full object-contain"
        style={{
          filter: state === 'encouraging' ? 'brightness(1.1)' : 'none'
        }}
      />

      {/* Balance indicator bar below character */}
      <div className="mt-4 w-full">
        <div className="h-2 bg-[#1E2A3A] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#F4A259] to-[#FF8C42] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${sandLevel}%` }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-[#D4CFC4]">
          <span>0 min</span>
          <span>{maxBalance} min</span>
        </div>
      </div>
    </motion.div>
  );
}