import { useState } from 'react'

import { Layout } from 'components/Layout/Layout'

import styles from 'styles/Schedule.module.css'

export default function Schedule ({ user }) {
  const [items, setItems] = useState({
    data: [
      {
        time: '08:00',
        bikers: 0,
        selected: true
      },
      {
        time: '08:30',
        bikers: 8,
        selected: false
      },
      {
        time: '09:00',
        bikers: 8,
        selected: false
      },
      {
        time: '09:30',
        bikers: 8,
        selected: false
      },
      {
        time: '10:00',
        bikers: 8,
        selected: false
      },
      {
        time: '10:30',
        bikers: 8,
        selected: false
      },
      {
        time: '11:00',
        bikers: 8,
        selected: false
      },
      {
        time: '11:30',
        bikers: 8,
        selected: false
      },
      {
        time: '12:00',
        bikers: 8,
        selected: false
      },
      {
        time: '12:30',
        bikers: 8,
        selected: false
      },
      {
        time: '13:00',
        bikers: 8,
        selected: false
      },
      {
        time: '13:30',
        bikers: 8,
        selected: false
      },
      {
        time: '14:00',
        bikers: 8,
        selected: false
      },
      {
        time: '14:30',
        bikers: 8,
        selected: false
      },
      {
        time: '15:00',
        bikers: 8,
        selected: false
      },
      {
        time: '15:30',
        bikers: 8,
        selected: false
      },
      {
        time: '16:00',
        bikers: 8,
        selected: false
      },
      {
        time: '16:30',
        bikers: 8,
        selected: false
      },
      {
        time: '17:00',
        bikers: 8,
        selected: false
      },
      {
        time: '17:30',
        bikers: 8,
        selected: false
      },
      {
        time: '18:00',
        bikers: 8,
        selected: false
      },
      {
        time: '18:30',
        bikers: 8,
        selected: false
      },
      {
        time: '19:00',
        bikers: 8,
        selected: false
      },
      {
        time: '19:30',
        bikers: 8,
        selected: false
      },
      {
        time: '20:00',
        bikers: 8,
        selected: false
      }
    ]
  })
  const selectHour = (_id) => {
    const auxItems = { ...items }
    if (auxItems.data[_id].selected === false) {
      if (auxItems.data[_id].bikers > 0) {
        auxItems.data[_id].selected = true
        auxItems.data[_id].bikers = auxItems.data[_id].bikers - 1
      }
    } else {
      auxItems.data[_id].selected = false
      auxItems.data[_id].bikers = auxItems.data[_id].bikers + 1
    }

    setItems(auxItems)
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
          items.data.map((element, key) => {
            if (element.selected) {
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
