// src/components/visualization/DataVisualization.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { pathogenData } from '../../data/pathogens';
import { PathogenType } from '../../types';

interface DataVisualizationProps {
  pathogenType: PathogenType;
}

export function DataVisualization({ pathogenType }: DataVisualizationProps) {
  const data = pathogenData[pathogenType].epidemiology.cases;
  const treatmentData = pathogenData[pathogenType].treatment.options;

  return (
    <div className="space-y-8">
      {/* Case Progression Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Case Progression</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="counselors" 
                stroke="#8884d8" 
                name="Counselors" 
              />
              <Line 
                type="monotone" 
                dataKey="campers" 
                stroke="#82ca9d" 
                name="Campers" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Treatment Efficacy Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Treatment Efficacy</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={treatmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="efficacy" fill="#8884d8" name="Efficacy %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}