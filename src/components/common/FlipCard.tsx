// src/components/common/FlipCard.tsx
import React, { useState } from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;  // This will be our chart
  backContent: React.ReactNode;   // This will be our spreadsheet
  title?: string;
  defaultView?: 'front' | 'back';
  titleClassName?: string;
}

export function FlipCard({ 
  frontContent, 
  backContent, 
  title, 
  defaultView = 'back', // Setting default to show spreadsheet first
  titleClassName = '',
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(defaultView === 'back');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {title && <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>}
      
      <div className="relative">
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="absolute top-2 right-2 z-10 px-3 py-1 bg-gray-100 
                     hover:bg-gray-200 rounded-md text-sm text-gray-600"
        >
          {isFlipped ? 'Show Chart' : 'Show Data'}
        </button>

        <div className={`transform transition-all duration-500`}>
          {/* The Chart View */}
          <div className={`${isFlipped ? 'hidden' : 'block'}`}>
            {frontContent}
          </div>
          {/* The Spreadsheet View */}
          <div className={`${isFlipped ? 'block' : 'hidden'}`}>
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}