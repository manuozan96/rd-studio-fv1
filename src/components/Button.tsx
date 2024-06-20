import React from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  contenido: string;
  style?: React.CSSProperties; // Añade esta línea
}

const Button: React.FC<ButtonProps> = ({ contenido, style }) => {
  return (
    <div style={style}>
      <button className={styles.button}>{contenido}</button>
    </div>
  );
};

export default Button;
