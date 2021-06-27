import { useRouter } from 'next/router'

import { Layout } from 'components/Layout/Layout'

import styles from 'styles/Home.module.css'

import { fetchDataJSONbin } from 'services/fetch'

export default function Home ({
  user,
  setUser,
  isValidUser,
  setSchedule
}) {
  const router = useRouter()

  const getData = async () => {
    const res = await fetchDataJSONbin()
    setSchedule(res.record.data, user)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (user.length > 4) {
      await getData()
      localStorage.setItem('user', user)
      router.push('/schedule')
    } else {
      alert('Invalid nickname length (min. 4)')
    }
  }

  const onChange = (e) => {
    setUser(e.target.value)
  }

  const addNewUser = () => {
    localStorage.removeItem('user')
    router.reload()
  }

  const currentUser = () => {
    router.push('/schedule')
  }

  if (isValidUser === false) {
    return (
      <Layout title={'Home'}>
        <div className={styles.container}>
          <form onSubmit={onSubmit}>
            <div className={styles['login-form']}>
              <h2 className={styles['login-form__pre-title']}>Welcome to ...</h2>
              <h1 className={styles['login-form__title']}>Bikers-Schedule</h1>
              <input
                type='text'
                value={user}
                placeholder='User name ...'
                className={styles['login-form__user-input']}
                onChange={onChange}
              />
              <input
                type='submit'
                value='Submit'
                className={styles['login-form__submit-btn']}
              />
            </div>
          </form>
        </div>
      </Layout>
    )
  }

  if (isValidUser === true) {
    return (
      <Layout title={'Home'}>
        <div className={styles.container}>
          <form onSubmit={onSubmit}>
            <div className={styles['login-form']}>
              <h2 className={styles['login-form__pre-title']}>Welcome to ...</h2>
              <h1 className={styles['login-form__title']}>Bikers-Schedule</h1>
              <div className={styles['login-form__hr']}></div>
              <div className={styles['login-form__prev-user']} onClick={currentUser}>
                <img src='/user.svg' alt='user' width='50'/>
                <p>{user}</p>
              </div>
              <div className={styles['login-form__prev-user']} onClick={addNewUser}>
                <img src='/add-user.svg' alt='user' width='50'/>
                <p>Add a new user</p>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}
