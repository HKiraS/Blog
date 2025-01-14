import React from 'react'
import { Route, Routes } from 'react-router-dom';

function PageCharacter () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>PageCharacter</h1>} />
        <Route path="/:id" element={<h1>Toriel</h1>} />
      </Routes>
    </div>
  )
}

export default PageCharacter;
