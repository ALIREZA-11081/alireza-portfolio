import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import Container from "../Common/Container";
import useLanguage from "../../hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-28">
      <Container>
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            rounded-3xl
            bg-slate-900/50
            border
            border-slate-800
            p-8
            "
          >
            <h3
              className="
  text-3xl
  font-bold
  text-white
  "
            >
              {t.about.job}
            </h3>
            <p
              className="
  mt-6
  text-slate-300
  leading-8
  "
            >
              {t.about.description}
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            grid
            grid-cols-3
            gap-5
            "
          >
            <InfoCard number="2+" text={t.about.learning} />

            <InfoCard number="5+" text={t.about.projects} />

            <InfoCard number="10+" text={t.about.technologies} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const InfoCard = ({ number, text }) => {
  return (
    <div
      className="
      rounded-2xl
      bg-slate-900
      border
      border-slate-800
      p-5
      text-center
      "
    >
      <h4
        className="
        text-3xl
        font-black
        text-sky-400
        "
      >
        {number}
      </h4>

      <p
        className="
        mt-2
        text-sm
        text-slate-400
        "
      >
        {text}
      </p>
    </div>
  );
};

export default About;
