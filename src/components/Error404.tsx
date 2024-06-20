import React from "react";
import Image from "next/image";
import styles from "../styles/Error404.module.css";

interface Text {
  text1: string;
  text2?: string;
  showLogo?: boolean;
}

const Error404 = ({ text1, text2, showLogo }: Text) => {
  return (
    <div className={styles.mainDiv}>
      {showLogo && (
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      )}
      <div className={styles.imageDiv}>
        <div className={styles.textContainer}>
          <p className={styles.text1}>{text1}</p>
          <p className={styles.text}>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
