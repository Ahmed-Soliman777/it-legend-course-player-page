/**
 * @title ask question component
 * @description ask question pop up for make users add their inquiries about the course
 * @props { isOpen, value, onClose, onChange }
 */


"use client";

import "./AskQuestion.css";

import { AskQuestionProps } from "@/types";

const AskQuestion = ({ isOpen, value, onClose, onChange }: AskQuestionProps) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="ask-popup">
            <div
                className="overlay"
                onClick={onClose}></div>

            <div className="ask-popup-card" onClick={(event) => event.stopPropagation()}>
                <button className="close-btn" onClick={onClose} type="button">
                    ×
                </button>

                {/* pop up title */}

                <h3 className="course-name">Course Name Shown Here</h3>
                <h3 className="popup-title">Ask A Question</h3>

                {/* question form */}

                <textarea
                    name="ask-area"
                    id="ask-area-id"
                    placeholder="Ask a question"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                ></textarea>

                <button className="ask-btn" onClick={onClose} type="button">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AskQuestion;
