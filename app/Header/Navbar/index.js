import Link from "next/link";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <div className={styles.conatiner}>
      <Link href="/Home" className={styles.link}>
        Home
      </Link>

      <Link href="/Genre" className={styles.link}>
        Genre
      </Link>

      <Link href="/Ongoing" className={styles.link}>
        Ongoing
      </Link>

      <Link href="/Type" className={styles.link}>
        Type
      </Link>

      <Link href="/Completed" className={styles.link}>
        Completed
      </Link>

      <Link href="/About" className={styles.link}>
        About
      </Link>
    </div>
  );
}

export default Navbar;
