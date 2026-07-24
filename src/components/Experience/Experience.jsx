import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import TimelineCard from "./TimelineCard";
import { experiences } from "../../data/experience";
import useLanguage from "../../hooks/useLanguage";

const Experience = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-slate-700 lg:block" />

          <div className="space-y-16">
            {experiences.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
