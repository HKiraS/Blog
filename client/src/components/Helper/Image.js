import React from 'react';
import '../../styles/Image.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const imageLoad = () => {
    setSkeleton(false);
  };

  return (
    <div
      className={`image-container w-full h-full relative overflow-hidden rounded ${props.classcontainer}`}
    >
      {skeleton && (
        <div className={'image-skeleton w-full h-full absolute z-10'}></div>
      )}
      <img alt={alt} {...props} onLoad={imageLoad} />
    </div>
  );
};

export default Image;
