import '../styles/global.css';
import { UserProvider } from '../components/context/userContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
