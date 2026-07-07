/**
 * @title course topics component
 * @descrtion here user will get all topics about course with progress bar
 */

import './CourseTopics.css'

import TopicCard from '../topic_card/TopicCard';
import './CourseTopics.css';

const CourseTopics = () => {
    return (
        <section className="course-topic-container">
            <h2>Topics For This Course</h2>

            <TopicCard
                data={[
                    {
                        topic: "Introduction to IT Legend"
                    },
                    {
                        topic: "Introduction to IT Legend"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        questions_no: 10,
                        duration: 20
                    },
                    {
                        topic: "Introduction to IT Legend"
                    },
                    {
                        topic: "Introduction to IT Legend"
                    },
                    {
                        topic: "Introduction to IT Legend"
                    }
                ]}
                title="Course Topics"
                duration="Duration: 2 hours"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <TopicCard
                data={[
                    {
                        topic: "Introduction to IT Legend"
                    },
                    {
                        topic: "Introduction to IT Legend"
                    },
                    {
                        topic: "Introduction to IT Legend",
                        questions_no: 10,
                        duration: 20
                    },
                    {
                        topic: "Introduction to IT Legend"
                    },
                    {
                        topic: "Introduction to IT Legend"
                    },
                    {
                        topic: "Introduction to IT Legend"
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
