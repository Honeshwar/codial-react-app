import styles from '../Styles/login.module.css';
import { useState } from 'react';
import toast, { toast1, success, error } from 'react-toast-notification';
import { signIn } from '../api';
// import { useAuthContextValue } from '../Hooks/customHookForAuthContext'''
const SignIn = () => {
  //use hook for form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loggingIn, setLoggingIn] = useState(false); //dynamic ui create(good)

  //getting value from provider
  // const value = useAuthContextValue();
  // console.log(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      //empty=""
      return error('Something went wrong.', {
        status: 'Error!',
        type: 'error',
        autoHide: false,
        delay: '7000',
      });
    } else {
      const response = await signIn(email, password, confirmPassword);
      console.log(response);
      if (response.success) {
        toast.success('successfully login', {
          status: 'Login!',
          type: 'success',
          autoHide: false,
          delay: '7000',
        });
      } else {
        return error(response.message, {
          status: 'Error!',
          type: 'error',
          autoHide: false,
          delay: '7000',
        });
      }
    }
    setLoggingIn(false); //after complete api req
  };
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Sign Up</span>

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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm-Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? 'Sign Up...' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default SignIn;
