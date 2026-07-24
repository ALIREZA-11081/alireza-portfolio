import ProjectGallery from "./ProjectGallery";
import useLanguage from "../../hooks/useLanguage";
const ProjectCard = ({ project }) => {
const { language } = useLanguage();
  return (
    <div
      className="
        group
        bg-slate-900/70
        border border-slate-800
        rounded-3xl
        overflow-hidden
        hover:-translate-y-2
        transition-all
        duration-300
        w-full
      "
    >

      <ProjectGallery
        images={project.images}
      />


      <div
        className="
          p-5
          sm:p-7
        "
      >

        <h3
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-white
          "
        >
          {typeof project.title === "object"
  ? project.title[language]
  : project.title}
        </h3>


        <p
          className="
            mt-3
            sm:mt-4
            text-sm
            sm:text-base
            text-slate-400
            leading-7
          "
        >
          {typeof project.description === "object"
  ? project.description[language]
  : project.description}
        </p>


        <div
          className="
            flex
            flex-wrap
            gap-2
            sm:gap-3
            mt-5
            sm:mt-6
          "
        >

          {
            project.technologies.map((tech,index)=>(

              <span
                key={index}
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  sm:text-sm
                  bg-sky-500/10
                  text-sky-400
                  border
                  border-sky-500/20
                "
              >
                {tech}
              </span>

            ))
          }

        </div>


      </div>


    </div>
  )
}


export default ProjectCard;