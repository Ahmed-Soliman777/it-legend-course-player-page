/**
 * @title leaderboard component
 * @descrition this component to share top rated students depending on their performance
*/
"use client";

import "./Leaderboard.css";

import { LeaderboardData } from "@/data";

type LeaderboardProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Leaderboard = ({ isOpen, onClose }: LeaderboardProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-overlay" onClick={onClose}></div>

            <div className="leaderboard-card" onClick={(event) => event.stopPropagation()}>
                <button className="leaderboard-close" onClick={onClose} type="button">
                    ×
                </button>

                <div className="leaderboard-header">
                    <h3 className="leaderboard-course-name">Course Name Shown Here</h3>
                    <h3 className="leaderboard-title">Leaderboard</h3>
                </div>

                <div className="encourage">
                    <h1 className="encourage-icon">💪</h1>
                    <p>
                        عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا
                    </p>
                </div>

                <div className="leaderboard">
                    {LeaderboardData.map((_, i) => (
                        <div className="leaderboard-item" key={i}>
                            <div className="leaderboard-username"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard
