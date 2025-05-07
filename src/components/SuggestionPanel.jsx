import React, { useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';

const SuggestionPanel = () => {
  const { suggestions, improvedText, setImprovedText, setSuggestions } = useContext(DocumentContext);

  const handleAccept = (index) => {
    const { original, suggestion } = suggestions[index];
    const updated = improvedText.replace(new RegExp(`\\b${original}\\b`, 'i'), suggestion);
    setImprovedText(updated);

    const newSugg = [...suggestions];
    newSugg.splice(index, 1);
    setSuggestions(newSugg);
  };

  const handleReject = (index) => {
    const newSugg = [...suggestions];
    newSugg.splice(index, 1);
    setSuggestions(newSugg);
  };

  return (
    <div>
      <h3>Suggestions</h3>
      {suggestions.length === 0 ? (
        <p>No suggestions</p>
      ) : (
        suggestions.map((s, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            Replace <strong>{s.original}</strong> with <strong>{s.suggestion}</strong>
            <br />
            <button onClick={() => handleAccept(i)} style={{ marginRight: '10px' }}>Accept</button>
            <button onClick={() => handleReject(i)}>Reject</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SuggestionPanel;
