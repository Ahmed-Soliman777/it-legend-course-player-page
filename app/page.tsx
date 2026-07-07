/**
 * 
 * @description it legend player page
 * @components Header - 
 */


import Comments from "@/components/comments/Comments";
import CourseMaterials from "@/components/course_materials/CourseMaterials";
import CourseTopics from "@/components/course_topics/CourseTopics";
import Header from "@/components/header/Header";
import VideoPlayer from "@/components/video_player/VideoPlayer";

export default function Home() {
  return (
    <>
      {/* player page header component*/}
      <Header />

      {/* vide player component*/}
      <VideoPlayer />

      {/* course material component */}
      <CourseMaterials />

      {/* course topics component */}
      <CourseTopics />

      {/* comments component */}
      <Comments />
    </>
  );
}
