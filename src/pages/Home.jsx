import Layout from "../components/Layout/Layout";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Layout>
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />
      <Contact />

      <Footer />
    </Layout>
  );
};

export default Home;
