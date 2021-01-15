import { ProvideAuth } from '../library/auth';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
};

export default MyApp;
