import { TypeAnimation } from "react-type-animation";
import useLanguage from "../../hooks/useLanguage";

const HeroContent = () => {
  const { language, t } = useLanguage();

  return (
    <div>
      <span className="text-sky-400 font-semibold">
        {t.hero.greeting}
      </span>

      <h1
        className="
          mt-5
          text-6xl
          md:text-7xl
          font-black
          text-white
        "
      >
        {t.hero.name}
      </h1>

      <div
        className="
          mt-6
          text-3xl
          md:text-4xl
          font-bold
          text-sky-400
          h-16
        "
      >
        <TypeAnimation
          key={language}
          sequence={
            language === "en"
              ? [
                  "Front-End Developer",
                  2000,
                  "React Developer",
                  2000,
                  "WordPress Developer",
                  2000,
                  "UI Developer",
                  2000,
                ]
              : [
                  "توسعه‌دهنده فرانت‌اند",
                  2000,
                  "توسعه‌دهنده React",
                  2000,
                  "توسعه‌دهنده وردپرس",
                  2000,
                  "طراح رابط کاربری",
                  2000,
                ]
          }
          repeat={Infinity}
        />
      </div>

      <p
        className="
          mt-8
          max-w-xl
          text-slate-300
          text-lg
          leading-8
        "
      >
        {t.hero.description}
      </p>
    </div>
  );
};

export default HeroContent;