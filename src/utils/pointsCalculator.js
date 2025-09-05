// Points calculation utilities
// This file contains functions for calculating rewards points

import { getLevelByPoints } from '../constants/levels';

/**
 * Calculate points earned from a purchase
 * @param {number} amount - Purchase amount in dollars
 * @param {number} baseRate - Base points rate (default: 10 points per dollar)
 * @param {number} userPoints - Current user points for level calculation
 * @returns {number} Points earned
 */
export const calculatePointsEarned = (amount, baseRate = 10, userPoints = 0) => {
  // Calculate 10% points here
  const basePoints = amount * baseRate;
  
  // Get user's current level for bonus calculation
  const userLevel = getLevelByPoints(userPoints);
  
  // Apply level bonus
  let bonusMultiplier = 1;
  switch (userLevel.level) {
    case 'silver':
      bonusMultiplier = 1.1; // 10% bonus
      break;
    case 'gold':
      bonusMultiplier = 1.2; // 20% bonus
      break;
    case 'platinum':
      bonusMultiplier = 1.3; // 30% bonus
      break;
    case 'diamond':
      bonusMultiplier = 1.5; // 50% bonus
      break;
    default:
      bonusMultiplier = 1; // No bonus for bronze
  }
  
  return Math.floor(basePoints * bonusMultiplier);
};

/**
 * Calculate points needed to reach next level
 * @param {number} currentPoints - Current user points
 * @returns {number} Points needed for next level
 */
export const calculatePointsToNextLevel = (currentPoints) => {
  const levels = [100, 500, 1000, 2500, 5000];
  
  for (const levelThreshold of levels) {
    if (currentPoints < levelThreshold) {
      return levelThreshold - currentPoints;
    }
  }
  
  return 0; // Already at highest level
};

/**
 * Calculate progress percentage to next level
 * @param {number} currentPoints - Current user points
 * @returns {number} Progress percentage (0-1)
 */
export const calculateLevelProgress = (currentPoints) => {
  const levels = [100, 500, 1000, 2500, 5000];
  
  for (let i = 0; i < levels.length; i++) {
    if (currentPoints < levels[i]) {
      const previousLevel = i > 0 ? levels[i - 1] : 0;
      const currentLevel = levels[i];
      return (currentPoints - previousLevel) / (currentLevel - previousLevel);
    }
  }
  
  return 1; // At highest level
};

