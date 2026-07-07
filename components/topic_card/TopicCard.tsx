/**
 * @title topic card
 * @description here course data will be displayed in the topic card
 * @props {title, description, duration}
 */

"use client"

import './TopicCard.css';

import { useEffect, useState } from 'react';

import { CourseTopicsProps } from '@/types';

import { FaLock } from "react-icons/fa";

import { FaSheetPlastic } from "react-icons/fa6";

const TopicCard = ({
    title,
    duration,
    description,
    data
}: CourseTopicsProps) => {



    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)


    useEffect(() => {
        function handleCollapse() {
            if (window.innerWidth > 1024) {
                setIsCollapsed(false);
            } else {
                setIsCollapsed(true);
            }
        };


        handleCollapse();

        window.addEventListener('resize', handleCollapse);

        return () => {
            window.removeEventListener('resize', handleCollapse);
        };
    }, []);



    function handleCollapseBtn() {
        setIsCollapsed(e => !e)
    }


    return (
        <div className="card-container">

            {/* displays at sm screen */}
            <div className="sm-title">
                <h3>{title}</h3>
                {/* collapse btn */}
                <button
                    onClick={handleCollapseBtn}
                >
                    {isCollapsed ? '+' : '-'}
                </button>
            </div>


            {/* displays at lg screen */}
            <div className="lg-title">
                <h3>{duration}</h3>
                <p>{description}</p>
            </div>


            {/* course data */}

            <ul
                className={`course-data-list ${isCollapsed ? 'collapsed' : 'expanded'}`}
            >
                {
                    data.map((topic, i) => (
                        <li
                            key={i}
                        >
                            <span className="topic-label">
                                <FaSheetPlastic />
                                {topic.topic}
                            </span>
                            {
                                i !== 2 ?
                                    (
                                        <>

                                            <FaLock />
                                        </>
                                    )
                                    :
                                    (
                                        <div className='quest'>
                                            <span className="quest_count">
                                                {topic.questions_no} QUESTIONS
                                            </span>

                                            <span className="quest_duration">
                                                {topic.duration} MINUTES
                                            </span>
                                        </div>
                                    )

                            }
                        </li>
                    ))
                }
            </ul>


        </div>
    )
}

export default TopicCard
