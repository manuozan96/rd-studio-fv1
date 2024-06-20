import ContactoBack from "@/components/ContactoText";
import Layout from "../components/Layout";
import ContactoText from "@/components/ContactoText";
import ContactoForm from "@/components/ContactForm";
import Button from "@/components/Button";
import Titles from "@/components/Titles";

const Contacto = () => {
  return (
    <Layout show={false} backgroundClass="bgContacto">
      <ContactoText />
      <Titles nuestro="TRANSFORMAMOS" equipo="tu espacio" backgroundColor= "#ededed"/>
      <ContactoForm />
      <Button
        contenido="Enviar"
        style={{
          backgroundColor: "#ededed",
          marginTop: "-100px",
        }}
      />
    </Layout>
  );
};

export default Contacto;
