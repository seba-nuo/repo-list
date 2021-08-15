import styles from "./Favorites.module.css";

function Favorites({ favorites }) {
  // array of fav

  return !favorites.length ? (
    <p>Add some repository to your favorites</p>
  ) : (
    favorites.map((fav) => (
      <div className={styles.container} key={fav.url}>
        <h1>{fav.name}</h1>
      </div>
    ))
  );
}

export default Favorites;
