import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <div>
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {user.displayName} ({user.email})</p>
      <button onClick={firebaseSignOut}>Sign Out</button>
      <a href="/week-8/shopping-list">Go to Shopping List</a>
    </div>
  );
};

export default LandingPage;
