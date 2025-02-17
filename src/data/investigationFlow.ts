import { InvestigationPhase, } from '../types';



export const investigationTimeline: InvestigationPhase[] = [
    {
        phase: 'initial',
        day: 'Day 0-1', 
        date: '2025-06-15',
        description: 'Initial case reports and symptom assessment',
        keyFindings: [
            'Multiple counselors reporting fever (101-103°F) and severe sore throat, but no cough',
            'Absence of diarrhea, vomiting, or abdominal pain reported among the affected individuals',
            'Physical examination reveals no signs of skin abscesses, cellulitis, or impetigo',
            'Pattern suggests respiratory transmission'
        ],
        criticalQuestions: [
            {
                question: "Given the initial symptoms of fever and sore throat, which of the following pathogens is *least* likely to be the primary cause?",
                options: [
                    { text: 'Staphylococcus aureus', explanation: 'While S. aureus can cause skin infections, it\'s less common as a primary cause of fever and sore throat' },
                    { text: 'Streptococcus pyogenes', explanation: 'S. pyogenes is a common cause of bacterial pharyngitis (strep throat), making it a more likely suspect' },
                    { text: 'Shigella dysenteriae', explanation: 'Shigella typically causes gastrointestinal symptoms, which are not prominent in this outbreak' }
                ],
                correctAnswer: 'Shigella dysenteriae',
                explanation: 'Shigella typically causes gastrointestinal symptoms, which are not prominent in this outbreak'
            },
            {
                question: "Considering the initial presentation, which diagnostic test would provide the *most rapid and relevant* information?",
                options: [
                    { text: 'Rapid antigen detection test for Streptococcus pyogenes', explanation: 'A rapid strep test is the quickest way to confirm strep throat' },
                    { text: 'Stool culture for enteric pathogens', explanation: 'GI symptoms are not prominent in the initial presentation' },
                    { text: 'Gram stain and culture of skin lesion', explanation: 'No skin lesions are reported in the initial findings' },
                    { text: 'Complete blood count (CBC) with differential', explanation: 'A CBC is not specific enough for rapid identification of the causative agent' }
                ],
                correctAnswer: 'Rapid antigen detection test for Streptococcus pyogenes',
                explanation: 'A rapid strep test is the quickest way to confirm strep throat'
            }
        ]
    },
    {
        phase: 'testing',
        day: 'Day 2-3',
        date: '2025-06-16',
        description: 'Laboratory testing and continued monitoring',
        keyFindings: [
            'Rapid antigen detection tests for Streptococcus pyogenes are positive in 80% of tested individuals',
            'A diffuse, erythematous, sandpaper-like rash is observed on the trunk and extremities of several patients',
            'New cases are primarily occurring among individuals with close contact (e.g., cabinmates)',
            'Throat cultures pending'
        ],
        criticalQuestions: [
            {
                question: "The appearance of a diffuse, sandpaper-like rash 1-2 days after the onset of fever and sore throat is *most characteristic* of:",
                options: [
                    { text: 'Scarlet fever', explanation: 'Scarlet fever is characterized by a sandpaper-like rash following strep throat' },
                    { text: 'Staphylococcal Scalded Skin Syndrome (SSSS)', explanation: 'SSSS presents with blistering and peeling of the skin, not a sandpaper-like rash' },
                    { text: 'Measles (Rubeola)', explanation: 'Measles is associated with distinct prodromal symptoms and a maculopapular rash that starts on the face' },
                    { text: 'Contact dermatitis', explanation: 'Contact dermatitis is localized and associated with itching, not fever and sore throat' }
                ],
                correctAnswer: 'Scarlet fever',
                explanation: 'Scarlet fever is characterized by a sandpaper-like rash following strep throat'
            },
            {
                question: "Based on the positive rapid strep tests and characteristic rash, what is the *most appropriate* immediate intervention?",
                options: [
                    { text: 'Initiate oral penicillin or amoxicillin treatment', explanation: 'Antibiotics are necessary to treat the bacterial infection' },
                    { text: 'Administer topical corticosteroids for rash', explanation: 'Corticosteroids do not address the underlying bacterial infection' },
                    { text: 'Isolate all campers and staff pending further investigation', explanation: 'While isolation is important, treatment should be initiated promptly in confirmed cases' },
                    { text: 'Prescribe antiviral medication', explanation: 'The evidence points to a bacterial infection, not a viral one' }
                ],
                correctAnswer: 'Initiate oral penicillin or amoxicillin treatment',
                explanation: 'Antibiotics are necessary to treat the bacterial infection'
            }
        ]
    },
    {
        phase: 'confirmation',
        day: 'Day 4-6',
        date: '2025-06-18',
        description: 'Treatment implementation and outcome monitoring',
        keyFindings: [
            'Throat cultures confirm the presence of Streptococcus pyogenes (Group A Streptococcus) in symptomatic individuals',
            'Patients who received appropriate antibiotic treatment show significant clinical improvement within 48 hours',
            'No new cases of pharyngitis have been reported among treated contacts after 72 hours',
            'Pattern consistent with streptococcal outbreak'
        ],
        criticalQuestions: [
            {
                question: "According to current guidelines, how long should individuals with confirmed Streptococcus pyogenes pharyngitis be excluded from camp activities *after* starting appropriate antibiotic therapy?",
                options: [
                    { text: '24 hours', explanation: '24 hours is generally accepted after starting antibiotics' },
                    { text: '48 hours', explanation: 'Some guidelines recommend 48 hours, but 24 hours is generally accepted' },
                    { text: '72 hours', explanation: '72 hours is not typically required with appropriate antibiotic treatment' },
                    { text: 'Until resolution of rash', explanation: 'The rash may persist even after the individual is no longer contagious' }
                ],
                correctAnswer: '24 hours',
                explanation: '24 hours is generally accepted after starting antibiotics'
            },
            {
                question: "What is the *most critical* long-term follow-up measure for this outbreak of Streptococcus pyogenes pharyngitis?",
                options: [
                    { text: 'Monitor for post-streptococcal complications', explanation: 'Important to watch for potential complications like rheumatic fever and glomerulonephritis' },
                    { text: 'Continue daily rapid strep testing of all campers', explanation: 'Not necessary once the outbreak is controlled and treatment is in place' },
                    { text: 'Perform weekly throat cultures on all staff', explanation: 'Not necessary unless new cases arise' },
                    { text: 'Monitor for antibiotic resistance', explanation: 'While important in general, it\'s not the most critical follow-up measure in this specific outbreak scenario' }
                ],
                correctAnswer: 'Monitor for post-streptococcal complications',
                explanation: 'Important to watch for potential complications like rheumatic fever and glomerulonephritis'
            }
        ]
    }
];