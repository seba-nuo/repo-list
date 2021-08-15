import styles from "./Profile.module.css";

function Profile({ profile }) {
  const { login, name } = profile;

  return (
    <div className={styles.profile}>
      <h1 className={styles.name}>{name}</h1>
      <h1 className={styles.login}>({login})</h1>
    </div>
  );
}

export default Profile;
