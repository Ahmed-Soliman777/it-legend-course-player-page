/**
 * @title exam component
 * @description this component is responsible for course exam for each level
 * @component Exam
 * @props { duration, examKey, onClose }
*/

'use client'

import './Exam.css'

import ExamCard from './../exam_card/ExamCard';

import { useEffect, useState } from 'react';

import { MdKeyboardArrowLeft } from "react-icons/md";

import { LuTimer } from "react-icons/lu";

import { ExamProps } from '@/types';


import { questions } from '@/data';





const Exam = ({ duration, examKey, onClose }: ExamProps) => {

  function readStoredExam(defaultDuration: number) {

    if (typeof window === 'undefined') {
      return null;
    }

    const storedExam = window.sessionStorage.getItem(examKey);

    if (!storedExam) {
      return null;
    }

    try {


      const parsedExam = JSON.parse(storedExam);


      return {
        currentQuestionIndex: parsedExam.currentQuestionIndex || 0,
        answers: parsedExam.answers || {},
        remainingTime: parsedExam.remainingTime || defaultDuration * 60
      };

    } catch {
      return null;
    }
  };

  const storedExam = readStoredExam(duration);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(storedExam?.currentQuestionIndex || 0);

  const [answers, setAnswers] = useState<Record<number, string>>(storedExam?.answers || {});

  const [remainingTime, setRemainingTime] = useState<number>(storedExam?.remainingTime || duration * 60);


  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(examKey, JSON.stringify({
      currentQuestionIndex,
      answers,
      remainingTime,
      duration
    }));
  }, [answers, currentQuestionIndex, duration, examKey, remainingTime]);

  useEffect(() => {
    if (remainingTime <= 0) {
      return;
    }

    const timerId = window.setInterval(() => {
      setRemainingTime((prev: number) => {
        const nextValue = prev - 1;

        if (nextValue <= 0) {
          window.clearInterval(timerId);
          return 0;
        }

        return nextValue;
      });
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [remainingTime]);

  const currentQuestion = questions[currentQuestionIndex];

  function handleAnswerSelect(value: string) {
    const updatedAnswers = { ...answers, [currentQuestionIndex]: value };
    setAnswers(updatedAnswers);
  }


  function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  return (
    <div className='exam-overlay'>
      <div className='exam'>


        <div className='exam-header'>


          <button className='exam-close-btn' onClick={onClose}>

            <MdKeyboardArrowLeft size={24} />

          </button>

          <div className="exam-time">


            <span className='exam-duration'>
              <LuTimer />
              {formatTime(remainingTime)}
            </span>
          </div>

        </div>

        <div className='exam-stepper'>
          {questions.map((_, index) => (
            <button
              key={index}
              className={`step-pill ${index === currentQuestionIndex ? 'active' : ''}`}
              onClick={() => setCurrentQuestionIndex(index)}
              type='button'
            >
              {index + 1}
            </button>
          ))}
        </div>



        {
          currentQuestion &&


          <ExamCard
            question={currentQuestion}
            questionIndex={currentQuestionIndex}
            selectedValue={answers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
          />
        }
      </div>
    </div>
  )
}

export default Exam
