"use client";

import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              className={clsx(
                styles.linkButton,
                pathname === "/posts" && styles.active
              )}
              href={"/posts"}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                styles.linkButton,
                pathname === "/users" && styles.active
              )}
              href={"/users"}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                styles.linkButton,
                pathname === "/search-posts-csr" && styles.active
              )}
              href={"/search-posts-csr"}
            >
              SearchPosts-CSR
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                styles.linkButton,
                pathname === "/search-posts-ssr" && styles.active
              )}
              href={"/search-posts-ssr"}
            >
              SearchPosts-SSR
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
