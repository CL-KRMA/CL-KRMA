export default function Projects() {
  const projects = [
    {
      title: "Cryptodash – Projet DevOps complet",
      description: "Pipeline DevOps complet : Infrastructure as Code (Terraform/Kubernetes), application containerisée, et déploiement GitOps automatisé avec ArgoCD.",
      github: "https://github.com/CL-KRMA/cryptodash-infra",
      demo: null,
      extraLinks: [
        { label: "Repo Infra", url: "https://github.com/CL-KRMA/cryptodash-infra" },
        { label: "Repo App", url: "https://github.com/CL-KRMA/cryptodash-app" },
        { label: "Repo GitOps", url: "https://github.com/CL-KRMA/cryptodash-gitops" }
      ]
    },
    {
      title: "AI‑Chat‑app – Application IA multi‑modèles",
      description: "Application Next.js intégrant plusieurs modèles IA (Gemma, LLaMA, LLaVA) avec API REST et interface utilisateur.",
      github: "https://github.com/CL-KRMA/AI-Chat-app",
      demo: null,
      extraLinks: [
        { label: "Repo Infra", url: "https://github.com/CL-KRMA/AI-Chat-infra" },
        { label: "Repo App", url: "https://github.com/CL-KRMA/AI-Chat-app" },
        { label: "Repo GitOps", url: "https://github.com/CL-KRMA/AI-Chat-gitops" }
      ]
    },
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
              {project.extraLinks && project.extraLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                  📂 {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
