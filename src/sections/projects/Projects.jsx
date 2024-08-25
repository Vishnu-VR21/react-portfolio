import styles from './ProjectsStyles.module.css';
import mlogo from '../../assets/movielogo.png';
import watch from '../../assets/watch.png';
import network from '../../assets/network.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mlogo}
          link="https://github.com/"
          h3="Project name"
          p="descriptions"
        />
        <ProjectCard
          src={watch}
          link="https://github.com/"
          h3="Project name"
          p="descriptions"
        />
        <ProjectCard
          src={network}
          link="https://github.com/"
          h3="Project name"
          p="descriptions"
        />
      </div>
    </section>
  );
}

export default Projects;
