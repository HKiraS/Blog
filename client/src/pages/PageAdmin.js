import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import AdminPost from '../components/Admin/AdminPost'

const PageAdmin = () => {
  return (
    <Routes>
      <Route path='/' element={<Admin/>}/>
      <Route path='post' element={<AdminPost/>}/>
    </Routes>
  )
}

export default PageAdmin
