'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleAdminLogin = () => {
    if (login === 'Yuriy Bespechanskiy' && password === 'Luther13579246!') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/menu?admin=true');
    } else {
      setErrorMessage('Incorrect Login or Password');
    }
  };

  const handleEntranceForAll = () => {
    localStorage.removeItem('isAdmin');
    router.push('/menu');
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Vazi Center</h1>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setShowAdminLogin(!showAdminLogin)}
            className={styles.button}
          >
            Entrance for Admin
          </button>
          <button onClick={handleEntranceForAll} className={styles.button}>
            Entrance for all
          </button>
        </div>
        {showAdminLogin && (
          <div className={styles.loginForm}>
            <input
              type='text'
              placeholder='Login'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAdminLogin} className={styles.button}>
              Enter
            </button>
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
