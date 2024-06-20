import Button from "@/components/Button";
import Layout from "@/components/Layout";
import PortadaProyecto from "@/components/PortadaProyecto";
import TextBanner from "@/components/TextBanner";

const Proyectos = () => {
  const proyectos = [
    {
      imagen: "/Brigada.png",
      ruta: "/interna",
      texto: "BRIGADA TRAINING LAB",
    },
    { imagen: "/Chicharron.png", ruta: "/interna", texto: "LOVE CHICHARRÓN" },
    { imagen: "/imagen.png", ruta: "/interna", texto: "NIMI'S SHAWARMA" },
    { imagen: "/Kod.png", ruta: "/interna", texto: "KOD BURGUER" },
  ];

  return (
    <Layout show={true} backgroundClass="bgGral">
      <div>
        {proyectos.map((proyecto, index) => (
          <PortadaProyecto
            key={index}
            imagen={proyecto.imagen}
            ruta={proyecto.ruta}
            texto={proyecto.texto}

          />
        ))}
      </div>
      <Button contenido="Cargar más" />
    </Layout>
  );
};

export default Proyectos;
