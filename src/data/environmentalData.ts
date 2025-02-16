// src/data/environmentalData.ts

export interface EnvironmentalData {
    date: string;
    waterTests: {
        well: {
            totalColiform: number;  // CFU/100mL
            eColi: number;         // CFU/100mL
            pH: number;
            turbidity: number;     // NTU
        };
        pond: {
            totalColiform: number;
            eColi: number;
            pH: number;
            turbidity: number;
        };
    };
    foodSafety: {
        temperature: number;      // Fahrenheit
        sanitationScore: number;  // 0-100
        surfaceSamples: {
            positive: number;
            total: number;
        };
    };
 }
 
 export const environmentalTestResults: EnvironmentalData[] = [
    { 
        date: '06/15', 
        waterTests: { 
            well: { totalColiform: 2, eColi: 0, pH: 7.2, turbidity: 1.5 }, 
            pond: { totalColiform: 150, eColi: 10, pH: 7.8, turbidity: 4.2 }
        }, 
        foodSafety: { 
            temperature: 39, 
            sanitationScore: 92, 
            surfaceSamples: { positive: 1, total: 20 }
        }
    },
    { 
        date: '06/16', 
        waterTests: { 
            well: { totalColiform: 3, eColi: 0, pH: 7.3, turbidity: 1.6 }, 
            pond: { totalColiform: 165, eColi: 12, pH: 7.7, turbidity: 4.5 }
        }, 
        foodSafety: { 
            temperature: 38, 
            sanitationScore: 94, 
            surfaceSamples: { positive: 2, total: 20 }
        }
    },
    { 
        date: '06/17', 
        waterTests: { 
            well: { totalColiform: 5, eColi: 1, pH: 7.4, turbidity: 1.8 }, 
            pond: { totalColiform: 180, eColi: 15, pH: 7.9, turbidity: 4.8 }
        }, 
        foodSafety: { 
            temperature: 41, 
            sanitationScore: 88, 
            surfaceSamples: { positive: 3, total: 20 }
        }
    },
    { 
        date: '06/18', 
        waterTests: { 
            well: { totalColiform: 4, eColi: 0, pH: 7.2, turbidity: 1.7 }, 
            pond: { totalColiform: 170, eColi: 14, pH: 7.8, turbidity: 4.6 }
        }, 
        foodSafety: { 
            temperature: 37, 
            sanitationScore: 95, 
            surfaceSamples: { positive: 1, total: 20 }
        }
    },
    { 
        date: '06/19', 
        waterTests: { 
            well: { totalColiform: 3, eColi: 0, pH: 7.3, turbidity: 1.5 }, 
            pond: { totalColiform: 160, eColi: 11, pH: 7.7, turbidity: 4.3 }
        }, 
        foodSafety: { 
            temperature: 36, 
            sanitationScore: 96, 
            surfaceSamples: { positive: 1, total: 20 }
        }
    },
    { 
        date: '06/20', 
        waterTests: { 
            well: { totalColiform: 2, eColi: 0, pH: 7.2, turbidity: 1.4 }, 
            pond: { totalColiform: 155, eColi: 10, pH: 7.8, turbidity: 4.2 }
        }, 
        foodSafety: { 
            temperature: 37, 
            sanitationScore: 97, 
            surfaceSamples: { positive: 0, total: 20 }
        }
    },
    { 
        date: '06/21', 
        waterTests: { 
            well: { totalColiform: 2, eColi: 0, pH: 7.2, turbidity: 1.4 }, 
            pond: { totalColiform: 145, eColi: 9, pH: 7.7, turbidity: 4.0 }
        }, 
        foodSafety: { 
            temperature: 36, 
            sanitationScore: 98, 
            surfaceSamples: { positive: 0, total: 20 }
        }
    },
    { 
        date: '06/22', 
        waterTests: { 
            well: { totalColiform: 2, eColi: 0, pH: 7.2, turbidity: 1.3 }, 
            pond: { totalColiform: 140, eColi: 8, pH: 7.7, turbidity: 3.9 }
        }, 
        foodSafety: { 
            temperature: 36, 
            sanitationScore: 98, 
            surfaceSamples: { positive: 0, total: 20 }
        }
    },
    { 
        date: '06/23', 
        waterTests: { 
            well: { totalColiform: 2, eColi: 0, pH: 7.2, turbidity: 1.3 }, 
            pond: { totalColiform: 135, eColi: 8, pH: 7.7, turbidity: 3.8 }
        }, 
        foodSafety: { 
            temperature: 36, 
            sanitationScore: 99, 
            surfaceSamples: { positive: 0, total: 20 }
        }
    },
    { 
        date: '06/24', 
        waterTests: { 
            well: { totalColiform: 2, eColi: 0, pH: 7.2, turbidity: 1.3 }, 
            pond: { totalColiform: 130, eColi: 7, pH: 7.7, turbidity: 3.7 }
        }, 
        foodSafety: { 
            temperature: 36, 
            sanitationScore: 99, 
            surfaceSamples: { positive: 0, total: 20 }
        }
    }
 ];