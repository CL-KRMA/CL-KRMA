import React from "react";
import reactLogo from "../assets/logos/react.png";
import nodeLogo from "../assets/logos/nodejs.png";
import mysqlLogo from "../assets/logos/mysql.png";
import mongoLogo from "../assets/logos/mongodb.png";
import wordpressLogo from "../assets/logos/wordpress.png";
import apacheLogo from "../assets/logos/apache.png";
import nginxLogo from "../assets/logos/nginx.png";

export default function Skills() {
  const skills = [
    { category: "Frontend/Backend", items: [
      { name: "React.js", logo: reactLogo },
      { name: "Node.js (Express)", logo: nodeLogo },
      { name: "API REST" }
    ]},
    { category: "Bases de données", items: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongoLogo }
    ]},
    { category: "CMS", items: [
      { name: "Développement et optimisation WordPress", logo: wordpressLogo }
    ]},
    { category: "Infrastructure & Ops", items: [
      { name: "Linux (AWS EC2, DigitalOcean, OVH)" }
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
                  <img src={item.logo} alt={item.name} className="skill-logo" />
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
