// src/components/pathogen/PathogenDisplay.tsx

import React from 'react';
import { pathogenData } from '../../data/pathogens';
import { PathogenDisplayProps } from '../../types';

// This component displays detailed information about a selected pathogen
// It receives the pathogen type as a prop and uses that to look up the correct data
export function PathogenDisplay({ pathogenType }: PathogenDisplayProps) {
    // We retrieve the specific pathogen data using the pathogenType prop
    const pathogen = pathogenData[pathogenType];

    // The component is structured in sections to organize the information logically
    return (
        <div className="bg-white rounded-lg shadow p-6">
            {/* Main heading showing the pathogen name */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {pathogen.name}
            </h2>

            {/* Characteristics section */}
            <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Pathogen Characteristics
                </h3>
                <dl className="grid grid-cols-1 gap-4">
                    {/* Each piece of information is presented in a definition list */}
                    <div className="border-b border-gray-200 pb-3">
                        <dt className="text-sm font-medium text-gray-600">Type</dt>
                        <dd className="mt-1 text-base text-gray-900">
                            {pathogen.characteristics.type}
                        </dd>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                        <dt className="text-sm font-medium text-gray-600">Transmission</dt>
                        <dd className="mt-1 text-base text-gray-900">
                            {pathogen.characteristics.transmission}
                        </dd>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                        <dt className="text-sm font-medium text-gray-600">Incubation Period</dt>
                        <dd className="mt-1 text-base text-gray-900">
                            {pathogen.characteristics.incubationPeriod}
                        </dd>
                    </div>
                </dl>
            </div>

            {/* Symptoms section with a list of common symptoms */}
            <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Common Symptoms
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                    {pathogen.characteristics.commonSymptoms.map((symptom, index) => (
                        <li key={index} className="text-gray-700">
                            {symptom}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Treatment section showing available options */}
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Treatment Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">
                        First-line Treatment: {pathogen.treatment.firstLine}
                    </p>
                    <p className="text-sm text-gray-600">
                        Typical Duration: {pathogen.treatment.duration}
                    </p>
                </div>
            </div>
        </div>
    );
}