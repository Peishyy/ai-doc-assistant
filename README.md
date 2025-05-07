# AI Document Assistant

A simple AI-powered frontend app that lets you upload a document, review suggested improvements, and accept or reject them easily.

## Features

- Upload `.txt`, `.pdf`, or `.docx` documents
- See original and improved versions side by side
- Suggestions are highlighted with options to accept/reject
- Basic keyword-based improvement engine (no backend used)
- State handled with React context
- Fully responsive and styled for demo

## How to Run

1. Clone the repo:
git clone https://github.com/your-username/ai-doc-assistant.git

2. Navigate to the project folder:
cd ai-doc-assistant

3. Install dependencies:
npm install

4. Start the app:
npm start

5. App will open on [http://localhost:3000](http://localhost:3000)

## Running Tests

To run all unit tests:
npm test


## User Guide

1. Click the Choose File button to upload a .txt, .pdf, or .docx document.

2. Once uploaded, you'll see:

- The Original Document on the left.
- The Improved Version on the right (with suggested improvements like grammar or clarity changes).

3. Below the documents, you'll find a Suggestions list showing:

- What word or phrase has a suggestion.
- Buttons to Accept or Reject each suggestion.

4. When you click Accept, the change is reflected in the improved version. Reject keeps it as-is.


## Notes

- Only frontend was built (React)
- Improvements are rule-based, no actual AI model is used yet
- Works best with `.txt` files




