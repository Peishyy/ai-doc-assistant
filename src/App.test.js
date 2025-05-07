import { render, screen } from '@testing-library/react';
import App from './App';
import { DocumentProvider } from './context/DocumentContext';

jest.mock('./utils/fileUtils', () => ({
  extractText: jest.fn(() => Promise.resolve('Mock extracted text'))
}));


test('renders AI Document Assistant heading', () => {
  render(
    <DocumentProvider>
      <App />
    </DocumentProvider>
  );
  const heading = screen.getByText(/AI Document Assistant/i);
  expect(heading).toBeInTheDocument();
});
