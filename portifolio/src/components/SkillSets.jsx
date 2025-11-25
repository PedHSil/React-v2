import React from 'react'
import styles from '../styles/Skill.module.css'
import * as SimpleIcons from 'simple-icons/icons'
import { Database, Settings } from 'lucide-react'

const skills = [
  {
    name: "Python",
    iconSlug: "python",
    description: "Desenvolvimento backend, automação e análise de dados"
  },
  {
    name: "HTML",
    iconSlug: "html5",
    description: "Estruturação semântica de páginas web modernas"
  },
  {
    name: "CSS",
    iconSlug: "css",
    description: "Estilização avançada e design responsivo"
  },
  {
    name: "JavaScript",
    iconSlug: "javascript",
    description: "Programação client-side e interatividade dinâmica"
  },
  {
    name: "React",
    iconSlug: "react",
    description: "Construção de interfaces modernas e componentes reutilizáveis"
  },
  {
    name: "TypeScript",
    iconSlug: "typescript",
    description: "JavaScript tipado para código mais seguro e escalável"
  },
  {
    name: "PHP",
    iconSlug: "php",
    description: "Desenvolvimento backend e integração com bancos de dados"
  },
  {
    name: "SQL",
    icon: Database,
    isLucide: true,
    description: "Consultas e manipulação de dados relacionais"
  },
  {
    name: "MySQL",
    iconSlug: "mysql",
    description: "Sistema de gerenciamento de banco de dados relacional"
  },
  {
    name: "MariaDB",
    iconSlug: "mariadb",
    description: "Banco de dados open-source de alta performance"
  },
  {
    name: "Django",
    iconSlug: "django",
    description: "Framework web Python para desenvolvimento rápido"
  },
  {
    name: "Node.js",
    iconSlug: "nodedotjs",
    description: "Runtime JavaScript para desenvolvimento backend"
  },
  {
    name: "Java",
    iconSlug: "openjdk",
    description: "Programação orientada a objetos e aplicações enterprise"
  },
  {
    name: "DevOps",
    icon: Settings,
    isLucide: true,
    description: "Automação, CI/CD e infraestrutura como código"
  },
  {
    name: "Git",
    iconSlug: "git",
    description: "Controle de versão e colaboração em projetos"
  },
  {
    name: "WordPress",
    iconSlug: "wordpress",
    description: "CMS para criação de sites e blogs profissionais"
  },
  {
    name: "Linux",
    iconSlug: "linux",
    description: "Sistema operacional para servidores e desenvolvimento"
  }
]

export default function SkillSets() {
  const getIcon = (iconSlug) => {
    const iconKey = `si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(1)}`
    return SimpleIcons[iconKey]
  }

  return (
    <section id="skillsets" className={styles.section} aria-labelledby="skillsets-title">
      <h1 id="skillsets-title" className={styles.title}>
        Minhas Skill-Sets
      </h1>
      
      <div className={styles.grid}>
        {skills.map((skill, idx) => {
          const iconData = skill.isLucide ? null : getIcon(skill.iconSlug)
          
          return (
            <div key={idx} className={styles.skillCard}>
              <div className={styles.iconCircle}>
                {skill.isLucide ? (
                  <skill.icon className={styles.lucideIcon} strokeWidth={1.5} />
                ) : iconData ? (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.icon}
                    fill={`#${iconData.hex}`}
                  >
                    <title>{iconData.title}</title>
                    <path d={iconData.path} />
                  </svg>
                ) : null}
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillDescription}>
                {skill.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}