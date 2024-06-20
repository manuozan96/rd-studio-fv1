import React from "react";
import styles from "../styles/TitleNosotros.module.css";

interface TitleNosotrosProps {
  nuestro?: string; 
  equipo?: string; 
}

const TitleNosotros: React.FC<TitleNosotrosProps> = ({ nuestro, equipo }) => {
  return (
    <div>
      <div className={styles.nuestro}>{nuestro || "NUESTRO"}</div>{" "}
      <div className={styles.equipo}>{equipo || "EQUIPO"}</div>{" "}
      <div
        style={{
          fontFamily: "DM Sans",
          fontWeight: "500",
          fontSize: "20px",
          color: "#0a0e0b",
          marginLeft: "20px",
          marginTop: "-20px",
          marginBottom: "115px",
        }}
      >
        Meet the{" "}
        <span style={{ animation: "color-change 3s infinite" }}>team </span>
        <span style={{ animation: "color-change 3s 1s infinite" }}>
          who dares to create
        </span>
        <span style={{ animation: "color-change 3s 1s infinite" }}>
          {" "}
          <br /> differently.
        </span>
      </div>
    </div>
  );
};

export default TitleNosotros;
