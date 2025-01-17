import React from 'react'
import {ReactComponent as LoadSVG} from '../../assets/icon/load.svg'

const PageLoading = () => {

  return (
    <section className='gray-3-bg min-h-dvh flex items-center justify-center'>
      Loading<LoadSVG className='animate-spin w-11'/>
    </section>
  )
}

export default PageLoading
