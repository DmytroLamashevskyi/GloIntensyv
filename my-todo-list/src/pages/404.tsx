import { Link } from "react-router-dom";
import styles from "../assets/scss/NotFoundPage.module.scss";
import whereGif from "../assets/images/Where.gif";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageinfo}>
        <div className={styles.header}>404</div>
        <Link to="/" className={styles.link}>
          ← Back to Home
        </Link>
      </div>

      <img className={styles.image} src={whereGif} alt="404 gif" />
    </div>
  );
};
