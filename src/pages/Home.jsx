import NavbarComponent from "../components/NavbarComponent";
import HeroComponent from "../components/HeroComponent";
import MarqueeComponent from "../components/MarqueeComponent";
import LogoComponent from "../components/LogoComponent";
import CardComponent from "../components/CardComponent";
import FeaturesComponents from "../components/FeaturesComponent";
import Layout from "../layout";
import CategoriesComponent from "../components/CategoriesComponent";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroComponent />
        <LogoComponent />
        <CategoriesComponent />
        <CardComponent />
      </Layout>
    </>
  );
};

export default Home;
