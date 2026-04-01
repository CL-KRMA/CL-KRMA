import Image from "next/image";
import reactLogo from "../app/assets/logos/react.png";
import nodeLogo from "../app/assets/logos/nodejs.png";
import nextLogo from "../app/assets/logos/nextjs.png";
import mysqlLogo from "../app/assets/logos/mysql.png";
import postgresLogo from "../app/assets/logos/postgresql.png";
import mongoLogo from "../app/assets/logos/mongodb.png";
import wordpressLogo from "../app/assets/logos/wordpress.png";
import apacheLogo from "../app/assets/logos/apache.png";
import nginxLogo from "../app/assets/logos/nginx.png";

export default function Skills() {
  const skills = [
    { category: "Frontend/Backend", items: [
      { name: "React.js", logo: reactLogo },
      { name: "Node.js (Express)", logo: nodeLogo },
      { name: "Next.js", logo: nextLogo },
      { name: "API REST" }
    ]},
    { category: "Bases de données", items: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "MongoDB", logo: mongoLogo }
    ]},
    { category: "CMS", items: [
      { name: "Développement et optimisation WordPress", logo: wordpressLogo }
    ]},
    { category: "Compétences DevOps", items: [
      { name: "Versioning : Git, GitHub, GitLab"},
      { name: "Systèmes : Linux, Bash, SSH"},
      { name: "Conteneurs : Docker, Kubernetes"},
      { name: "CI/CD : Jenkins, GitLab CI, GitHub Actions"},
      { name: "Cloud : AWS, Azure, GCP"},
      { name: "IaC : Terraform, Ansible"},
      { name: "Monitoring : Prometheus, Grafana"}
    ]},
    { category: "Serveurs Web", items: [
      { name: "Apache", logo: apacheLogo },
      { name: "Nginx", logo: nginxLogo },
      { name: "Reverse Proxy" },
      { name: "VirtualHosts" }
    ]},
    { category: "Sécurité", items: [
      { name: "SSL/TLS (Certbot/Let's Encrypt)" }
    ]},
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">💡 Mon expertise technique</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
              <li key={i}>
                {item.logo ? (
                  <Image src={item.logo} alt={item.name} className="skill-logo" />
                ) : (
                  "✅"
                )}
                <strong>{item.name}</strong>
              </li>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
