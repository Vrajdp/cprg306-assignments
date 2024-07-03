import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <div>
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Welcome, {user.displayName} ({user.email})</p>
        <button onClick={firebaseSignOut}>Logout</button>
        <a href="/week-8/shopping-list">Go to Shopping List</a>
      </div>
    );
  }
};

export default Page;
