import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
