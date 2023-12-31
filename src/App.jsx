import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './App.css';
import axios from 'axios';

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
      // console.log(res.data.results);
      setFlashcards(
        res.data.results.map((questionItem, index) => {
          // console.log(questionItem, index);
          const answer = decodeString(questionItem.correct_answer);
          const options = [...questionItem.incorrect_answer.map((a) => decodeString(a)), answer];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 5),
          };
        }),
      );
      console.log(setFlashcards);
    });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div className="container">
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
