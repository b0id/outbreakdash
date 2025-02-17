import React from 'react';
import { investigationTimeline } from '../../data/investigationFlow';

interface InvestigationFlowProps {
  currentPhase: 'initial' | 'testing' | 'confirmation';
}

export function InvestigationFlow({ currentPhase }: InvestigationFlowProps) {
  const currentPhaseData = investigationTimeline.find(
    phase => phase.phase === currentPhase
  );

  if (!currentPhaseData) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Investigation Phase:{' '}
          {currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1)}
        </h2>
        <p className="text-sm text-gray-600">
          {currentPhaseData.day} ({currentPhaseData.date})
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Key Findings</h3>
        <ul className="list-disc pl-5 space-y-2">
          {currentPhaseData.keyFindings.map((finding, index) => (
            <li key={index} className="text-gray-700">
              {finding}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Critical Questions
        </h3>
        <div className="space-y-6">
          {currentPhaseData.criticalQuestions.map((q, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-3">{q.question}</p>
              <div className="space-y-2">
                {q.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    className="w-full text-left p-2 rounded border hover:bg-blue-300 hover:text-white"
                    onClick={() => {
                      if (option.text === q.correctAnswer) {
                        alert(`Correct! ${q.explanation}`);
                      } else {
                        alert(`Incorrect. ${option.explanation}`);
                      }
                    }}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}