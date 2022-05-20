import React from 'react'
import loadingLazyImg from '../../assets/img/loadinglazy.gif'
export default function LoadingLazy() {
  return (
    <div className='container'>
        <img src={loadingLazyImg} alt="loading lazy image" />
    </div>
  )
}
