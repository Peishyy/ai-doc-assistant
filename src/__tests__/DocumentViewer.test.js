import { DocumentProvider } from '../context/DocumentContext';
import { render, screen } from '@testing-library/react';
import DocumentViewer from '../components/DocumentViewer';

test('renders document viewer panes with provided content', () => {
    render(
        <DocumentProvider>
          <DocumentViewer type="original" />
          <DocumentViewer type="improved" />
        </DocumentProvider>
      );
      
  expect(screen.getByText(/Original/i)).toBeInTheDocument();
  expect(screen.getByText(/Improved/i)).toBeInTheDocument();
});
