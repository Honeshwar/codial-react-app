import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import toast from 'react-toast-notification';

import { getAuthContextValue } from '../Hooks/customHookForAuthContext';
import styles from '../Styles/login.module.css';
import { register } from '../api';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signingUp, setSigningUp] = useState('');
  const auth = getAuthContextValue();
  // const history = useNavigate();
  // console.log(history);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);

    let error = false;
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Something went wrong.', {
        status: 'Error!',
        type: 'error',
        autoHide: false,
        delay: '7000',
      });
      error = true;
    }

    if (password !== confirmPassword) {
      toast.error('!Invalid username and password', {
        status: 'Error!',
        type: 'error',
        autoHide: false,
        delay: '7000',
      });

      error = true;
    }
    //if signup error,button disabled=false
    if (error) {
      return setSigningUp(false);
    }

    const response = await register(name, email, password, confirmPassword);

    if (response.success) {
      // history.push('/login');
      setSigningUp(false);

      toast.success('successfully login', {
        status: 'Login!',
        type: 'success',
        autoHide: false,
        delay: '7000',
      });
    } else {
      toast.error(response.message, {
        status: 'Error!',
        type: 'error',
        autoHide: false,
        delay: '7000',
      });
    }

    setSigningUp(false);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleFormSubmit}>
      <span className={styles.loginSignupHeader}> Signup</span>
      <div className={styles.field}>
        <input
          placeholder="Name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Confirm password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Password"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <button disabled={signingUp}>
          {signingUp ? 'Signing up...' : 'Signup'}
        </button>
      </div>
    </form>
  );
};

export default Signup;
