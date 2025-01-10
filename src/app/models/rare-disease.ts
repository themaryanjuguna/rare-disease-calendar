export interface RareDisease {
    id: number;
    occasion: string;
    rareCondition: string;
    date: string;
    updatedBy: string; // Use camelCase to align with TypeScript conventions
    emailAddress: string;
  }
  