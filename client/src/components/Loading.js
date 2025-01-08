import React, {useState} from 'react'
import '../styles/Loading.css'

function Loading() {
  const [loaded, setLoaded] = useState(true);

  window.addEventListener('load', () => {
    setLoaded(false);
    document.body.classList.add('loaded');
  });

  if (loaded) {
    document.body.classList.add('no-scroll');
    document.body.classList.add('loading');
  } else {
    document.body.classList.remove('no-scroll');
    document.body.classList.remove('loading');
    return null;
  }



  return (
    <div id='Loading' className='w-full flex justify-center items-center top-0 left-0 z-50 fixed'>
      <h1>Loading...</h1>
    </div>
  )
}

export default Loading
