// src/App.tsx
import React, { useState } from 'react';
import { PathogenDisplay } from './components/pathogen/PathogenDisplay';
import { MainDashboard } from './components/dashboard/MainDashboard';
import { PathogenType } from './types';

function App() {
  const [selectedPathogen, setSelectedPathogen] = useState<PathogenType>('staphylococcus');
  const [showDashboard, setShowDashboard] = useState(false);

  const originalView = (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Camp Outbreak Investigation: Initial Scenario
        </h1>
        <p className="mt-2 text-gray-600">
          Summer 2025: A respiratory illness outbreak at Camp Pinewood
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Camp Context and Population Details */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Camp Overview</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Population Demographics</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Campers</h4>
                  <ul className="mt-1 text-gray-600 text-sm list-disc pl-4">
                    <li>Ages: 8-14 years old</li>
                    <li>Gender: 60% female, 40% male</li>
                    <li>Total: 150 campers</li>
                    <li>Pre-existing conditions: Mild seasonal allergies (few cases)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Staff</h4>
                  <ul className="mt-1 text-gray-600 text-sm list-disc pl-4">
                    <li>Ages: 18-25 years old</li>
                    <li>Gender: 50% female, 50% male</li>
                    <li>Total: 50 staff members</li>
                    <li>Notable conditions: One counselor with Crohn's disease, one pregnant</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Facility Information</h3>
              <ul className="text-gray-600 text-sm list-disc pl-4">
                <li>Remote location with limited medical facilities</li>
                <li>Small infirmary with basic supplies</li>
                <li>Water from local well (treated, occasional discoloration)</li>
                <li>Communal dining hall</li>
                <li>Shared cabin accommodations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 2: Initial Reports and Clinical Presentation */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Initial Presentation</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Timeline</h3>
              <ul className="text-gray-600 text-sm list-disc pl-4">
                <li>First cases: 24 hours post-arrival</li>
                <li>Rapid spread within 48 hours</li>
                <li>Primarily affecting counselors initially</li>
                <li>New cases still emerging</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Clinical Symptoms</h3>
              <ul className="text-gray-600 text-sm list-disc pl-4">
                <li>Spreading rash (varying appearance)</li>
                <li>Fever and chills</li>
                <li>Severe sore throat</li>
                <li>Muscle aches</li>
                <li>Lymph node swelling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Recent Activities</h3>
              <ul className="text-gray-600 text-sm list-disc pl-4">
                <li>Common meals in dining hall</li>
                <li>Shared water sources</li>
                <li>Group activities</li>
                <li>Some counselors visited local diner</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 3: Differential Diagnosis Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Suspected Pathogens</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Select a pathogen to review its characteristics and compare with current outbreak:
              </p>
              <div className="space-y-2 mb-6">
                {(['staphylococcus', 'streptococcus', 'shigella'] as PathogenType[]).map((pathogen) => (
                  <button
                    key={pathogen}
                    onClick={() => setSelectedPathogen(pathogen)}
                    className={`w-full px-4 py-2 rounded-lg ${
                      selectedPathogen === pathogen
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pathogen.charAt(0).toUpperCase() + pathogen.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <PathogenDisplay pathogenType={selectedPathogen} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Investigation Objectives</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="text-gray-600">
              <span className="font-medium text-gray-900">Identify Pathogen:</span>
              <br />Determine the causative agent through clinical presentation and laboratory testing
            </li>
            <li className="text-gray-600">
              <span className="font-medium text-gray-900">Control Spread:</span>
              <br />Implement appropriate isolation and prevention measures
            </li>
            <li className="text-gray-600">
              <span className="font-medium text-gray-900">Treat Cases:</span>
              <br />Provide appropriate medical intervention based on identification
            </li>
          </ul>
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