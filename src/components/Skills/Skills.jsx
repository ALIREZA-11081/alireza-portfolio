import { motion } from "framer-motion";
import useLanguage from "../../hooks/useLanguage";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiElementor,
} from "react-icons/si";

import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";

const skills = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },

      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-300",
      },

      {
        name: "HTML",
        icon: FaHtml5,
        color: "text-orange-500",
      },

      {
        name: "CSS",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },

      {
        name: "Sass",
        icon: FaSass,
        color: "text-pink-400",
      },
    ],
  },

  {
    title: "WordPress",
    items: [
      {
        name: "WordPress",
        icon: FaWordpress,
        color: "text-blue-400",
      },

      {
        name: "WooCommerce",
        icon: FaWordpress,
        color: "text-purple-400",
      },
      {
        name: "Elementor",
        icon: SiElementor,
        color: "text-pink-500",
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },

      {
        name: "Vite",
        icon: SiVite,
        color: "text-purple-400",
      },

      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-400",
      },
    ],
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
          "
        >
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                bg-slate-900/60
                border
                border-slate-800
                rounded-3xl
                p-8
                "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  mb-8
                  "
              >
                {t.skills.groups[group.title]}
              </h3>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-5
                  "
              >
                {group.items.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={i}
                      className="
                          flex
                          items-center
                          gap-3
                          p-4
                          rounded-xl
                          bg-slate-800/60
                          hover:-translate-y-1
                          transition
                          "
                    >
                      <Icon
                        className={`
                            text-3xl
                            ${skill.color}
                            `}
                      />

                      <span
                        className="
                            text-slate-200
                            text-sm
                            "
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
