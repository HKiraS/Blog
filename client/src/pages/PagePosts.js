import React from 'react';

import Article from '../components/Article';
import Comments from '../components/Comments';
import { dados } from '../App';

function PagePosts() {
  return (
    <div>
      <main>
        <Article data={dados[0]} />
        <Comments />
      </main>
    </div>
  );
}

export default PagePosts;
