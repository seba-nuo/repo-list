import styles from "./Favorites.module.css";

function Favorites({ favorites }) {
  // array of fav

  return !favorites.length ? (
    <p>Add some repositories to your favorites</p>
  ) : (
    <div>
      <h1>Your 💖 repo's</h1>
      {favorites.map((fav) => (
        <div className={styles.container} key={fav.url}>
          <h1 className={styles.name}>{fav.name}</h1>
          <span className={styles.hearth}>💖</span>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
