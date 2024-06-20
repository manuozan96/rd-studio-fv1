import BackgroundInterna from "@/components/BackgroundInterna";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import PortadaProyecto from "@/components/PortadaProyecto";
import TextTable from "@/components/TextTable";
import styles from "../styles/Interna.module.css";

export default function Interna() {
  const proyectos = [
    {
      imagen: "/One.png",
      ruta: "/interna",
      width: "374px",
      height: "516px",
    },
    { imagen: "/Two.png", ruta: "/interna", width: 374, height: 230 },
    {
      imagen: "/imagen.png",
      ruta: "/interna",
      width: "374px",
      height: "516px",
    },
    { imagen: "/Kod.png", ruta: "/interna", width: "374px", height: "516px" },
  ];

  return (
    <Layout show={false} backgroundClass="bgTransparent">
      <BackgroundInterna />
      <TextTable />
      <div className={styles.App}>
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className={styles.section}
            style={{ height: "100vh" }}
          >
            <PortadaProyecto
              imagen={proyecto.imagen}
              ruta={proyecto.ruta}
              width={proyecto.width}
              height={proyecto.height}
            />
          </div>
        ))}
      </div>
      <Button contenido="Siguiente proyecto" />
    </Layout>
  );
}
