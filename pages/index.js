import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { auth } from 'firebase';
import { useAuth } from '../library/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Simple Feedback</h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {auth?.user ? (
          <button onClick={(e) => auth.signOut()}>SignOut</button>
        ) : (
          <button onClick={(e) => auth.signInWithGitHub()}>SignIn</button>
        )}

        <br />
        <img src={auth?.user?.photoURL} alt='' />
        <div>{auth?.user?.displayName || 'Not Logged In'}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://twitter.com/devindford?ref_src=twsrc%5Etfw'
          class='twitter-follow-button'
          data-show-count='false'
        >
          Follow @DevinDFord
        </a>
        <script
          async
          src='https://platform.twitter.com/widgets.js'
          charset='utf-8'
        ></script>
      </footer>
    </div>
  );
}
