import React from 'react';

import Article from './Article';
import Comments from './Comments';
import { dados } from '../../App';

function Posts() {
  return (
    <div>
      <main>
        <Article data={dados} />
        <Comments />
      </main>
    </div>
  );
}

export default Posts;
