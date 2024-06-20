import React from "react";
import styles from "../styles/Title.module.css";

interface TitleProps {
  nuestro?: string;
  equipo?: string;
  backgroundColor?: string;
}

const Titles: React.FC<TitleProps> = ({ nuestro, equipo, backgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <div className={styles.nuestro}>{nuestro || "NUESTRO"}</div>{" "}
      <div className={styles.equipo}>{equipo || "EQUIPO"}</div>{" "}
      <div
        style={{
          fontFamily: "DM Sans",
          fontWeight: "500",
          fontSize: "20px",
          color: "#0a0e0b",
          marginLeft: "20px",
          marginTop: "-50px",
        }}
      ></div>
    </div>
  );
};

export default Titles;
