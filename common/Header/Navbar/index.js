import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import NAVBAR_MAPPING from "@/constants/navbar_mapping";

function Navbar() {
  return (
    <div className={styles.conatiner}>
      {NAVBAR_MAPPING.map((item) => {
        const { id = "", title = "", link = "" } = item || {};

        return (
          <Link key={id} href={link} className={styles.link}>
            {title}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
