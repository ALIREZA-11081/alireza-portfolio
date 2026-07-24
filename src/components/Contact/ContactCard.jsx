import { motion } from "framer-motion";

const ContactCard = ({ icon: Icon, title, value, href }) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-sky-400/40
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-sky-500/10
          text-sky-400
          transition-all
          duration-300
          group-hover:bg-sky-500
          group-hover:text-white
        "
      >
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-center text-slate-400 break-all">
        {value}
      </p>
    </motion.a>
  );
};

export default ContactCard;