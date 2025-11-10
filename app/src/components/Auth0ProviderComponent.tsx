import { Auth0Provider } from "@auth0/auth0-react";

interface Auth0ProviderComponentProps {
  children: React.ReactNode;
}

function Auth0ProviderComponent(props: Auth0ProviderComponentProps) {
  return (
    <Auth0Provider
      domain="dev-8dmlwt15bp7xrwh7.eu.auth0.com"
      clientId="ututbCRm5dWdFJC1NXHeDzdtca6T3RxC"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/admin",
      }}
    >
      {props.children}
    </Auth0Provider>
  );
}

export default Auth0ProviderComponent;
