
export default function Projects() {
  const projects = [
    {
      title: "Application React/Node.js, Next.js",
      description: "API REST + interface utilisateur moderne.",
      github: "https://github.com/CL-KRMA/Galerie-en-ligne-fullstack",
      demo: "https://galerie-en-ligne-fullstack.vercel.app/"
    },
    {
      title: "Taskflow – Gestion simplifiée des tâches Next.js",
      description: "Taskflow : API REST robuste avec interface utilisateur moderne et intuitive.",
      github: "https://github.com/CL-KRMA/Taskflow",
      demo: "https://taskflow-omega-teal.vercel.app/"
    },
    {
      title: "Site WordPress optimisé",
      description: "Performance et SEO améliorés.",
      github: "https://github.com/CL-KRMA",
      demo: "#"
    },
    {
      title: "Déploiement serveur Linux",
      description: "Configuration Nginx + SSL/TLS.",
      github: "https://github.com/CL-KRMA/",
      demo: null
    }
  ];

  return (
    <div className="projects">
      <h2 className="projects-title">🚀 Mes projets</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  🔗 Voir le code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  🌐 Voir la démo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
