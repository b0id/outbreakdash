// src/data/pathogens.ts

// Import our type definitions to ensure type safety
import { PathogenData, PathogenType } from '../types';

// This is our main data structure that contains all information about the pathogens
// We use Record to create a dictionary where keys are PathogenType and values are PathogenData
export const pathogenData: Record<PathogenType, PathogenData> = {
    // Staphylococcus aureus data
    staphylococcus: {
        name: 'Staphylococcus aureus',
        characteristics: {
            type: 'Gram-positive cocci',
            transmission: 'Direct contact, contaminated surfaces',
            incubationPeriod: '1-10 days',
            commonSymptoms: [
                'Skin infections',
                'Rash',
                'Fever',
                'Joint pain',
                'Muscle aches'
            ]
        },
        epidemiology: {
            // Each data point represents a day in the outbreak
            cases: [
                { day: 'Day 0', newCases: 2, resolved: 0, active: 2, counselors: 2, campers: 0 },
                { day: 'Day 1', newCases: 5, resolved: 0, active: 7, counselors: 4, campers: 1 },
                { day: 'Day 2', newCases: 8, resolved: 2, active: 13, counselors: 6, campers: 2 },
                { day: 'Day 3', newCases: 6, resolved: 4, active: 15, counselors: 5, campers: 1 },
                { day: 'Day 4', newCases: 3, resolved: 6, active: 12, counselors: 2, campers: 1 }
            ],
            attackRate: {
                counselors: 68,  // Percentage of counselors affected
                campers: 12,     // Percentage of campers affected
                overall: 32      // Overall attack rate
            }
        },
        treatment: {
            options: [
                { name: 'Methicillin', efficacy: 75, sideEffects: 'Mild gastrointestinal upset' },
                { name: 'Vancomycin', efficacy: 95, sideEffects: 'Potential kidney issues' },
                { name: 'Clindamycin', efficacy: 85, sideEffects: 'Digestive system concerns' }
            ],
            duration: '7-14 days',
            firstLine: 'Methicillin (if susceptible)'
        }
    },

    // Streptococcus pyogenes data
    streptococcus: {
        name: 'Streptococcus pyogenes',
        characteristics: {
            type: 'Gram-positive cocci',
            transmission: 'Respiratory droplets, direct contact',
            incubationPeriod: '2-5 days',
            commonSymptoms: [
                'Sore throat',
                'Fever',
                'Rash',
                'Lymphadenopathy',
                'Headache'
            ]
        },
        epidemiology: {
            cases: [
                { day: 'Day 0', newCases: 1, resolved: 0, active: 1, counselors: 1, campers: 0 },
                { day: 'Day 1', newCases: 4, resolved: 0, active: 5, counselors: 3, campers: 1 },
                { day: 'Day 2', newCases: 7, resolved: 1, active: 11, counselors: 5, campers: 2 },
                { day: 'Day 3', newCases: 5, resolved: 3, active: 13, counselors: 4, campers: 1 },
                { day: 'Day 4', newCases: 2, resolved: 5, active: 10, counselors: 1, campers: 1 }
            ],
            attackRate: {
                counselors: 58,
                campers: 15,
                overall: 29
            }
        },
        treatment: {
            options: [
                { name: 'Penicillin', efficacy: 90, sideEffects: 'Allergic reactions possible' },
                { name: 'Erythromycin', efficacy: 85, sideEffects: 'Gastrointestinal effects' },
                { name: 'Azithromycin', efficacy: 88, sideEffects: 'Mild stomach upset' }
            ],
            duration: '10 days',
            firstLine: ' Penicillin G benzathine (Bicillin L-A)'
        }
    },

    // Shigella species data
    shigella: {
        name: 'Shigella species',
        characteristics: {
            type: 'Gram-negative bacilli',
            transmission: 'Fecal-oral route',
            incubationPeriod: '1-3 days',
            commonSymptoms: [
                'Diarrhea',
                'Fever',
                'Abdominal pain',
                'Nausea',
                'Vomiting'
            ]
        },
        epidemiology: {
            cases: [
                { day: 'Day 0', newCases: 3, resolved: 0, active: 3, counselors: 2, campers: 1 },
                { day: 'Day 1', newCases: 6, resolved: 0, active: 9, counselors: 4, campers: 2 },
                { day: 'Day 2', newCases: 9, resolved: 3, active: 15, counselors: 6, campers: 3 },
                { day: 'Day 3', newCases: 4, resolved: 5, active: 14, counselors: 3, campers: 1 },
                { day: 'Day 4', newCases: 2, resolved: 7, active: 9, counselors: 1, campers: 1 }
            ],
            attackRate: {
                counselors: 62,
                campers: 18,
                overall: 33
            }
        },
        treatment: {
            options: [
                { name: 'Ciprofloxacin', efficacy: 92, sideEffects: 'Joint pain in children' },
                { name: 'Azithromycin', efficacy: 88, sideEffects: 'Mild gastrointestinal effects' },
                { name: 'Ceftriaxone', efficacy: 90, sideEffects: 'Injection site pain' }
            ],
            duration: '5-7 days',
            firstLine: 'Ciprofloxacin'
        }
    }
};