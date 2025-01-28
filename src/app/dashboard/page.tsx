'use client'
import React, { useState } from 'react'
import { AddVideoForm } from '../components/UploadVideo'
import { Tabs } from './components/Tabs'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('add-video')
  return (
    <div className='max-w-7xl mx-auto mb-10'>
        <div className='mb-5'>
          <Tabs activeTab={activeTab} onTabChange={setActiveTab}/>
        </div>
      {
        activeTab === 'add-video' && <AddVideoForm onSubmit={() => {}}/>
      }
    </div>
  )
}

export default Dashboard