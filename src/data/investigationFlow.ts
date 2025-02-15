import { InvestigationPhase } from '../types';

export const investigationTimeline: InvestigationPhase[] = [
    {
        phase: 'initial',
        day: 'Day 0-1',
        date: '2025-06-15',
        description: 'Initial case reports and symptom assessment',
        keyFindings: [
            'Multiple counselors reporting fever and sore throat',
            'No significant gastrointestinal symptoms',
            'No skin infections noted',
            'Pattern suggests respiratory transmission'
        ],
        criticalQuestions: [
            {
                question: "Based on initial symptoms, which pathogen is least likely?",
                options: ['Staphylococcus', 'Streptococcus', 'Shigella'],
                correctAnswer: 'Shigella',
                explanation: 'Absence of GI symptoms makes Shigella unlikely'
            },
            {
                question: "What testing should be ordered first?",
                options: [
                    'Rapid strep test',
                    'Stool culture',
                    'Skin culture',
                    'Blood culture'
                ],
                correctAnswer: 'Rapid strep test',
                explanation: 'Given the predominant symptoms of fever and sore throat, rapid strep testing is the most appropriate initial test'
            }
        ]
    },
    {
        phase: 'testing',
        day: 'Day 2-3',
        date: '2025-06-16',
        description: 'Laboratory testing and continued monitoring',
        keyFindings: [
            'Rapid strep tests positive in 80% of tested cases',
            'Characteristic rash appearing in several cases',
            'New cases primarily among close contacts',
            'Throat cultures pending'
        ],
        criticalQuestions: [
            {
                question: "The appearance of rash after fever and sore throat is most consistent with:",
                options: [
                    'Scarlet fever',
                    'Staph scalded skin syndrome',
                    'Viral exanthem',
                    'Contact dermatitis'
                ],
                correctAnswer: 'Scarlet fever',
                explanation: 'The progression of symptoms (fever/sore throat followed by rash) and positive strep tests suggests scarlet fever, a form of strep infection'
            },
            {
                question: "What intervention should be implemented immediately?",
                options: [
                    'Begin appropriate antibiotics for positive cases',
                    'Wait for throat culture results',
                    'Isolate all campers',
                    'Close the camp'
                ],
                correctAnswer: 'Begin appropriate antibiotics for positive cases',
                explanation: 'With positive rapid strep tests and consistent clinical presentation, antibiotic treatment should begin to prevent complications and reduce transmission'
            }
        ]
    },
    {
        phase: 'confirmation',
        day: 'Day 4-6',
        date: '2025-06-18',
        description: 'Treatment implementation and outcome monitoring',
        keyFindings: [
            'Throat cultures confirm Group A Streptococcus',
            'Patients on antibiotics showing improvement within 48 hours',
            'No new cases among treated contacts',
            'Pattern consistent with streptococcal outbreak'
        ],
        criticalQuestions: [
            {
                question: "How long should cases be isolated from camp activities?",
                options: [
                    '24 hours after starting antibiotics',
                    '48 hours after starting antibiotics',
                    'Until rash resolves',
                    'Until fever resolves'
                ],
                correctAnswer: '24 hours after starting antibiotics',
                explanation: 'Strep throat cases are generally no longer contagious 24 hours after starting appropriate antibiotic therapy'
            },
            {
                question: "What follow-up is most important for this outbreak?",
                options: [
                    'Monitor for post-streptococcal complications',
                    'Continue daily rapid strep testing',
                    'Perform weekly throat cultures',
                    'Monitor for antibiotic resistance'
                ],
                correctAnswer: 'Monitor for post-streptococcal complications',
                explanation: 'Given the significant number of cases, monitoring for post-strep complications (like rheumatic fever) is important'
            }
        ]
    }
];