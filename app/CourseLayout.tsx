/**
 * @title CourseLayout client component
 * @description Lifts the wide-view state out of VideoPlayer.
 *   Renders a CSS-grid layout on desktop (>= 1025px) and a block layout on small screens.
 *   CourseTopics is rendered once and placed with grid areas.
 */

"use client";

import { useState } from "react";

import VideoPlayer from "@/components/video_player/VideoPlayer";
import CourseMaterials from "@/components/course_materials/CourseMaterials";
import CourseTopics from "@/components/course_topics/CourseTopics";
import Comments from "@/components/comments/Comments";
import { VideoProvider } from "@/context/VideoContext";

import styles from "./page.module.css";

const FIRST_VIDEO_URL = "/vid1.mp4";

const CourseLayout = () => {
  const [isWide, setIsWide] = useState<boolean>(false);

  return (
    <VideoProvider initialUrl={FIRST_VIDEO_URL}>
      <div
        className={`${styles.it_player_video} ${isWide ? styles.wide : ""}`}
      >
        {/* video player — area: video */}
        <div className={`${styles.videoArea} video-sticky-wrapper`}>
          <VideoPlayer
            isWide={isWide}
            onToggleWide={() => setIsWide((w) => !w)}
          />
        </div>

        {/* course materials + comments — area: content */}
        <div className={styles.contentArea}>
          <CourseMaterials />

          {/* course topics shown inline on small screens only */}
          <div className={styles.smallTopics}>
            <CourseTopics />
          </div>

          <Comments />
        </div>

        {/* course topics sidebar — area: topics (desktop only) */}
        <aside className={styles.topicsArea}>
          <CourseTopics />
        </aside>
      </div>
    </VideoProvider>
  );
};

export default CourseLayout;
