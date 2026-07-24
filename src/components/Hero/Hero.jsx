import { motion } from "framer-motion";
import useLanguage from "../../hooks/useLanguage";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="
    relative
    min-h-screen
    overflow-hidden
    pt-28
    md:pt-20
    lg:pt-0
  "
    >
      {/* Glow */}
      <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px]" />

      <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full lg:pt-18 pb-18 ">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroContent />

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="/cv/Alireza.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 transition font-semibold"
              >
                {t.hero.button}
              </a>

              <button className="px-8 py-4 rounded-xl border border-slate-700 hover:border-sky-400 transition">
                {t.hero.projects}
              </button>
            </div>

            <div className="flex gap-6 mt-12 text-2xl">
              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
