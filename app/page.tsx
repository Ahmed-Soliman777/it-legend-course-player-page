/**
 * 
 * @description it legend player page
 * @components Header - 
 */


import CourseMaterials from "@/components/course_materials/CourseMaterials";
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
    </>
  );
}
