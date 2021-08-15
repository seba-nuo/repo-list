import { useEffect, useState } from "react";
import { Repository, Profile } from "../components";
import { useLocation } from "react-router-dom";
import { profile, repositories } from "../utils";

function Me() {
  const [userInfo, setUserInfo] = useState(null);
  let { state } = useLocation();
  
  useEffect(() => {
    const token = state?.token || sessionStorage.getItem("auth-your-repo");
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
      if(body) setUserInfo(body);
    };

    getUserInfo();
  }, [state]);

  return !userInfo ? (
    <h1>loading...</h1>
  ) : (
    <>
      <Profile profile={profile(userInfo)} />
      <Repository repositories={repositories(userInfo)} />
      hoa
    </>
  );
}

export default Me;
