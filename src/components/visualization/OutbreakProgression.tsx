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

interface OutbreakProgressionProps {
  phase: 'initial' | 'testing' | 'confirmation';
}

// Helper: Returns the maximum day number to be unveiled based on phase.
const getMaxUnveiledDay = (phase: 'initial' | 'testing' | 'confirmation'): number => {
  if (phase === 'initial') return 1;
  if (phase === 'testing') return 3;
  return 6; // confirmation
};

// Helper: Converts a hex color to a faded RGBA string (alpha 0.3)
const fadeColor = (color: string): string => {
  if (color === "#ff7300") return "rgba(255,115,0,0.3)";
  if (color === "#8884d8") return "rgba(136,132,216,0.3)";
  if (color === "#82ca9d") return "rgba(130,201,157,0.3)";
  if (color === "#ffc658") return "rgba(255,198,88,0.3)";
  if (color === "#ff0000") return "rgba(255,0,0,0.3)";
  return color;
};

const OutbreakCharts: React.FC<OutbreakProgressionProps> = ({ phase }) => {
  const maxUnveiledDay = getMaxUnveiledDay(phase);

  // Factory to create a custom dot renderer.
  const makeCustomDot = (baseColor: string) => (props: any) => {
    const { cx, cy, payload } = props;
    const dayNumber = parseInt(payload.day.replace('Day ', ''));
    const isUnveiled = dayNumber <= maxUnveiledDay;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke="none"
        fill={isUnveiled ? baseColor : fadeColor(baseColor)}
      />
    );
  };

  return (
    <div className="space-y-4">
      {/* Chart 1: Symptom Progression */}
      <div className="h-72">
        <h3 className="text-lg font-semibold mb-2">Symptom Progression</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={outbreakProgression}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Always show reference line for context */}
            <ReferenceLine x="06/19" stroke="red" label="Intervention Started" />
            <Line
              type="monotone"
              dataKey="symptoms.fever"
              name="Fever"
              stroke="#ff7300"
              dot={makeCustomDot("#ff7300")}
            />
            <Line
              type="monotone"
              dataKey="symptoms.soreThroat"
              name="Sore Throat"
              stroke="#8884d8"
              dot={makeCustomDot("#8884d8")}
            />
            <Line
              type="monotone"
              dataKey="symptoms.rash"
              name="Rash"
              stroke="#82ca9d"
              dot={makeCustomDot("#82ca9d")}
            />
            <Line
              type="monotone"
              dataKey="symptoms.lymphadenopathy"
              name="Lymphadenopathy"
              stroke="#ffc658"
              dot={makeCustomDot("#ffc658")}
            />
            <Line
              type="monotone"
              dataKey="symptoms.giSymptoms"
              name="GI Symptoms"
              stroke="#ff0000"
              strokeDasharray="3 3"
              dot={makeCustomDot("#ff0000")}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2: Testing Progress */}
      <div className="h-72">
        <h3 className="text-lg font-semibold mb-2">Testing Progress</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={testingProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* You could add a reference line here as needed */}
            <Line
              type="monotone"
              dataKey="rapidStrepPositive"
              name="Rapid Strep Positive"
              stroke="#ff7300"
              dot={makeCustomDot("#ff7300")}
            />
            <Line
              type="monotone"
              dataKey="throatCulturePositive"
              name="Throat Culture Positive"
              stroke="#8884d8"
              dot={makeCustomDot("#8884d8")}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const OutbreakTables: React.FC<OutbreakProgressionProps> = ({ phase }) => {
  const maxUnveiledDay = getMaxUnveiledDay(phase);
  return (
    <div className="space-y-4 p-4">
      {/* Table 1: Symptoms & Population Data */}
      <div className="overflow-auto">
        <h3 className="text-lg font-bold mb-2 text-black">Symptom & Population Data</h3>
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
            {outbreakProgression.map((item, index) => {
              const dayNumber = parseInt(item.day.replace('Day ', ''));
              const isUnveiled = dayNumber <= maxUnveiledDay;
              return (
                <tr key={index} className={isUnveiled ? '' : 'opacity-50'}>
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
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table 2: Testing Progress Data */}
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
            {testingProgress.map((item, index) => {
              const dayNumber = parseInt(item.day.replace('Day ', ''));
              const isUnveiled = dayNumber <= maxUnveiledDay;
              return (
                <tr key={index} className={isUnveiled ? '' : 'opacity-50'}>
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export function OutbreakProgression({ phase }: OutbreakProgressionProps) {
  return (
    <FlipCard
      title="Outbreak Progression"
      frontContent={<OutbreakCharts phase={phase} />}
      backContent={<OutbreakTables phase={phase} />}
      defaultView="back"
    />
  );
}