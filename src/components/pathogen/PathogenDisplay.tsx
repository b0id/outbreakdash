// src/components/pathogen/PathogenDisplay.tsx
import React, { useState } from 'react';
import { pathogenData } from '../../data/pathogens';
import { PathogenDisplayProps } from '../../types';

const pathogenImages = {
  staphylococcus: {
    microscopy: "/images/pathogens/staph-microscopy.jpg",
    clinical: "/images/clinical/staph-rash.jpg",
    altMicro: "Gram-positive cocci in clusters, Gram stain",
    altClinical: "Characteristic staphylococcal skin infection"
  },
  streptococcus: {
    microscopy: "/images/pathogens/strep-microscopy.jpg",
    clinical: "/images/clinical/scarlet-fever-rash.jpg",
    altMicro: "Gram-positive cocci in chains, Gram stain",
    altClinical: "Characteristic scarlet fever rash"
  },
  shigella: {
    microscopy: "/images/pathogens/shigella-microscopy.jpg",
    clinical: "/images/clinical/shigella-symptoms.jpg",
    altMicro: "Gram-negative bacilli, Gram stain",
    altClinical: "Clinical presentation of shigellosis"
  }
};

export function PathogenDisplay({ pathogenType }: PathogenDisplayProps) {
    const pathogen = pathogenData[pathogenType];
    const [imageError, setImageError] = useState({
        microscopy: false,
        clinical: false
    });

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {pathogen.name}
            </h2>

            <div className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-3">
                    Pathogen Characteristics
                </h3>
                <dl className="grid grid-cols-1 gap-2">
                    <div className="border-b border-gray-200 pb-2">
                        <dt className="text-sm font-medium text-gray-600">Type</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                            {pathogen.characteristics.type}
                        </dd>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                        <dt className="text-sm font-medium text-gray-600">Transmission</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                            {pathogen.characteristics.transmission}
                        </dd>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                        <dt className="text-sm font-medium text-gray-600">Incubation Period</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                            {pathogen.characteristics.incubationPeriod}
                        </dd>
                    </div>
                </dl>
            </div>

            <div className="mt-2 space-y-2">
                <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">Microscopy</h3>
                    {!imageError.microscopy ? (
                        <img 
                            src={pathogenImages[pathogenType].microscopy}
                            alt={pathogenImages[pathogenType].altMicro}
                            className="rounded-lg w-full object-cover h-32"
                            onError={() => setImageError(prev => ({ ...prev, microscopy: true }))}
                        />
                    ) : (
                        <div className="rounded-lg w-full h-32 bg-gray-100 flex items-center justify-center">
                            <p className="text-gray-500 text-sm">Microscopy image unavailable</p>
                        </div>
                    )}
                    <p className="text-xs text-gray-500 mt-0">
                        {pathogenImages[pathogenType].altMicro}
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">Clinical Presentation</h3>
                    {!imageError.clinical ? (
                        <img 
                            src={pathogenImages[pathogenType].clinical}
                            alt={pathogenImages[pathogenType].altClinical}
                            className="rounded-lg w-full object-cover h-32"
                            onError={() => setImageError(prev => ({ ...prev, clinical: true }))}
                        />
                    ) : (
                        <div className="rounded-lg w-full h-32 bg-gray-100 flex items-center justify-center">
                            <p className="text-gray-500 text-sm">Clinical image unavailable</p>
                        </div>
                    )}
                    <p className="text-xs text-gray-500 mt-0">
                        {pathogenImages[pathogenType].altClinical}
                    </p>
                </div>
            </div>

            <div className="mb-6 mt-6">
                <h3 className="text-md font-medium text-gray-900 mb-3">
                    Common Symptoms
                </h3>
                <ul className="list-disc pl-4 space-y-1">
                    {pathogen.characteristics.commonSymptoms.map((symptom, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                            {symptom}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-md font-medium text-gray-900 mb-3">
                    Treatment Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">
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