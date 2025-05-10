import './styles/global.css';
import './styles/style.module.scss';
// import { Auth0Provider } from '@auth0/auth0-react';

export default function App({ Component, pageProps }) {
  

  return (
    // <Auth0Provider
    //   domain="jobs-seeker.eu.auth0.com"
    //   clientId="upE8XcXTb3zUYmCME1PUHGUaiWqwWCRm"
    //   authorizationParams={{
    //     redirect_uri: typeof window !== 'undefined' ? window.location.origin : ''
    //   }}
    // >
      <Component {...pageProps} />
    // </Auth0Provider>
  );
}
