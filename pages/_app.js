import {
  useState,
  useEffect
} from 'react'

import '../styles/globals.css'

import { fetchDataJSONbin } from 'services/fetch'

function MyApp ({ Component, pageProps }) {
  const [user, setUser] = useState('')
  const [isValidUser, setIsValidUser] = useState(false)
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetchDataJSONbin()
      setSchedule(res.record.data, user)
    }

    if (localStorage.getItem('user') !== null) {
      getData()
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
    schedule={schedule}
    setSchedule={setSchedule}
  />
}

export default MyApp
