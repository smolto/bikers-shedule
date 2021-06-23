import {
  useState,
  useEffect
} from 'react'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const [user, setUser] = useState('')
  const [isValidUser, setIsValidUser] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setUser(localStorage.getItem('user'))
      setIsValidUser(true)
    }
  }, [])

  return <Component
    {...pageProps}
    user={user}
    setUser={setUser}
    isValidUser={isValidUser}
    setIsValidUser={setIsValidUser}
  />
}

export default MyApp
