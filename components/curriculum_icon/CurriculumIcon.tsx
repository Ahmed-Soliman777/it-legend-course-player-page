/**
 *
 * @title Curriculum icon compoent
 * @description for navegating to comment, asking question and leaderboard
 * @components AskQuestion Leaderboard
*/
"use client";

import { useEffect, useState } from "react";

import { FaComment, FaQuestion } from "react-icons/fa";

import { MdLeaderboard } from "react-icons/md";

import AskQuestion from "@/components/ask_question/AskQuestion";

import Leaderboard from "@/components/leaderboard/Leaderboard";

import "./CurriculumIcon.css";


const CurriculumIcon = () => {

    // local states

    const [isAskPopupOpen, setIsAskPopupOpen] = useState(false);
    const [isLeaderboardPopupOpen, setIsLeaderboardPopupOpen] = useState(false);

    const [askQuestionValue, setAskQuestionValue] = useState("");


    // use Effects for renders

    // set ask question session storage
    useEffect(() => {
        sessionStorage.setItem("ask-question", askQuestionValue);
    }, [askQuestionValue]);



    return (
        <>
            <span title="Add new comment" className="curriculum-icon">
                <FaComment />
            </span>

            <span
                title="Ask a question"
                className="curriculum-icon"
                onClick={() => setIsAskPopupOpen(true)}
            >
                <FaQuestion />
            </span>

            <span
                title="go to leaderboard"
                className="curriculum-icon"
                onClick={() => setIsLeaderboardPopupOpen(true)}
            >
                <MdLeaderboard />
            </span>

            {/* ask question pop up */}
            <AskQuestion
                isOpen={isAskPopupOpen}
                value={askQuestionValue}
                onChange={setAskQuestionValue}
                onClose={() => setIsAskPopupOpen(false)}
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
