import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from '../components/PagePost/Posts';

function PagePosts() {
      document.title = 'UnderBlog | Postagens'

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Página de Posts</h1>} />
        <Route path="/:post" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default PagePosts;
