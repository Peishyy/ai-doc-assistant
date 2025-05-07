import React, { createContext, useState } from 'react';

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [originalText, setOriginalText] = useState('');
  const [improvedText, setImprovedText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  return (
    <DocumentContext.Provider
      value={{
        originalText,
        setOriginalText,
        improvedText,
        setImprovedText,
        suggestions,
        setSuggestions,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};
