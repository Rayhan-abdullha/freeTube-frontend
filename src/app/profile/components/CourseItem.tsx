import CourseList from '@/app/courses/components/CourseList'
import React from 'react'

const CourseItem = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
            [1, 2, 3].map((course) => (
                <CourseList key={course} course={{ id: 1, thumb: "https://cdn.ostad.app/course/cover/2024-11-07T13-34-17.205Z-Untitled-1%20(18).jpg", title: "Python, Django & React", enrolled: 100 }} />
            ))
        }
        <p className="text-gray-600 dark:text-gray-400 mt-2">
        You have not enrolled in any courses yet.
        </p>
    </div>
  )
}

export default CourseItem