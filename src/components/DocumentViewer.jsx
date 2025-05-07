import React, { useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';

const DocumentViewer = ({ type }) => {
  const { originalText, improvedText } = useContext(DocumentContext);
  const title = type === 'original' ? 'Original' : 'Improved';
  const content = type === 'original' ? originalText : improvedText;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', background: '#f9f9f9' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default DocumentViewer;
