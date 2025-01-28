'use client'
import React from 'react'
import { AddVideoForm } from '../components/UploadVideo'
import { Tabs } from '../profile/components/Tabs'
const page = () => {
  return (
    <div className='max-w-7xl mx-auto mb-10'>
        <Tabs activeTab={'enrolled-courses'} onTabChange={() => {}}/>
          <AddVideoForm onSubmit={() => {}}/>
    </div>
  )
}

export default page