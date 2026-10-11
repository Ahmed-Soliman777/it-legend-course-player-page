/**
 *
 * @title Curriculum icon compoent
 * @description for navegating to comment, asking question and leaderboard
 * @components AskQuestion Leaderboard
*/
"use client";

import { useState } from "react";

import { FaComment, FaQuestion } from "react-icons/fa";

import { MdLeaderboard } from "react-icons/md";

import AskQuestion from "@/components/ask_question/AskQuestion";

import Leaderboard from "@/components/leaderboard/Leaderboard";

import "./CurriculumIcon.css";


const CurriculumIcon = () => {

    // local states

    const [isAskPopupOpen, setIsAskPopupOpen] = useState(false);
    const [isLeaderboardPopupOpen, setIsLeaderboardPopupOpen] = useState(false);

    const [askQuestionValue, setAskQuestionValue] = useState<string>(() => {
        if (typeof window !== "undefined") {
            return sessionStorage.getItem("ask-question") || "";
        }
        return "";
    });


    // smooth scroll helper

    function scrollTo(id: string) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }


    // handle successful question submit

    function handleAskSubmit() {
        setAskQuestionValue("");
        sessionStorage.removeItem("ask-question");
        setIsAskPopupOpen(false);
    }


    return (
        <>

            <button
                type="button"
                title="Comments"
                aria-label="Scroll to comments"
                className="curriculum-icon"
                onClick={() => scrollTo("comments-section")}
            >
                <FaComment />
            </button>

            <button
                type="button"
                title="Ask a question"
                aria-label="Open ask a question popup"
                className="curriculum-icon"
                onClick={() => setIsAskPopupOpen(true)}
            >
                <FaQuestion />
            </button>

            <button
                type="button"
                title="Leaderboard"
                aria-label="Open leaderboard popup"
                className="curriculum-icon"
                onClick={() => setIsLeaderboardPopupOpen(true)}
            >
                <MdLeaderboard />
            </button>

            {/* ask question pop up */}
            <AskQuestion
                isOpen={isAskPopupOpen}
                value={askQuestionValue}
                onChange={(v) => {
                    setAskQuestionValue(v);
                    sessionStorage.setItem("ask-question", v);
                }}
                onClose={() => setIsAskPopupOpen(false)}
                onSubmit={handleAskSubmit}
            />

            {/* leaderboard pop up */}
            <Leaderboard
                isOpen={isLeaderboardPopupOpen}
                onClose={() => setIsLeaderboardPopupOpen(false)}
            />
        </>
    );
};

export default CurriculumIcon;
