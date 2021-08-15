import styles from "./Repositories.module.css";

function Repository({ repositories, addFavorites, favorites }) {
  const updateFavorites = (repo) => {
    if (alreadyAdded(favorites, repo)) return;
    const newFavorites = [...favorites, repo];
    addFavorites(newFavorites);
  };

  const alreadyAdded = (favorites, repo) =>
    favorites.some((fav) => fav.name === repo.name);

  return !repositories ? (
    <h1>no repositories found</h1>
  ) : (
    repositories.map((repo) => (
      <div className={styles.card} key={repo.url}>
        <a className={styles.repositories} href={repo.url}>
          <div className={styles.text}>
            <h3>{repo.name}</h3>
            <h5>{repo.description}</h5>
          </div>
          <div className={styles.stats}>
            <p className={styles.numbers} title="Created at">
              {formatDate(repo.createdAt)}
            </p>
            <p className={styles.numbers} title="Forks">
              {repo.forkCount}🔱
            </p>
            <p className={styles.numbers} title="Stars">
              {repo.stargazers.totalCount}⭐
            </p>
          </div>
        </a>
        <button
          className={
            alreadyAdded(favorites, repo)
              ? styles.addedFavorite
              : styles.addFavorite
          }
          onClick={() => updateFavorites(repo)}
        >
          💖
        </button>
      </div>
    ))
  );
}

const formatDate = (date) => new Date(date).toLocaleDateString();

export default Repository;
