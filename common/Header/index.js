import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div style={{ flex: 1 }}>..</div>

      <Navbar />

      <SearchBar />
    </div>
  );
}

export default Header;
