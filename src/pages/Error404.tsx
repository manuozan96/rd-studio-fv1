import Error404 from "../components/Error404";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout
      show={false}
      backgroundClass="bgContacto"
      showFooter={false}
      showNavbar={false}
    >
      <div>
        <Error404 text1="¡ups!" text2="algo salió mal" />
      </div>
    </Layout>
  );
};

export default Error;
