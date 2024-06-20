import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@/components/Button";
import PortadaProyecto from "@/components/PortadaProyecto";

export default function Home() {
  const proyectos = [
    {
      imagen: "/Brera.png",
      ruta: "/interna",
      width: "374px",
      height: "450px",
    },
    {
      imagen: "/imagen.png",
      ruta: "/interna",
      width: "374px",
      height: "450px",
    },
    {
      imagen: "/Habanera.png",
      ruta: "/interna",
      width: "374px",
      height: "450px",
    },
  ];

  return (
    <Layout
      show={false}
      backgroundClass="bgContacto"
      showFooter={true}
      showNavbar={false}
    >
      <Image
        src="/rdstudio.png"
        alt="rdstudio"
        width={178}
        height={35}
        className={styles.rdstudio}
      />
      <div>
        <div
          style={{
            marginTop: "480px",
            backgroundImage: "url(/Rectangleinv.jpg)",
            maxHeight: "2270px",
          }}
        >
          <p className={styles.textoArriba}>
            Somos un estudio creativo que <strong>transforma espacios</strong>
            <br />
            através de diseño interior, <br />
            <b>arquitectura,</b>
            <br /> construcción y mobiliario.
          </p>
          {proyectos.map((proyecto, index) => (
            <PortadaProyecto
              key={index}
              imagen={proyecto.imagen}
              ruta={proyecto.ruta}
              width={374}
              height={450}
            />
          ))}
        </div>
      </div>
      <Button
        contenido="Contáctanos"
        style={{
          position: "relative",
          backgroundImage: "url(/Rectangle.jpg)",
          marginTop: "-19px",
          maxHeight: "196px",
        }}
      />
    </Layout>
  );
}
