import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Container from "../Common/Container";

const Footer = () => {
  return (
    <footer
      className="
        mt-24
        border-t
        border-slate-800
        bg-slate-950
      "
    >
      <Container>
        <div className="py-16">
          {/* Logo */}

          <h2
            className="
              text-center
              text-4xl
              font-black
              text-white
            "
          >
            ALIREZA
          </h2>

          <p
            className="
              mt-4
              text-center
              text-slate-400
            "
          >
            Front-End Developer • React • WordPress
          </p>

          {/* Navigation */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-8
            "
          >
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-slate-400
                  transition
                  hover:text-sky-400
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}

          <div
            className="
              mt-12
              flex
              justify-center
              gap-6
            "
          >
            <a
              href="https://github.com/ALIREZA-11081"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-slate-900
                p-4
                text-xl
                text-slate-300
                transition-all
                hover:-translate-y-1
                hover:bg-sky-500
                hover:text-white
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/alireza-rastega11081
"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-slate-900
                p-4
                text-xl
                text-slate-300
                transition-all
                hover:-translate-y-1
                hover:bg-sky-500
                hover:text-white
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="tel:+989177488316"
              className="
    rounded-full
    bg-slate-900
    p-4
    text-xl
    text-slate-300
    transition-all
    hover:-translate-y-1
    hover:bg-sky-500
    hover:text-white
  "
            >
              <FaPhoneAlt />
            </a>

            <a
              href="mailto:alirezarstg11081@email.com"
              className="
                rounded-full
                bg-slate-900
                p-4
                text-xl
                text-slate-300
                transition-all
                hover:-translate-y-1
                hover:bg-sky-500
                hover:text-white
              "
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}

          <div
            className="
              mt-14
              border-t
              border-slate-800
              pt-8
              text-center
            "
          >
            <p className="text-slate-500">
              © 2026 Alireza. All Rights Reserved.
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Built with React, Tailwind CSS & Framer Motion.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
