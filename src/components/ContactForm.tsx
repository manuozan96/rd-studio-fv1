import React, { useState } from "react";
import styles from "../styles/Contacto.module.css";
import Button from "./Button";

const ContactoForm: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerSection}>
        <label>
          nombre completo
          <input
            type="text"
            name="input1"
            value={inputValues.input1}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </label>
        <label>
          número de contacto
          <input
            type="text"
            name="input2"
            value={inputValues.input2}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </label>
        <label>
          email
          <input
            type="text"
            name="input3"
            value={inputValues.input3}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </label>
        <label>
          descripción
          <input
            type="text"
            name="input4"
            value={inputValues.input4}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </label>
      </div>
    </div>
  );
};

export default ContactoForm;
