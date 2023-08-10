import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Mistery from "./Mistery";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <Mistery /> {/*//Todo: add something interested in this component */}
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default Header;
