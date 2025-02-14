import React, { useState } from 'react';
import { PathogenDisplay } from '../pathogen/PathogenDisplay';
import { DataVisualization } from '../visualization/DataVisualization';
import { PathogenType } from '../../types';
import { OutbreakProgression } from '../visualization/OutbreakProgression';
import { TestingData } from '../visualization/TestingData';
export function MainDashboard() {
  // We still maintain the ability to view different pathogen references
  const [selectedPathogen, setSelectedPathogen] = useState<PathogenType>('staphylococcus');
  
  // Adding an investigation phase tracker could help tell our story
  const [investigationPhase, setInvestigationPhase] = useState<'initial' | 'testing' | 'confirmation'>('initial');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Camp Outbreak Investigation
          </h1>
          
          {/* We're keeping the pathogen selector as a reference tool */}
          <div className="flex gap-4">
            <span className="text-sm text-gray-600 self-center">Reference Pathogen:</span>
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

        {/* Adding a timeline indicator for the investigation */}
        <div className="mt-4 bg-white rounded-lg p-4 shadow">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Investigation Timeline: June 15-18, 2025
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

      <main className="max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Left column stays exactly the same */}
    <div className="space-y-8">
      <PathogenDisplay pathogenType={selectedPathogen} />
    </div>
    
    {/* This is the new right column content */}
    <div className="space-y-8">
      {/* Phase-based content will show different things based on which phase button is clicked */}
      {investigationPhase === 'initial' && (
        <OutbreakProgression />
      )}
      {investigationPhase === 'testing' && (
        <TestingData pathogenType={selectedPathogen} />
      )}
      {investigationPhase === 'confirmation' && (
        <>
          <OutbreakProgression />
          <TestingData pathogenType={selectedPathogen} />
        </>
      )}

      {/* This adds the explanation text below the visualizations */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">
          {investigationPhase === 'initial' && 'Initial Assessment Phase'}
          {investigationPhase === 'testing' && 'Laboratory Testing Phase'}
          {investigationPhase === 'confirmation' && 'Confirmation Phase'}
        </h3>
        <p className="text-gray-600">
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