import { motion } from "framer-motion";

import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import useLanguage from "../../hooks/useLanguage";
import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";


const Projects = () => {

const { t } = useLanguage();

return (

<section
id="projects"
className="py-28"
>


<Container>


<SectionTitle
  title={t.projects.title}
  subtitle={t.projects.subtitle}
/>


<div
className="
grid
grid-cols-1
sm:grid-cols-2
gap-10
"
>


{
projects.map((project)=>(
<motion.div

key={project.id}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5
}}

>

<ProjectCard
project={project}
/>


</motion.div>
))
}


</div>


</Container>


</section>

)

}


export default Projects;