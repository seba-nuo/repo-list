import { Container } from "../components";
import { Redirect } from "react-router-dom";

function Login() {

  const client_id = process.env.REACT_APP_client_id;
  const token = sessionStorage.getItem("auth-your-repo");

  /// token debe ser de la forma "gho.."
  if (token) return <Redirect to="me" />;

  return (
    <Container>
      <h2>Sign in with github to see a list of your repositories</h2>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`}
      >
        Sign in
      </a>
    </Container>
  );
}

export default Login;
