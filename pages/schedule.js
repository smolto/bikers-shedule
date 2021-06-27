import { useEffect } from 'react'

import { Layout } from 'components/Layout/Layout'

import styles from 'styles/Schedule.module.css'

import { updateDataJSONbin, fetchDataJSONbin } from 'services/fetch'

export default function Schedule ({ user, schedule, setSchedule }) {
  useEffect(() => {
    try {
      setInterval(async () => {
        const res = await fetchDataJSONbin()
        setSchedule(res.record.data, user)
      }, 5000)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const selectHour = (_id) => {
    const auxItems = [...schedule]
    if (auxItems[_id].users.find(_user => _user === user) === undefined) {
      if (auxItems[_id].bikers > 0) {
        auxItems[_id].users.push(user)
        auxItems[_id].bikers = auxItems[_id].bikers - 1
      }
    } else {
      auxItems[_id].users = auxItems[_id].users.filter(element => element !== user)
      auxItems[_id].bikers = auxItems[_id].bikers + 1
    }
    updateDataJSONbin({ data: auxItems })
    setSchedule(auxItems)
  }
  return (
    <Layout
      title='Schedule'
    >
      <div className={styles.container}>
        <div className={styles['schedule-title']}>
          <h1>{user}</h1>
        </div>
        {
          schedule.map((element, key) => {
            if (element.users.find((element) => element === user) !== undefined) {
              return (
                <div key={key} className={`${styles['schedule-item']} ${styles.selected}`} onClick={() => selectHour(key)}>
                  <div className="div">
                    <h2>{element.time}</h2>
                  </div>
                  <div className="div">
                    <h2>{element.bikers}</h2>
                  </div>
                </div>
              )
            } else {
              if (element.bikers === 0) {
                return (
                  <div key={key} className={`${styles['schedule-item']} ${styles.unable}`} onClick={() => selectHour(key)}>
                    <div className="div">
                      <h2>{element.time}</h2>
                    </div>
                    <div className="div">
                      <h2>{element.bikers}</h2>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div key={key} className={`${styles['schedule-item']}`} onClick={() => selectHour(key)}>
                    <div className="div">
                      <h2>{element.time}</h2>
                    </div>
                    <div className="div">
                      <h2>{element.bikers}</h2>
                    </div>
                  </div>
                )
              }
            }
          })
        }
      </div>
    </Layout>
  )
}
