import React from "react";
import Link from "next/link";
import styles from "../styles/PortadaProyecto.module.css";
import Image from "next/image";

// Definir el componente PortadaProyecto

type PortadaProyectoProps = {
  imagen?: string;
  ruta?: string;
  texto?: string;
  width?: number | string;
  height?: number | string;
  colorTexto?: string;
  estiloTexto?: React.CSSProperties;
  estiloImagen?: React.CSSProperties;
  backgroundColor?: string;
};

const PortadaProyecto = ({
  imagen,
  ruta,
  texto,
  width,
  height,
  colorTexto = "white",
  estiloTexto,
  estiloImagen,
}: PortadaProyectoProps) => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Link href={ruta ?? "/"}>
        <div className={styles.contenedor}>
          <Image
            src={imagen ?? "Image not found"}
            alt="Portada del proyecto"
            className={styles.imagen}
            width={374}
            height={249}
            style={{ ...estiloImagen }}
          />
          <div
            className={styles.t}
            style={{ color: colorTexto, ...estiloTexto }}
          >
            {texto}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortadaProyecto;
