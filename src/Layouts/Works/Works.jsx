import ProjectCard from "../../Componants/ProjectCard";
import "./assets/Works.scss";

function Works() {
  return (
    <div className="works">
      <h3>Recent works</h3>
      <div className="project-cards">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Works;
