import styles from "./Header.module.css";

import logo from "../assets/1053782-removebg-preview.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>TranceBook</h1>
    </header>
  );
}
