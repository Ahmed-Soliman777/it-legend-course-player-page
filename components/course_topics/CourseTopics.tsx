/**
 * @title course topics component
 * @descrtion here user will get all topics about course with progress bar
 */

import './CourseTopics.css'

import TopicCard from '../topic_card/TopicCard';

const CourseTopics = () => {
    return (
        <section className="course-topic-container">
            <h2>Topics For This Course</h2>

            <div className="progress-section">
                <div className="progress-label-row">
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: '67%' }} />
                    </div>
                </div>

            </div>

            <TopicCard
                data={[
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,
                        video: "/vid1.mp4"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,
                        video: "/vid2.mp4"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        questions_no: 10,
                        duration: 20,
                        isQuiz: true
                    },
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,

                        video: "/vid3.mp4"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,

                        video: "/vid4.mp4"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,
                        video: "/vid5.mp4"
                    }
                ]}
                title="Course Topics"
                duration="Duration: 2 hours"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <TopicCard
                data={[
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,
                        video: "/vid1.mp4"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,
                        video: "/vid2.mp4"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        questions_no: 10,
                        duration: 20,
                        isQuiz: true
                    },
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,

                        video: "/vid3.mp4"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,

                        video: "/vid4.mp4"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        isQuiz: false,
                        video: "/vid5.mp4"
                    }
                ]}
                title="Course Topics"
                duration="Duration: 2 hours"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />


        </section>
    );
};

export default CourseTopics;
