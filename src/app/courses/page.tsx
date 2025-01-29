'use client'
import { courses, CoursesType } from "@/static/videos";
import CourseList from "./components/CourseList";
import { useEffect, useState } from "react";
import Skeleton from "@/components/Skeleton";
export default function CoursePage() {
  const [coursesList, setCoursesList] = useState<CoursesType[]>([])
  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(courses)
      }, 500)
    })
    promise.then((res) => {
      setCoursesList(res as CoursesType[])
    })
  },[])

  return (
    <>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {
            coursesList.length === 0 ? < Skeleton grid="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"/> :
              <>
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Free Online Courses</h1>
                  <p className="text-xl text-gray-600">Learn and grow with our free online courses</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coursesList.map((course) => (
                    <CourseList key={course.id} course={course}/>
                  ))}
                </div>
              </>
          }
        </div>
      </div>
    </>
  );
}