import { useEffect, useState } from "react";
import { Repositories, Profile, Favorites } from "../components";
import { Redirect, useLocation } from "react-router-dom";
import { profile, repositories } from "../utils";
import styles from "./Me.module.css";

function Me() {
  const [userInfo, setUserInfo] = useState(null);
  const [favorites, setFavorites] = useState([]);
  let { state } = useLocation();

  useEffect(() => {
    const token = state?.token || localStorage.getItem("auth-your-repo");
    const getUserInfo = async () => {
      let result = await fetch(
        "https://dsk3kaq4z8.execute-api.sa-east-1.amazonaws.com/dev/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );
      result = await result.json();
      const { body } = result;
      if (body) setUserInfo(body);
    };

    getUserInfo();
  }, [state]);

  //userInfo hold the response from fetch
  if (!userInfo) return <h1>loading...</h1>;

  // only exist userInfo.message if there is an error with the token
  return userInfo.message ? (
    <Redirect to="/" />
  ) : (
    <>
      <Profile profile={profile(userInfo)} />
      <div className={styles.container}>
        <Favorites favorites={favorites} />
        <Repositories
          repositories={repositories(userInfo)}
          addFavorites={setFavorites} //used to update favorites
          favorites={favorites}
        />
      </div>
    </>
  );
}

export default Me;
