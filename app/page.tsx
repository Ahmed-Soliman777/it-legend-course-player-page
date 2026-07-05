/**
 * 
 * @description it legend player page
 * @components Header - 
 */


import Header from "@/components/header/Header";
import VideoPlayer from "@/components/video_player/VideoPlayer";

export default function Home() {
  return (
    <>
      {/* player page header component*/}
      <Header />
      <VideoPlayer />
    </>
  );
}
