import heroImage from "../../assets/images/hero.png";

import { motion } from "framer-motion";

import {
  FaReact,
  FaWordpress,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";


const skills = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
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
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-300",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    color: "text-blue-400",
  },
];

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center">

      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[90px]" />


<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[460px] h-[460px]"
>
{skills.map((skill, index) => {
  const angle = (360 / skills.length) * index;

  return (
    <div
      key={index}
className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `
          rotate(${angle}deg)
          translateY(-220px)
          rotate(-${angle}deg)
        `,
      }}
    >
      <div
        className="
        h-14
        w-14
        rounded-2xl
        bg-slate-900/80
        backdrop-blur-xl
        border
        border-slate-700
        flex
        items-center
        justify-center
        shadow-xl
        "
      >
        <skill.icon
          className={`${skill.color} text-3xl`}
        />
      </div>
    </div>
  );
})}


  
</motion.div>



      {/* Main Circle */}

      <div className="relative w-[360px] h-[360px] rounded-full border border-slate-700 flex items-center justify-center">

        <img
          src={heroImage}
          alt="hero"
         className="
w-[300px]
rounded-full
relative
z-20
border-4
border-slate-800
shadow-2xl
"
        />

      </div>

    </div>
  );
};

export default HeroImage;