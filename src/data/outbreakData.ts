// src/data/outbreakData.ts

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

export interface SymptomCount {
  day: string;
  date: string;
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

export const testingProgress: TestingData[] = [
  {
      day: 'Day 0',
      date: '06/15',
      rapidStrep: 5,
      rapidStrepPositive: 3,
      throatCulture: 5,
      throatCulturePositive: 0,
      staphCulture: 2,
      staphCulturePositive: 0,
      shigellaTest: 2,
      shigellaPositive: 0
  },
  {
      day: 'Day 1',
      date: '06/16',
      rapidStrep: 10,
      rapidStrepPositive: 7,
      throatCulture: 10,
      throatCulturePositive: 3,
      staphCulture: 5,
      staphCulturePositive: 0,
      shigellaTest: 3,
      shigellaPositive: 0
  },
  {
      day: 'Day 2',
      date: '06/17',
      rapidStrep: 18,
      rapidStrepPositive: 14,
      throatCulture: 18,
      throatCulturePositive: 7,
      staphCulture: 8,
      staphCulturePositive: 0,
      shigellaTest: 5,
      shigellaPositive: 0
  },
  {
      day: 'Day 3',
      date: '06/18',
      rapidStrep: 22,
      rapidStrepPositive: 17,
      throatCulture: 22,
      throatCulturePositive: 14,
      staphCulture: 10,
      staphCulturePositive: 0,
      shigellaTest: 6,
      shigellaPositive: 0
  },
  {
      day: 'Day 4',
      date: '06/19',
      rapidStrep: 25,
      rapidStrepPositive: 19,
      throatCulture: 25,
      throatCulturePositive: 17,
      staphCulture: 12,
      staphCulturePositive: 0,
      shigellaTest: 8,
      shigellaPositive: 0
  },
  {
      day: 'Day 5',
      date: '06/20',
      rapidStrep: 27,
      rapidStrepPositive: 20,
      throatCulture: 27,
      throatCulturePositive: 19,
      staphCulture: 12,
      staphCulturePositive: 0,
      shigellaTest: 8,
      shigellaPositive: 0
  },
  {
      day: 'Day 6',
      date: '06/21',
      rapidStrep: 28,
      rapidStrepPositive: 21,
      throatCulture: 28,
      throatCulturePositive: 20,
      staphCulture: 12,
      staphCulturePositive: 0,
      shigellaTest: 8,
      shigellaPositive: 0
  },
  {
      day: 'Day 7',
      date: '06/22',
      rapidStrep: 28,
      rapidStrepPositive: 21,
      throatCulture: 28,
      throatCulturePositive: 21,
      staphCulture: 12,
      staphCulturePositive: 0,
      shigellaTest: 8,
      shigellaPositive: 0
  },
  {
      day: 'Day 8',
      date: '06/23',
      rapidStrep: 28,
      rapidStrepPositive: 21,
      throatCulture: 28,
      throatCulturePositive: 21,
      staphCulture: 12,
      staphCulturePositive: 0,
      shigellaTest: 8,
      shigellaPositive: 0
  },
  {
      day: 'Day 9',
      date: '06/24',
      rapidStrep: 28,
      rapidStrepPositive: 21,
      throatCulture: 28,
      throatCulturePositive: 21,
      staphCulture: 12,
      staphCulturePositive: 0,
      shigellaTest: 8,
      shigellaPositive: 0
  }
];

export const outbreakProgression: SymptomCount[] = [
  {
      day: 'Day 0',
      date: '06/15',
      totalCases: 3,
      symptoms: {
          fever: 3,
          soreThroat: 3,
          rash: 0,
          lymphadenopathy: 2,
          skinInfections: 0,
          giSymptoms: 1
      },
      population: {
          counselors: 2,
          campers: 1
      }
  },
  {
      day: 'Day 1',
      date: '06/16',
      totalCases: 8,
      symptoms: {
          fever: 8,
          soreThroat: 7,
          rash: 2,
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
      date: '06/17',
      totalCases: 15,
      symptoms: {
          fever: 15,
          soreThroat: 14,
          rash: 8,
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
      date: '06/18',
      totalCases: 18,
      symptoms: {
          fever: 18,
          soreThroat: 18,
          rash: 12,
          lymphadenopathy: 15,
          skinInfections: 0,
          giSymptoms: 2
      },
      population: {
          counselors: 13,
          campers: 5
      }
  },
  {
      day: 'Day 4',
      date: '06/19',
      totalCases: 20,
      symptoms: {
          fever: 20,
          soreThroat: 20,
          rash: 15,
          lymphadenopathy: 16,
          skinInfections: 0,
          giSymptoms: 2
      },
      population: {
          counselors: 14,
          campers: 6
      }
  },
  {
      day: 'Day 5',
      date: '06/20',
      totalCases: 21,
      symptoms: {
          fever: 12,
          soreThroat: 14,
          rash: 16,
          lymphadenopathy: 15,
          skinInfections: 0,
          giSymptoms: 1
      },
      population: {
          counselors: 15,
          campers: 6
      }
  },
  {
      day: 'Day 6',
      date: '06/21',
      totalCases: 21,
      symptoms: {
          fever: 8,
          soreThroat: 10,
          rash: 12,
          lymphadenopathy: 11,
          skinInfections: 0,
          giSymptoms: 1
      },
      population: {
          counselors: 15,
          campers: 6
      }
  },
  {
      day: 'Day 7',
      date: '06/22',
      totalCases: 21,
      symptoms: {
          fever: 5,
          soreThroat: 8,
          rash: 10,
          lymphadenopathy: 8,
          skinInfections: 0,
          giSymptoms: 1
      },
      population: {
          counselors: 15,
          campers: 6
      }
  },
  {
      day: 'Day 8',
      date: '06/23',
      totalCases: 21,
      symptoms: {
          fever: 2,
          soreThroat: 5,
          rash: 7,
          lymphadenopathy: 6,
          skinInfections: 0,
          giSymptoms: 0
      },
      population: {
          counselors: 15,
          campers: 6
      }
  },
  {
      day: 'Day 9',
      date: '06/24',
      totalCases: 21,
      symptoms: {
          fever: 0,
          soreThroat: 3,
          rash: 4,
          lymphadenopathy: 4,
          skinInfections: 0,
          giSymptoms: 0
      },
      population: {
          counselors: 15,
          campers: 6
      }
  }
];