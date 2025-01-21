import React from 'react';

import Article from './Article';
import Comments from './Comments';
import { dados } from '../../App';
import { useParams } from 'react-router-dom';

function Posts() {
  const { post } = useParams();

  document.title = `UnderBlog | ${post}`;

  return (
    <main>
      <Article data={dados} />
      <Comments />
    </main>
  );
}

export default Posts;
