/**
 * 
 * @title Curriculum icon compoent
 * @description for navegating to comment, asking question and leaderboard
 */


import './CurriculumIcon.css'

import { FaQuestion, FaComment } from "react-icons/fa";

import { MdLeaderboard } from "react-icons/md";


const CurriculumIcon = () => {
    return (
        <>
            <span title='Add new comment' className="curriculum-icon">
                <FaComment />
            </span>
            <span title='Ask a question' className="curriculum-icon">
                <FaQuestion />
            </span>
            <span title='go to leaderboard' className="curriculum-icon">
                <MdLeaderboard />
            </span>
        </>
    )
}

export default CurriculumIcon
