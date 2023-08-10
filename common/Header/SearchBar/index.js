"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

function SearchBar() {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    console.log("val", e);
    setVal(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        name="searchBar"
        type="text"
        className={styles.input}
        placeholder="Search"
        value={val}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
