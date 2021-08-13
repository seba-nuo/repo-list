import { useEffect } from "react";

function Callback() {

  const queryParams = window.location.search;
  const code = new URLSearchParams(queryParams).get("code");
  const client_id = process.env.REACT_APP_client_id;
  const client_secret = process.env.REACT_APP_client_secret;
  const redirect_uri = "https://repo-list.dexco.cl/home";
  
  useEffect(() => {
      const getToken = async () => {

          let respose = await fetch(
            "https://github.com/login/oauth/access_token" +
              new URLSearchParams({ client_id, client_secret, code, redirect_uri})
          )
          respose = await respose.json();
          
          sessionStorage.setItem("repo_list", respose)
      }
      getToken();
  }, [client_id, client_secret, code])
  

  return <div></div>;
}

export default Callback;
