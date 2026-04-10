import { useContext } from 'react'
import { GetSessionContext } from '../Providers/SessionProvider'
import Authentif

function Root() {
  const session = useContext(GetSessionContext)
  
  return (
    <>
      {session ? <Authentication /> : <>
        <Header />
        <Main />
        <MobileUI />
      <>}
    </>
  )
}

