import { render, screen } from '@testing-library/react';
import SuggestionPanel from '../components/SuggestionPanel';
import { DocumentProvider } from '../context/DocumentContext';

test('renders suggestion section', () => {
    render(
        <DocumentProvider>
          <SuggestionPanel />
        </DocumentProvider>
      );
      
  const suggestions = screen.getAllByText(/Suggestions/i);
  expect(suggestions.length).toBeGreaterThan(0);
});

