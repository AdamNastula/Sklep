import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet } from "react-router";

function AuthorizedRoute() {
  const auth0 = useAuth0();

  useEffect(() => {
    if (!auth0.isLoading && !auth0.isAuthenticated) {
      auth0.loginWithRedirect({
        authorizationParams: {
          appState: {
            returnTo: "http://localhost:5173/admin/",
          },
        },
      });
    }
  }, [auth0]);

  if (auth0.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!auth0.isAuthenticated) {
    console.log("niezalogownany");
    auth0.loginWithRedirect({
      authorizationParams: {
        appState: { returnTo: "http://localhost:5173/admin/" },
      },
    });
  }

  return <Outlet></Outlet>;
}

export default AuthorizedRoute;
