import React from 'react';
import UploadComponent from './components/UploadComponent';
import DocumentViewer from './components/DocumentViewer';
import SuggestionPanel from './components/SuggestionPanel';
import { DocumentProvider } from './context/DocumentContext';


function App() {
  return (
    <DocumentProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ marginBottom: '20px' }}>AI Document Assistant</h1>

        <UploadComponent />

        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <div style={{ flex: 1 }}>
            <DocumentViewer type="original" />
          </div>
          <div style={{ flex: 1 }}>
            <DocumentViewer type="improved" />
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <SuggestionPanel />
        </div>
      </div>
    </DocumentProvider>
  );
}

export default App;

