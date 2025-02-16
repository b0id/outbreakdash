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
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {pathogen.name}
            </h2>

            <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Pathogen Characteristics
                </h3>
                <dl className="grid grid-cols-1 gap-4">
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

            <div className="mt-4 space-y-4">
                <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Microscopy</h3>
                    {!imageError.microscopy ? (
                        <img 
                            src={pathogenImages[pathogenType].microscopy}
                            alt={pathogenImages[pathogenType].altMicro}
                            className="rounded-lg w-full object-cover h-48"
                            onError={() => setImageError(prev => ({ ...prev, microscopy: true }))}
                        />
                    ) : (
                        <div className="rounded-lg w-full h-48 bg-gray-100 flex items-center justify-center">
                            <p className="text-gray-500">Microscopy image unavailable</p>
                        </div>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                        {pathogenImages[pathogenType].altMicro}
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Clinical Presentation</h3>
                    {!imageError.clinical ? (
                        <img 
                            src={pathogenImages[pathogenType].clinical}
                            alt={pathogenImages[pathogenType].altClinical}
                            className="rounded-lg w-full object-cover h-48"
                            onError={() => setImageError(prev => ({ ...prev, clinical: true }))}
                        />
                    ) : (
                        <div className="rounded-lg w-full h-48 bg-gray-100 flex items-center justify-center">
                            <p className="text-gray-500">Clinical image unavailable</p>
                        </div>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                        {pathogenImages[pathogenType].altClinical}
                    </p>
                </div>
            </div>

            <div className="mb-8 mt-8">
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