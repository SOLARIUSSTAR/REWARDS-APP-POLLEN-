// Level constants for the rewards system
// This file contains all the level thresholds and rewards

export const levels = {
  bronze: {
    name: 'Bronze',
    threshold: 100,
    color: '#CD7F32',
    benefits: ['Basic rewards', 'Standard points rate'],
  },
  silver: {
    name: 'Silver',
    threshold: 500,
    color: '#C0C0C0',
    benefits: ['Enhanced rewards', '10% bonus points', 'Priority support'],
  },
  gold: {
    name: 'Gold',
    threshold: 1000,
    color: '#FFD700',
    benefits: ['Premium rewards', '20% bonus points', 'VIP support', 'Exclusive offers'],
  },
  platinum: {
    name: 'Platinum',
    threshold: 2500,
    color: '#E5E4E2',
    benefits: ['Ultimate rewards', '30% bonus points', '24/7 support', 'Exclusive events'],
  },
  diamond: {
    name: 'Diamond',
    threshold: 5000,
    color: '#B9F2FF',
    benefits: ['Legendary rewards', '50% bonus points', 'Personal concierge', 'All exclusive benefits'],
  },
};

export const getLevelByPoints = (points) => {
  const sortedLevels = Object.entries(levels).sort((a, b) => b[1].threshold - a[1].threshold);
  
  for (const [levelKey, levelData] of sortedLevels) {
    if (points >= levelData.threshold) {
      return { level: levelKey, ...levelData };
    }
  }
  
  return { level: 'bronze', ...levels.bronze };
};

export const getNextLevel = (currentPoints) => {
  const sortedLevels = Object.entries(levels).sort((a, b) => a[1].threshold - b[1].threshold);
  
  for (const [levelKey, levelData] of sortedLevels) {
    if (currentPoints < levelData.threshold) {
      return { level: levelKey, ...levelData };
    }
  }
  
  return null; // Already at highest level
};

