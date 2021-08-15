import styles from './Login.module.css'
import { Redirect } from "react-router-dom";

function Login() {
  const client_id = process.env.REACT_APP_client_id;
  const token = localStorage.getItem("auth-your-repo");

  const handleSignIn = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`
  }

  return token ? (
    <Redirect to="me" />
  ) : (
    <div className={styles.layout}>
      <h2>Sign in with GitHub to see a list of your repositories</h2>
      <button
        className={styles.link}
        onClick={() => handleSignIn()}
      >
        Sign in
      </button>
    </div>
  );
}

export default Login;
