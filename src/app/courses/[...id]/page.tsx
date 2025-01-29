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
    <div className="md:container mx-auto mt-0 lg:mt-10 mb-10">
        <ContentWatch courseName={course.title} videos={course.videos} />
    </div>
  );
}
