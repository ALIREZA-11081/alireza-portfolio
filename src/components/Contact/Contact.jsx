import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import useLanguage from "../../hooks/useLanguage";
import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import ContactCard from "./ContactCard";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-28">
      <Container>
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

        <p
          className="
    mx-auto
    mt-6
    max-w-2xl
    text-center
    md:text-sm
    leading-8
    text-slate-400
  "
        >
          {t.contact.description}
        </p>

        <div
          className="
            mt-16
            grid
            gap-6
         
            sm:grid-cols-2
          "
        >
          <ContactCard
            icon={FaEnvelope}
            title="Email"
            value="alirezarstg11081@gmail.com"
            href="mailto:alirezarstg11081@gmail.com"
          />

          <ContactCard
            icon={FaGithub}
            title="GitHub"
            value="github.com/ALIREZA-11081 (ALIREZA)"
            href="https://github.com/ALIREZA-11081
"
          />

          <ContactCard
            icon={FaLinkedin}
            title="LinkedIn"
            value="linkedin.com/in/alireza-rastega11081"
            href="https://www.linkedin.com/in/alireza-rastega11081
"
          />
          <ContactCard
            icon={FaPhoneAlt}
            title="Phone"
            value="+98 917 748 8316"
            href="tel:+989177488316"
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
