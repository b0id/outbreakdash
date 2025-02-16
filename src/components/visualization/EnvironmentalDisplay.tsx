// src/components/visualization/EnvironmentalDisplay.tsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { environmentalTestResults } from '../../data/environmentalData';

export function EnvironmentalDisplay() {
  const [selectedTest, setSelectedTest] = useState<'water' | 'food'>('water');

  const waterMetrics = (
    <div className="space-y-4">
      <div className="h-48">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Well Water Quality Trends</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={environmentalTestResults}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="waterTests.well.totalColiform" 
              name="Coliform (CFU)" 
              stroke="#8884d8" 
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="waterTests.well.eColi" 
              name="E. coli (CFU)" 
              stroke="#82ca9d" 
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="waterTests.well.pH" 
              name="pH" 
              stroke="#ffc658" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="h-48">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Pond Water Measurements</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={environmentalTestResults}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="waterTests.pond.turbidity" 
              name="Turbidity (NTU)" 
              stroke="#8884d8" 
            />
            <Line 
              type="monotone" 
              dataKey="waterTests.pond.totalColiform" 
              name="Coliform (CFU)" 
              stroke="#82ca9d" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const foodMetrics = (
    <div className="space-y-4">
      <div className="h-48">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Food Safety Metrics</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={environmentalTestResults}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="foodSafety.temperature" 
              name="Storage Temp (°F)" 
              stroke="#8884d8" 
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="foodSafety.sanitationScore" 
              name="Sanitation Score" 
              stroke="#82ca9d" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="h-48">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Surface Testing Results</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={environmentalTestResults}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="foodSafety.surfaceSamples.positive" 
              name="Positive Samples" 
              fill="#ff8042" 
            />
            <Bar 
              dataKey="foodSafety.surfaceSamples.total" 
              name="Total Samples" 
              fill="#8884d8" 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedTest('water')}
          className={`px-3 py-1 rounded-md text-sm ${
            selectedTest === 'water'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Water Testing
        </button>
        <button
          onClick={() => setSelectedTest('food')}
          className={`px-3 py-1 rounded-md text-sm ${
            selectedTest === 'food'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Food Safety
        </button>
      </div>

      {selectedTest === 'water' ? waterMetrics : foodMetrics}

      <div className="text-xs text-gray-500 mt-2">
        Reference Values:
        {selectedTest === 'water' ? (
          <ul className="list-disc pl-4 mt-1">
            <li>Total Coliform: {'<'}10 CFU/100mL (drinking water)</li>
            <li>E. coli: 0 CFU/100mL (drinking water)</li>
            <li>pH: 6.5-8.5</li>
            <li>Turbidity: {'<'}1 NTU (drinking), {'<'}5 NTU (recreational)</li>
          </ul>
        ) : (
          <ul className="list-disc pl-4 mt-1">
            <li>Storage Temperature: {'<'}40°F</li>
            <li>Sanitation Score: {'>'}90 acceptable</li>
            <li>Surface Samples: {'<'}5% positive acceptable</li>
          </ul>
        )}
      </div>
    </div>
  );
}