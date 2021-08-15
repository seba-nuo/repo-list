import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function Callback() {
  let [token, setToken] = useState(null);

  useEffect(() => {
    const queryParams = window.location.search;
    const code = new URLSearchParams(queryParams).get("code");

    const getToken = async () => {
      let resp = await fetch(
        "https://dsk3kaq4z8.execute-api.sa-east-1.amazonaws.com/dev/oauth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );
      resp = await resp.json();
      const body = resp.body;
      
        const access_token = body.access_token;
        sessionStorage.setItem("auth-your-repo", access_token);
        setToken(access_token);
    };

    getToken();
  }, []);

  return !token ? (
    <h1>loading..</h1>
  ) : (
    <Redirect
      to={{
        pathname: "/me",
        state: token
      }}
    />
  );
}
export default Callback;
