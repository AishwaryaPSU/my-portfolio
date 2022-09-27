import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AishwaryaGM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
      <Image
              priority
              src="/images/pro.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
          />
        <h2 className="title">
          Aishwarya Govindappa Mahadev
        </h2>
          <p className="intro">
            Hello there, you can call me Agm for short. I'm a software engineer and a former track and field athlete.
            I am fond of travelling, trying new food, exercising and listening to philosophical talks. Gratitude is the manthra I live by.
            I am grateful for everything I have and have been through, as I beleive experiences give us the best chance to shape ourselves.
          </p>
        <div className="grid">
          <a href="/posts/work-experience" className="card">
            <h3>Work Experience &rarr;</h3>
            <p>Me in the professional world.</p>
          </a>

          <a href="/posts/education" className="card">
            <h3>Education &rarr;</h3>
            <p>Got a couple of degrees. 😎</p>
          </a>

          <a
            href="/posts/social-media" className="card">
            <h3>Social Media &rarr;</h3>
            <p>My online activities.</p>
          </a>

          <a
            href="/posts/contact"
            className="card"
          >
            <h3>Contact &rarr;</h3>
            <p>
              You can reach me at.
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .intro p {
          margin: 2rem;
          padding: 2rem;
          color: inherit;
          margin: 1rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

      `}</style>
    </div>
  )
}
