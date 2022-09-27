import Link from 'next/Link';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import styles from '../../components/layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareYoutube, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia() {
    return (
        <div className="container">
            <main>
                <Image
                    priority
                    src="/images/pro.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                />
                <h2>
                    Social Media Presence
                </h2>
                <div className="grid">
                    <a href="https://www.linkedin.com/in/aishwarya-govindappa-mahadev-554192128/" target="_blank" className="card">
                        <h3>LinkedIn &rarr;</h3>
                        <FontAwesomeIcon icon={ faLinkedin } style={{ height: "20px" }} round />
                    </a>
                    <a href="https://github.com/AishwaryaPSU" target="_blank" className="card">
                        <h3>GitHub &rarr;</h3>
                        <FontAwesomeIcon icon={ faGithub } style={{ height: "20px" }} round />
                    </a>
                    <a href="https://www.youtube.com/channel/UCclOY3abX8Q3xI1S_f5VreQ" target="_blank" className="card">
                        <h3>Youtube &rarr;</h3>
                        <FontAwesomeIcon icon={ faSquareYoutube } style={{ height: "20px" }} round />
                    </a>
                    <a href="https://www.instagram.com/aishwarya_g.m/" target="_blank" className="card">
                        <h3>Instagram &rarr;</h3>
                        <FontAwesomeIcon icon={ faInstagram } style={{ height: "20px" }} round />
                    </a>
                </div>
            </main>
            <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
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

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
        </div>
    )
}
