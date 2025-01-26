'use client'
import { courses } from "@/static/videos";
import ContentWatch from "../components/ContentWatch";
import { useParams } from "next/navigation";
export default function Course() {
  const [id] = useParams().id as string[];
  const course = courses.find((video) => video.id === Number(id));

  if (!course) {
    return <p>No course found!</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <ContentWatch courseName={course.title} videos={course.videos} />
      </div>
    </div>
  );
}
