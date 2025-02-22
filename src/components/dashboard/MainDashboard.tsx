import React, { useState } from 'react';
import { PathogenDisplay } from '../pathogen/PathogenDisplay';
import { DataVisualization } from '../visualization/DataVisualization';
import { PathogenType } from '../../types';
import { OutbreakProgression } from '../visualization/OutbreakProgression';
import { TestingData } from '../visualization/TestingData';
import { InvestigationFlow } from '../investigation/InvestigationFlow';

export function MainDashboard() {
  const [selectedPathogen, setSelectedPathogen] = useState<PathogenType>('staphylococcus');
  const [investigationPhase, setInvestigationPhase] = useState<'initial' | 'testing' | 'confirmation'>('initial');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="max-w-[95%] mx-auto mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Camp Outbreak Investigation
          </h1>
          
        </div>

        <div className="mt-4 bg-white rounded-lg p-4 shadow">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Investigation Timeline: June 15-24, 2025
            </div>
            <div className="flex gap-4">
              {['initial', 'testing', 'confirmation'].map((phase) => (
                <button
                  key={phase}
                  onClick={() => setInvestigationPhase(phase as typeof investigationPhase)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    investigationPhase === phase
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {phase.charAt(0).toUpperCase() + phase.slice(1)} Phase
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[95%] mx-auto">
        {/* On mobile: one column; on large screens: 4 columns where flip card occupies 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-screen">
          {/* Primary Data (Flip Card with OutbreakProgression) */}
          <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-3">Symptom & Population Data</h2>
            <OutbreakProgression phase={investigationPhase} defaultView="back" />
          </div>

          {/* Testing Results Section */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-3">Testing Results</h2>
            <TestingData pathogenType={selectedPathogen} />
          </div>

          {/* Investigation Flow / Exercises */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-3">Investigation Progress</h2>
            <InvestigationFlow currentPhase={investigationPhase} />
            <div className="mt-4 bg-gray-50 rounded p-3">
              <h3 className="font-semibold text-sm mb-2">
                {investigationPhase === 'initial' && 'Initial Assessment Phase'}
                {investigationPhase === 'testing' && 'Laboratory Testing Phase'}
                {investigationPhase === 'confirmation' && 'Confirmation Phase'}
              </h3>
              <p className="text-sm text-gray-600">
                {investigationPhase === 'initial' &&
                  'Analyzing initial symptom patterns and distribution among camp population.'}
                {investigationPhase === 'testing' &&
                  'Conducting targeted testing based on symptom patterns to identify causative agent.'}
                {investigationPhase === 'confirmation' &&
                  'Reviewing all evidence to confirm Streptococcal infection as the outbreak cause.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}