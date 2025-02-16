// src/components/visualization/OutbreakProgression.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { outbreakProgression } from '../../data/outbreakData';

export function OutbreakProgression() {
  return (
    <div className="space-y-4">
      {/* Symptoms Progression Chart */}
      <div className="h-72">
        <h3 className="text-lg font-semibold mb-2">Symptom Progression</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={outbreakProgression}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="06/19" stroke="red" label="Intervention Started" />
            <Line type="monotone" dataKey="symptoms.fever" name="Fever" stroke="#ff7300" />
            <Line type="monotone" dataKey="symptoms.soreThroat" name="Sore Throat" stroke="#8884d8" />
            <Line type="monotone" dataKey="symptoms.rash" name="Rash" stroke="#82ca9d" />
            <Line type="monotone" dataKey="symptoms.lymphadenopathy" name="Lymphadenopathy" stroke="#ffc658" />
            <Line type="monotone" dataKey="symptoms.giSymptoms" name="GI Symptoms" stroke="#ff0000" strokeDasharray="3 3"  // Makes the line dashed to highlight its minimal presence
/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Population Distribution Chart */}
      <div className="h-72">
        <h3 className="text-lg font-semibold mb-2">Case Distribution</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={outbreakProgression}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="06/19" stroke="red" label="Intervention Started" />
            <Line type="monotone" dataKey="population.counselors" name="Counselors" stroke="#8884d8" />
            <Line type="monotone" dataKey="population.campers" name="Campers" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}