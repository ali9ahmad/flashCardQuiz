import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  // console.log(flashcards);
  return (
    <div>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'what is 1 + 3',
    answer: '4',
    options: ['2', '3', '4', '6'],
  },
  {
    id: 2,
    question: 'question 2',
    answer: 'answer 2',
    options: ['answer 2', 'answer 3', 'answer 4', 'answer 6'],
  },
];
console.log(SAMPLE_FLASHCARDS);
