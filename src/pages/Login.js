import styles from '../styles/login.module.css';
import { useState } from 'react';
import toast, { toast1, success, error } from 'react-toast-notification';
// toast.success()
//toast1(),success()
const Login = () => {
  //use hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false); //dynamic ui create(good)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      //empty=""
      error('Something went wrong.', {
        status: 'Error!',
        type: 'error',
        autoHide: false,
        delay: '7000',
      });
      setLoggingIn(false);
    } else {
      success('successfully login', {
        status: 'Login!',
        type: 'success',
        autoHide: false,
        delay: '7000',
      });
      setLoggingIn(false);
    }
  };
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className={styles.field}>
        <input
          id="a1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {/* <span
          onClick={() => {
            const input = document.getElementById('a1');
            if (input.getAttribute('type') !== 'text') {
              input.setAttribute('type', 'text');
            } else {
              input.setAttribute('type', 'password');
            }
          }}
        >
          visible
        </span> */}
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? 'logging In...' : 'Log In'}
        </button>
      </div>
    </form>
  );
};

export default Login;
