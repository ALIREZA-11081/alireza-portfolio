import { motion } from "framer-motion";
import useLanguage from "../../hooks/useLanguage";

const TimelineCard = ({ item, index }) => {
  const { language } = useLanguage();
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: true }}
      className={`relative flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute
          left-1/2
          top-8
          hidden
          h-5
          w-5
          -translate-x-1/2
          rounded-full
          border-4
          border-slate-950
          bg-sky-400
          shadow-[0_0_20px_rgba(56,189,248,.6)]
          lg:block
        "
      />

      {/* Card */}
      <div
        className="
          w-full
          lg:w-[46%]
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/60
          backdrop-blur-xl
          p-6
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-sky-400/40
        "
      >
        <span className="text-sm font-bold text-sky-400">{item.year}</span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {typeof item.title === "object" ? item.title[language] : item.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {typeof item.description === "object"
            ? item.description[language]
            : item.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-sky-500/20
                bg-sky-500/10
                px-3
                py-1
                text-sm
                text-sky-400
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
