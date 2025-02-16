// src/components/visualization/TestingData.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { testingProgress } from '../../data/outbreakData';

export function TestingData() {
  return (
    <div className="space-y-4">
      {/* Strep Testing Results */}
      <div className="h-72">
        <h3 className="text-lg font-semibold mb-2">Strep Testing Results</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={testingProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="06/19" stroke="red" label="Intervention Started" />
            <Line type="monotone" dataKey="rapidStrepPositive" name="Positive Rapid Strep" stroke="#8884d8" />
            <Line type="monotone" dataKey="throatCulturePositive" name="Positive Culture" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Other Pathogen Testing */}
      <div className="h-72">
        <h3 className="text-lg font-semibold mb-2">Differential Testing</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={testingProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="06/19" stroke="red" label="Intervention Started" />
            <Line type="monotone" dataKey="staphCulturePositive" name="Positive Staph" stroke="#ffc658" />
            <Line type="monotone" dataKey="shigellaPositive" name="Positive Shigella" stroke="#ff8042" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mt-4">
        <h4 className="font-medium text-sm mb-2">Testing Summary</h4>
        <p className="text-sm text-gray-600">
          Total tests performed: {testingProgress[testingProgress.length - 1].rapidStrep}<br />
          Positive Strep cases: {testingProgress[testingProgress.length - 1].rapidStrepPositive}<br />
          Culture confirmation rate: {((testingProgress[testingProgress.length - 1].throatCulturePositive / 
            testingProgress[testingProgress.length - 1].rapidStrepPositive) * 100).toFixed(1)}%
        </p>
      </div>
    </div>
  );
}