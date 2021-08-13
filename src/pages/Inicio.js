import Container from "../components/Container";

function Landing() {

  const client_id = process.env.REACT_APP_client_id;

  return (
    <div>
      <Container>
        <h2>Sign in with github to see a list of your repositories</h2>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo`}
        >
          Sign in
        </a>
      </Container>
    </div>
  );
}

export default Landing;
