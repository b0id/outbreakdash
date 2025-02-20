import React from 'react';
import { FlipCard } from '../common/FlipCard';
import { outbreakProgression, testingProgress } from '../../data/outbreakData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

const OutbreakCharts: React.FC = () => {
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
            <Line
              type="monotone"
              dataKey="symptoms.giSymptoms"
              name="GI Symptoms"
              stroke="#ff0000"
              strokeDasharray="3 3"
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
};

const OutbreakTables: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      {/* Table for outbreakProgression (Symptom Count Data) */}
      <div className="overflow-auto">
        <h3 className="text-lg font-bold mb-2 text-black">Symptom and Population Data</h3>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 text-black">Day</th>
              <th className="border p-2 text-black">Date</th>
              <th className="border p-2 text-black">Total Cases</th>
              <th className="border p-2 text-black">Fever</th>
              <th className="border p-2 text-black">Sore Throat</th>
              <th className="border p-2 text-black">Rash</th>
              <th className="border p-2 text-black">Lymphadenopathy</th>
              <th className="border p-2 text-black">GI Symptoms</th>
              <th className="border p-2 text-black">Counselors</th>
              <th className="border p-2 text-black">Campers</th>
            </tr>
          </thead>
          <tbody>
            {outbreakProgression.map((item, index) => (
              <tr key={index}>
                <td className="border p-2 text-black">{item.day}</td>
                <td className="border p-2 text-black">{item.date}</td>
                <td className="border p-2 text-black">{item.totalCases}</td>
                <td className="border p-2 text-black">{item.symptoms.fever}</td>
                <td className="border p-2 text-black">{item.symptoms.soreThroat}</td>
                <td className="border p-2 text-black">{item.symptoms.rash}</td>
                <td className="border p-2 text-black">{item.symptoms.lymphadenopathy}</td>
                <td className="border p-2 text-black">{item.symptoms.giSymptoms}</td>
                <td className="border p-2 text-black">{item.population.counselors}</td>
                <td className="border p-2 text-black">{item.population.campers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table for testingProgress (Testing Data) */}
      <div className="overflow-auto">
        <h3 className="text-lg font-bold mb-2 text-black">Testing Progress Data</h3>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 text-black">Day</th>
              <th className="border p-2 text-black">Date</th>
              <th className="border p-2 text-black">Rapid Strep</th>
              <th className="border p-2 text-black">Rapid Strep Positive</th>
              <th className="border p-2 text-black">Throat Culture</th>
              <th className="border p-2 text-black">Throat Culture Positive</th>
              <th className="border p-2 text-black">Staph Culture</th>
              <th className="border p-2 text-black">Staph Culture Positive</th>
              <th className="border p-2 text-black">Shigella Test</th>
              <th className="border p-2 text-black">Shigella Positive</th>
            </tr>
          </thead>
          <tbody>
            {testingProgress.map((item, index) => (
              <tr key={index}>
                <td className="border p-2 text-black">{item.day}</td>
                <td className="border p-2 text-black">{item.date}</td>
                <td className="border p-2 text-black">{item.rapidStrep}</td>
                <td className="border p-2 text-black">{item.rapidStrepPositive}</td>
                <td className="border p-2 text-black">{item.throatCulture}</td>
                <td className="border p-2 text-black">{item.throatCulturePositive}</td>
                <td className="border p-2 text-black">{item.staphCulture}</td>
                <td className="border p-2 text-black">{item.staphCulturePositive}</td>
                <td className="border p-2 text-black">{item.shigellaTest}</td>
                <td className="border p-2 text-black">{item.shigellaPositive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export function OutbreakProgression() {
  return (
    <FlipCard
      title="Outbreak Progression"
      frontContent={<OutbreakCharts />}
      backContent={<OutbreakTables />}
      defaultView="back" // Set the table view as default so the spreadsheet is visible.
    />
  );
}