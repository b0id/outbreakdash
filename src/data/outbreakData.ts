// src/data/outbreakData.ts

// Define types for our outbreak data
export interface SymptomCount {
    day: string;
    date: string; // Adding actual dates helps tell the story
    totalCases: number;
    symptoms: {
      fever: number;
      soreThroat: number;
      rash: number;
      lymphadenopathy: number;
      skinInfections: number;
      giSymptoms: number;
    };
    population: {
      counselors: number;
      campers: number;
    };
  }
  
  // This represents the actual progression of symptoms during the outbreak
  export const outbreakProgression: SymptomCount[] = [
    {
      day: 'Day 0',
      date: '2025-06-15',
      totalCases: 3,
      symptoms: {
        fever: 3,        // Initial presentations all have fever
        soreThroat: 3,   // All cases have sore throat - key indicator
        rash: 0,         // Rash hasn't appeared yet
        lymphadenopathy: 2, // Most have swollen lymph nodes
        skinInfections: 0,  // No skin infections - helps rule out Staph
        giSymptoms: 1      // One incidental case of upset stomach
      },
      population: {
        counselors: 2,
        campers: 1
      }
    },
    {
      day: 'Day 1',
      date: '2025-06-16',
      totalCases: 8,
      symptoms: {
        fever: 8,
        soreThroat: 7,
        rash: 2,         // Characteristic rash begins to appear
        lymphadenopathy: 6,
        skinInfections: 0,
        giSymptoms: 1
      },
      population: {
        counselors: 6,
        campers: 2
      }
    },
    {
      day: 'Day 2',
      date: '2025-06-17',
      totalCases: 15,
      symptoms: {
        fever: 15,
        soreThroat: 14,
        rash: 8,         // More cases developing the characteristic rash
        lymphadenopathy: 12,
        skinInfections: 0,
        giSymptoms: 2
      },
      population: {
        counselors: 11,
        campers: 4
      }
    },
    {
      day: 'Day 3',
      date: '2025-06-18',
      totalCases: 12,
      symptoms: {
        fever: 12,
        soreThroat: 12,
        rash: 10,        // Rash now present in most cases
        lymphadenopathy: 11,
        skinInfections: 0,
        giSymptoms: 1
      },
      population: {
        counselors: 9,
        campers: 3
      }
    }
  ];
  
  // Add testing data to support our investigation
  export interface TestingData {
    day: string;
    date: string;
    rapidStrep: number;
    rapidStrepPositive: number;
    throatCulture: number;
    throatCulturePositive: number;
    staphCulture: number;
    staphCulturePositive: number;
    shigellaTest: number;
    shigellaPositive: number;
  }
  
  export const testingProgress: TestingData[] = [
    {
      day: 'Day 1',
      date: '2025-06-16',
      rapidStrep: 10,
      rapidStrepPositive: 8,
      throatCulture: 10,
      throatCulturePositive: 0,    // Cultures take time to result
      staphCulture: 5,
      staphCulturePositive: 0,
      shigellaTest: 2,
      shigellaPositive: 0
    },
    {
      day: 'Day 2',
      date: '2025-06-17',
      rapidStrep: 20,
      rapidStrepPositive: 15,
      throatCulture: 20,
      throatCulturePositive: 12,   // First culture results coming back
      staphCulture: 10,
      staphCulturePositive: 0,
      shigellaTest: 5,
      shigellaPositive: 0
    },
    {
      day: 'Day 3',
      date: '2025-06-18',
      rapidStrep: 30,
      rapidStrepPositive: 22,
      throatCulture: 30,
      throatCulturePositive: 25,   // Strong confirmation of Strep
      staphCulture: 15,
      staphCulturePositive: 0,     // Helping rule out Staph
      shigellaTest: 8,
      shigellaPositive: 0          // Helping rule out Shigella
    }
  ];