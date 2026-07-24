import { useState } from "react";
import { Menu, X } from "lucide-react";
import useLanguage from "../../hooks/useLanguage";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const [open, setOpen] = useState(false);

  const links = [
    { title: t.nav.home, href: "#home" },
    { title: t.nav.about, href: "#about" },
    { title: t.nav.skills, href: "#skills" },
    { title: t.nav.projects, href: "#projects" },
    { title: t.nav.experience, href: "#experience" },
    { title: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-wide text-white"
        >
          ALIREZA
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 duration-300"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-xl border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400 duration-300"
          >
            {language === "en" ? "فارسی" : "English"}
          </button>

          <a
            href="/cv/Alireza-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 duration-300 font-semibold text-black"
          >
            {t.hero.button}
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-lg border border-slate-700 text-white text-sm hover:border-cyan-400 hover:text-cyan-400 duration-300"
          >
            {language === "en" ? "فارسی" : "EN"}
          </button>

          {/* CV */}
          <a
            href="/cv/Alireza-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 duration-300 font-semibold text-black text-sm"
          >
           {t.hero. button}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden absolute top-20 left-0 w-full
          bg-slate-950/90 backdrop-blur-xl
          border-b border-white/10
          overflow-hidden
          transition-all duration-300
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 duration-300"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;