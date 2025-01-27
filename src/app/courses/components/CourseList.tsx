'use client'
import ConfirmModal from '@/app/components/ConfirmModal'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'
const CourseList = ({course}: {course: {id: number, thumb: string, title: string, enrolled: number}}) => {
  const [showConfirmModal, setShowConfirmModal] = React.useState(false)
  const navigate = useRouter()

  const handleEnroll = () => {
    setShowConfirmModal(true)
  }
  const confirmEnroll = (isConfirm: boolean) => {
    if (!isConfirm) {
      setShowConfirmModal(false)
    } else {
      setShowConfirmModal(false)
      navigate.push(`/courses/${course.id}`)
    }
  }
  return (
    <>
      <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <Image
        width={500}
        height={300}
        src={course.thumb}
        alt={course.title}
        className="w-full h-48 object-cover"
        />
        <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h2>
        <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium">{course.enrolled}</span> students enrolled
        </p>
        <button onClick={() => handleEnroll()} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Enroll Now
        </button>
        </div>
      </div>
      {
        showConfirmModal && (
          <ConfirmModal isModalOpen={showConfirmModal} handleConfirm={confirmEnroll} />
        )
      }
    </>
  )
}

export default CourseList