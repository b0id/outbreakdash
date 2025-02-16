// src/App.tsx
import React, { useState } from 'react';
import { PathogenDisplay } from './components/pathogen/PathogenDisplay';
import { MainDashboard } from './components/dashboard/MainDashboard';
import { PathogenType } from './types';
import { EnvironmentalDisplay } from './components/visualization/EnvironmentalDisplay';

function App() {
  const [selectedPathogen, setSelectedPathogen] = useState<PathogenType>('staphylococcus');
  const [showDashboard, setShowDashboard] = useState(false);

  const originalView = (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="max-w-[95%] mx-auto mb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Camp Outbreak Investigation: Initial Scenario
        </h1>
        <p className="mt-2 text-gray-600">
          Summer 2025: An unknown rash/fever illness outbreak at Camp Pinewood
        </p>
      </header>

      <div className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-screen">
        {/* Column 1: Camp Context */}
        <div className="bg-white rounded-lg shadow p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">Camp Overview</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-900">Demographics</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Campers: 150 (Ages 8-14)</li>
                <li>• Staff: 50 (Ages 18-25)</li>
                <li>• Gender: ~50/50 split</li>
                <li>• Pre-existing conditions:</li>
                <li className="ml-4">- Several mild allergies</li>
                <li className="ml-4">- One counselor with Crohn's</li>
                <li className="ml-4">- One pregnant counselor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Location & Facilities</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Remote camp setting</li>
                <li>• Basic medical facilities</li>
                <li>• Well water supply</li>
                <li>• Communal dining hall</li>
                <li>• Shared cabin accommodations</li>
                <li>• Limited access to hospitals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Recent Activities</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Arrival day orientation</li>
                <li>• Group dining (all meals)</li>
                <li>• Swimming activities</li>
                <li>• Staff town visits permitted</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 2: Initial Reports */}
        <div className="bg-white rounded-lg shadow p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">Initial Presentation</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-900">Timeline</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• First cases: 24h post-arrival</li>
                <li>• Rapid spread within 48h</li>
                <li>• Primarily affecting counselors</li>
                <li>• New cases still emerging</li>
                <li>• Pattern suggests person-to-person</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Key Symptoms</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Fever (101-103°F)</li>
                <li>• Severe sore throat</li>
                <li>• Spreading rash</li>
                <li>• Lymph node swelling</li>
                <li>• Muscle aches</li>
                <li>• Headache</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Initial Concerns</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Rate of spread</li>
                <li>• Severity of symptoms</li>
                <li>• Limited medical resources</li>
                <li>• Vulnerable populations</li>
                <li>• Need for isolation measures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 3: Pathogen Information */}
        <div className="bg-white rounded-lg shadow p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">Suspected Pathogens</h2>
          <div className="space-y-2 mb-4">
            {(['staphylococcus', 'streptococcus', 'shigella'] as PathogenType[]).map((pathogen) => (
              <button
                key={pathogen}
                onClick={() => setSelectedPathogen(pathogen)}
                className={`w-full px-3 py-2 rounded-lg text-sm ${
                  selectedPathogen === pathogen
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pathogen.charAt(0).toUpperCase() + pathogen.slice(1)}
              </button>
            ))}
          </div>
          <PathogenDisplay pathogenType={selectedPathogen} />
        </div>

        {/* Column 4: Environmental Data */}
        <div className="bg-white rounded-lg shadow p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">Environmental Testing</h2>
          <EnvironmentalDisplay />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setShowDashboard(!showDashboard)}
        className="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 text-white rounded-lg z-10 hover:bg-gray-700"
      >
        Switch to {showDashboard ? 'Case Summary' : 'Investigation Dashboard'}
      </button>

      {showDashboard ? <MainDashboard /> : originalView}
    </>
  );
}

export default App;