// src/types/index.ts

// This defines the basic structure of a pathogen's characteristics
export interface PathogenCharacteristics {
    type: string;                // Example: "Gram-positive cocci"
    transmission: string;        // How the pathogen spreads
    incubationPeriod: string;   // Time between exposure and symptoms
    commonSymptoms: string[];   // Array of typical symptoms
}
export interface InvestigationPhase {
    phase: 'initial' | 'testing' | 'confirmation';
    day: string;
    date: string;
    description: string;
    keyFindings: string[];
    criticalQuestions: {
        question: string;
        options: string[];
        correctAnswer: string;
        explanation: string;
    }[];
}
// Defines how we track cases over time
export interface CaseData {
    day: string;        // The day of observation
    newCases: number;   // New cases reported
    resolved: number;   // Cases that have been resolved
    active: number;     // Currently active cases
    counselors: number; // Cases among counselors
    campers: number;    // Cases among campers
}

// Defines information about treatment options
export interface TreatmentOption {
    name: string;       // Name of the treatment
    efficacy: number;   // Effectiveness percentage
    sideEffects: string; // Description of side effects
}

// The complete structure for a pathogen's epidemiological data
export interface PathogenData {
    name: string;
    characteristics: PathogenCharacteristics;
    epidemiology: {
        cases: CaseData[];
        attackRate: {
            counselors: number;
            campers: number;
            overall: number;
        };
    };
    treatment: {
        options: TreatmentOption[];
        duration: string;
        firstLine: string;
    };
}

// These types help us manage the different levels of the educational content
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type PathogenType = 'staphylococcus' | 'streptococcus' | 'shigella';

// Props interface for our components
export interface PathogenDisplayProps {
    pathogenType: PathogenType;
}

export interface DataVisualizationProps {
    pathogenType: PathogenType;
}