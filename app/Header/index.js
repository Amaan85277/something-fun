import Navbar from "./Navbar";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div style={{ flex: 0.5 }}>..</div>

      <Navbar />

      <div style={{ flex: 0.5 }}>..</div>
    </div>
  );
}

export default Header;
