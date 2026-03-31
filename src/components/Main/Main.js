import { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Feed from '../../features/Feed/Feed'
// const MobileUI = lazy(() => import('../MobileUI/MobileUI'))
import MobileUI from '../MobileUI/MobileUI'
import styles from './main.module.css'

function Main() {

  useEffect(() => {
    //alert(`width: ${window.innerWidth}`) 
    //alert(`height: ${window.innerHeight}`)
  }, [])
  
  return (
    <main className={styles.main}>
      <Feed />
      <MobileUI /> 
  {/* <div style={{ height: '8000px' }}></div> 

      <Suspense fallback={null}>
        <MobileUI />  
      </Suspense>
      */}
    </main>
  )
}

export default Main
