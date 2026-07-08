/**
 * @title exam card component
 * @descriton here question and options will displayed
 */

'use client'

import './ExamCard.css';


import { ExamCardProps } from '@/types';


const ExamCard = ({
    question,
    questionIndex,
    selectedValue,
    onAnswerSelect,
}: ExamCardProps) => {
    return (
        <div className='exam-card-shell'>
            <div className='exam-card'>
                <div className='exam-card-header'>
                    <span className='exam-card-badge'>{questionIndex + 1}.</span>
                </div>

                <p className='exam-question'>
                    {question.question}
                </p>

                <div className='options-list'>
                    {question.options.map((option) => (
                        <label className='option-item' key={option}>
                            <input
                                type='radio'
                                name={`question-${questionIndex}`}
                                value={option}
                                checked={selectedValue === option}
                                onChange={() => onAnswerSelect(option)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExamCard
