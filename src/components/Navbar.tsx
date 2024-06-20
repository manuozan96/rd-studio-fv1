import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Menu from "./Menu";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <Image
        className={styles.logo}
        src="/Logo.svg"
        alt="Logo"
        width={43.58}
        height={23}
      />
      <button className={styles.button} onClick={toggleMenu}>
        <Image src="/Boton-rayas.svg" alt="Menu" width={50} height={50} />
      </button>
      {isOpen && <Menu />}
    </div>
  );
};

export default Navbar;
