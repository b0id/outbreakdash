// src/components/visualization/OutbreakProgression.tsx
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { outbreakProgression, testingProgress } from '../../data/outbreakData';

export function OutbreakProgression() {
  return (
    <div className="space-y-8">
      {/* Symptom Progression Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Symptom Progression</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={outbreakProgression}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="symptoms.fever" name="Fever" stroke="#ff7300" />
              <Line type="monotone" dataKey="symptoms.soreThroat" name="Sore Throat" stroke="#8884d8" />
              <Line type="monotone" dataKey="symptoms.rash" name="Rash" stroke="#82ca9d" />
              <Line type="monotone" dataKey="symptoms.lymphadenopathy" name="Lymphadenopathy" stroke="#ffc658" />
              <Line type="monotone" dataKey="symptoms.giSymptoms" name="GI Symptoms" stroke="#ff8042" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Testing Results Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Laboratory Testing Results</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={testingProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rapidStrepPositive" name="Positive Rapid Strep" fill="#8884d8" />
              <Bar dataKey="throatCulturePositive" name="Positive Throat Culture" fill="#82ca9d" />
              <Bar dataKey="staphCulturePositive" name="Positive Staph Culture" fill="#ffc658" />
              <Bar dataKey="shigellaPositive" name="Positive Shigella Test" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium mb-2">Investigation Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Total Cases: {outbreakProgression[outbreakProgression.length - 1].totalCases}</p>
            <p className="text-gray-600">Counselors Affected: {outbreakProgression[outbreakProgression.length - 1].population.counselors}</p>
            <p className="text-gray-600">Campers Affected: {outbreakProgression[outbreakProgression.length - 1].population.campers}</p>
          </div>
          <div>
            <p className="text-gray-600">Strep Test Positivity: {
              ((testingProgress[testingProgress.length - 1].rapidStrepPositive / 
                testingProgress[testingProgress.length - 1].rapidStrep) * 100).toFixed(1)
            }%</p>
            <p className="text-gray-600">Culture Confirmation: {
              testingProgress[testingProgress.length - 1].throatCulturePositive
            } cases</p>
          </div>
        </div>
      </div>
    </div>
  );
}