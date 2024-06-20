import React from "react";
import styles from "../styles/Contacto.module.css";

const ContactoText: React.FC = () => {
  return (
    <div className={styles.contactoText}>
      Somos un estudio creativo que
      <div className={styles.boldText}>transforma espacios</div>

      <div className={styles.infoSection}>
        <div>
          Oficina México<br></br>
          (+57) (1)  813 48 36 info@reinharddienes.com <br></br>CARRERA 7 #73-55
        </div>
        <div>
          Oficina Colombia<br></br>
          (+57) (1)  813 48 36 info@reinharddienes.com <br></br> CARRERA 7 #73-55
        </div>
      </div>
    </div>
  );
};

export default ContactoText;
