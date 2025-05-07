import { render, screen, fireEvent } from '@testing-library/react';
import UploadComponent from '../components/UploadComponent';
import { DocumentProvider } from '../context/DocumentContext';

jest.mock('../utils/fileUtils', () => ({
    extractText: jest.fn(() => Promise.resolve('Mock extracted text'))
  }));  

test('renders upload input', () => {
    render(
        <DocumentProvider>
          <UploadComponent />
        </DocumentProvider>
      );
      
  const input = screen.getByLabelText(/upload/i) || screen.getByRole('textbox') || screen.getByRole('button');
  expect(input).toBeInTheDocument();
});