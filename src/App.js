import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <Profile user={user} />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

export default App;