// src/components/visualization/TestingData.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PathogenType } from '../../types';

interface TestingDataProps {
  pathogenType: PathogenType;
}

export function TestingData({ pathogenType }: TestingDataProps) {
  // This data structure represents test results coming in over time
  // Positive rates increase for Strep tests while others remain negative
  const testingProgressData = [
    {
      day: 'Day 1',
      'Rapid Strep': 8,
      'Throat Culture': 0,
      'Staphylococcus Culture': 0,
      'Shigella Culture': 0,
      samples: 10
    },
    {
      day: 'Day 2',
      'Rapid Strep': 15,
      'Throat Culture': 12,
      'Staphylococcus Culture': 1,
      'Shigella Culture': 0,
      samples: 20
    },
    {
      day: 'Day 3',
      'Rapid Strep': 22,
      'Throat Culture': 25,
      'Staphylococcus Culture': 2,
      'Shigella Culture': 0,
      samples: 30
    },
    {
      day: 'Day 4',
      'Rapid Strep': 28,
      'Throat Culture': 32,
      'Staphylococcus Culture': 2,
      'Shigella Culture': 0,
      samples: 35
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Laboratory Testing Results</h2>
      <div className="space-y-4">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={testingProgressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Rapid Strep" fill="#8884d8" />
              <Bar dataKey="Throat Culture" fill="#82ca9d" />
              <Bar dataKey="Staphylococcus Culture" fill="#ffc658" />
              <Bar dataKey="Shigella Culture" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Testing Summary</h3>
          <p className="text-sm text-gray-600">
            Total Samples Tested: {testingProgressData[testingProgressData.length - 1].samples}<br />
            Positive Strep Tests: {testingProgressData[testingProgressData.length - 1]['Throat Culture']}<br />
            Test Positivity Rate: {((testingProgressData[testingProgressData.length - 1]['Throat Culture'] / 
              testingProgressData[testingProgressData.length - 1].samples) * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}