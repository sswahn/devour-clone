import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import Portal from './Portal/Portal'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Modal from '../Modal/Modal'
import database from '@sswahn/database'

const Main = () => {
  const [context, dispatch] = useContext(Context)
      
  return (
    <main>

    </main>
  )
}

export default Main
