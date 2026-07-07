/**
 * 
 * @description it legend player page
 * @components Header - Comments - CourseMaterials - CourseTopics - VideoPlayer
 */


import Comments from "@/components/comments/Comments";
import CourseMaterials from "@/components/course_materials/CourseMaterials";
import CourseTopics from "@/components/course_topics/CourseTopics";
import Header from "@/components/header/Header";
import VideoPlayer from "@/components/video_player/VideoPlayer";

import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* player page header component*/}

      <Header />

      <div className={styles.it_player_video}>
        <div className={styles.mainContent}>

          {/* vide player component*/}
          <VideoPlayer />

          {/* course material component */}
          <CourseMaterials />


          {/* course topics component */}
          <div className={styles.smallTopics}>
            <CourseTopics />
          </div>

          {/* comments component */}
          <Comments />
        </div>

        <aside className={styles.largeTopics}>
          <CourseTopics />
        </aside>
      </div>
    </>

  );
}
