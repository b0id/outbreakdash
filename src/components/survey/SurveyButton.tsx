import React from 'react';

export const SurveyButton: React.FC = () => {
  const surveyUrl = "https://forms.gle/F41RCM1gCoAYfhez9";
  
  return (
    <button 
      onClick={() => window.open(surveyUrl, '_blank')}
      className="fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white 
                 font-bold py-3 px-6 rounded-lg shadow-lg z-50 flex items-center gap-2"
    >
      <span role="img" aria-label="clipboard">📋</span>
      Take Survey about Learning Experience
    </button>
  );
};