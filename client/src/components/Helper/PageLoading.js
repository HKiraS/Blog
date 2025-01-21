import React from 'react';
import { ReactComponent as LoadSVG } from '../../assets/icon/load.svg';

const PageLoading = () => {
  return (
    <section className="bg-gray-3 min-h-dvh flex items-center justify-center">
      Loading
      <LoadSVG className="animate-spin w-11 text-color-black" />
    </section>
  );
};

export default PageLoading;
