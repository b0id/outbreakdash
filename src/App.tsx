// src/App.tsx
import React, { useState } from 'react';
import { PathogenDisplay } from './components/pathogen/PathogenDisplay';
import { MainDashboard } from './components/dashboard/MainDashboard';
import { PathogenType } from './types';

function App() {
  // State for the current pathogen display
  const [selectedPathogen, setSelectedPathogen] = useState<PathogenType>('staphylococcus');
  
  // State to toggle between original view and new dashboard
  const [showDashboard, setShowDashboard] = useState(false);

  // This is your original content
  const originalView = (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Camp Outbreak Investigation
        </h1>
      </header>

      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex gap-4">
          {(['staphylococcus', 'streptococcus', 'shigella'] as PathogenType[]).map((pathogen) => (
            <button
              key={pathogen}
              onClick={() => setSelectedPathogen(pathogen)}
              className={`px-4 py-2 rounded-lg ${
                selectedPathogen === pathogen
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {pathogen.charAt(0).toUpperCase() + pathogen.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto">
        <PathogenDisplay pathogenType={selectedPathogen} />
      </main>
    </div>
  );

  return (
    <>
      {/* Development toggle button - we can remove this later */}
      <button
        onClick={() => setShowDashboard(!showDashboard)}
        className="fixed top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded-lg z-50"
      >
        Switch to {showDashboard ? 'Original View' : 'Dashboard'}
      </button>

      {/* Conditional rendering based on which view we want to show */}
      {showDashboard ? <MainDashboard /> : originalView}
    </>
  );
}

export default App;