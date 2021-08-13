import { useEffect } from "react";
import { Redirect } from "react-router-dom";

function Callback() {
  const queryParams = window.location.search;
  const code = new URLSearchParams(queryParams).get("code");
  const client_id = process.env.REACT_APP_client_id;
  const client_secret = process.env.REACT_APP_client_secret;

  useEffect(() => {
    const getToken = async () => {
      let respose = await fetch(
        "https://github.com/login/oauth/access_token" +
          new URLSearchParams({ client_id, client_secret, code }),
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      respose = await respose.json();
      console.log(respose);
      sessionStorage.setItem("auth-repo-list", respose);
    };
    getToken();
  }, [client_id, client_secret, code]);

  if (!sessionStorage.getItem("auth-repo-list")) {
    return <Redirect to="/" />;
  }

  return <Redirect to="/me" />;
}

export default Callback;
