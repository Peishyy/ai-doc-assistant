import React, { useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';
import { extractText } from '../utils/fileUtils';

const UploadComponent = () => {
  const { setOriginalText, setImprovedText, setSuggestions } = useContext(DocumentContext);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const text = await extractText(file);
      setOriginalText(text);

      // Simple suggestion: replace "very" with "extremely"
      const replacements = {
        very: "extremely",
        really: "truly",
        good: "excellent",
        bad: "unacceptable",
        nice: "pleasant",
        big: "massive",
        small: "tiny",
        important: "crucial",
        fast: "rapid",
        slow: "sluggish",
      };
      
      let improved = text;
      const suggestions = [];
      
      Object.entries(replacements).forEach(([original, suggestion]) => {
        const regex = new RegExp(`\\b${original}\\b`, 'gi');
        const matches = [...improved.matchAll(regex)];
      
        matches.forEach((match) => {
          suggestions.push({ original: match[0], suggestion });
        });
      
        improved = improved.replace(regex, suggestion);
      });
      

      setImprovedText(improved);
      setSuggestions(suggestions);
    } catch (err) {
      alert("Error reading file: " + err.message);
      console.error(err);
    }
  };

  return (
    <div>
       <label htmlFor="file-upload">Upload File</label>
       <input
        id="file-upload"
        type="file"
        accept=".txt,.pdf,.docx"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default UploadComponent;
