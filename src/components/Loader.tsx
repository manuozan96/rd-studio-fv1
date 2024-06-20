import Error404 from "../components/Error404";
import Layout from "../components/Layout";

const Loader = () => {
  return (
    <Layout
      show={false}
      backgroundClass="bgContacto"
      showFooter={false}
      showNavbar={false}
    >
      <div>
        <Error404 text1="estamos" text2="cargando la página" />
      </div>
    </Layout>
  );
};

export default Loader;
