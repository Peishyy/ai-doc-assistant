import React, { useState } from 'react';
import './App.css';

function App() {
  const [fileName, setFileName] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [improvedText, setImprovedText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const text = await file.text();
      setOriginalText(text);

      const improved = text.replace(/very/g, 'extremely');
      setImprovedText(improved);

      const suggestionList = [];
      const regex = /very/g;
      let match;
      while ((match = regex.exec(text)) !== null) {
        suggestionList.push({
          id: match.index,
          original: 'very',
          suggestion: 'extremely',
        });
      }
      setSuggestions(suggestionList);
    }
  };

  return (
    <div className="App">
      <h1>AI Document Assistant</h1>
      <input type="file" onChange={handleFileUpload} accept=".txt,.pdf,.docx" />
      {loading && <p>Loading...</p>}
      <div className="viewer">
        <div className="pane">
          <h2>Original ({fileName})</h2>
          <pre>{originalText}</pre>
        </div>
        <div className="pane">
          <h2>Improved</h2>
          <pre>{improvedText}</pre>
        </div>
      </div>
      <div className="suggestions">
        <h3>Suggestions</h3>
        {suggestions.map((s) => (
          <div key={s.id}>
            Replace "<b>{s.original}</b>" with "<b>{s.suggestion}</b>"
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;