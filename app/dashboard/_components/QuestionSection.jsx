'use client'
import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useState } from 'react';

export default function QuestionSection({ mockInterviewQuestion, activeIndex, onSetActiveIndex }) {
  const handleQuestionClick = (index) => {
    onSetActiveIndex(index);
  };

  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser does not support text to speech");
    }
  };

  return (
    <div className='p-5 border rounded-lg my-20'>
      <div className='flex flex-wrap gap-3'>
        {mockInterviewQuestion &&
          mockInterviewQuestion.technical?.map((quest, i) => (
            <h2
              key={i}
              className={`p-2 text-nowrap px-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
                activeIndex === i ? 'bg-primary text-white' : 'bg-secondary'
              }`}
              onClick={() => handleQuestionClick(i)}
              style={{ minWidth: '80px' }} // Adjust width as needed
            >
              Question #{i + 1}
            </h2>
          ))}
      </div>
      {mockInterviewQuestion?.technical && mockInterviewQuestion?.technical.length > 0 && (
        <>
          <h2 className='my-5 text-sm md:text-lg'>{mockInterviewQuestion.technical[activeIndex]?.question}</h2>
          <Volume2 className='cursor-pointer mt-4 mb-28' onClick={() => textToSpeech(mockInterviewQuestion.technical[activeIndex]?.question)} />
        </>
      )}
      <div className='border rounded-lg p-5 bg-red-100'>
        <h2 className='flex gap-2 items-center text-primary'>
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2>Enable Video Web Cam and Microphone to Start Your AI Generated Mock Interview. It Has 5 questions which you can answer. At the end, you will get a report based on your answers.</h2>
      </div>
    </div>
  );
}
