/**
 * 
 * @description it legend player page
 * @components Header - CourseLayout (VideoPlayer, CourseMaterials, CourseTopics, Comments)
 */


import Header from "@/components/header/Header";
import CourseLayout from "./CourseLayout";

export default function Home() {
  return (
    <>
      {/* player page header component*/}

      <Header />

      <CourseLayout />
    </>

  );
}
