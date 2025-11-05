
/**
 * Game Log Model
 * Represents a single gameplay log entry for Parsons Problems.
 * Used for analytics, progress tracking, and achievement validation.
 * A Game Log is inserted into the database per stage of a question completed (maps if a cheat has been used and how many times 'Nakijken' , or 'Get feedback' has been clicked on)
 */

export interface GameLog {
    id?: number;
    userId: string;
    questionId: number;
    sectionId: number;
    completionTime: string; // Date string
    getFeedbackClicks: number; // Number of times clicked on the Get Feedback / Nakijken button
    cheatUsed: 'Y' | 'N';
    achievementAwarded: 'Y' | 'N'; // Check if the user already has completed this question
    badgeId?: number | null; // Only present if an achievement has already been awarded
  }
  