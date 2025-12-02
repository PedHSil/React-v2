import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import styles from '../styles/Skill.module.css';
import * as SimpleIcons from 'simple-icons/icons';
import { Database, Settings } from 'lucide-react';

const skills = [
  { name: "Python", iconSlug: "python", description: "Desenvolvimento backend, automação e análise de dados" },
  { name: "HTML", iconSlug: "html5", description: "Estruturação semântica de páginas web modernas" },
  { name: "CSS", iconSlug: "css", description: "Estilização avançada e design responsivo" },
  { name: "JavaScript", iconSlug: "javascript", description: "Programação client-side e interatividade dinâmica" },
  { name: "React", iconSlug: "react", description: "Construção de interfaces modernas e componentes reutilizáveis" },
  { name: "TypeScript", iconSlug: "typescript", description: "JavaScript tipado para código mais seguro e escalável" },
  { name: "PHP", iconSlug: "php", description: "Desenvolvimento backend e integração com bancos de dados" },
  { name: "SQL", icon: Database, isLucide: true, description: "Consultas e manipulação de dados relacionais" },
  { name: "MySQL", iconSlug: "mysql", description: "Sistema de gerenciamento de banco de dados relacional" },
  { name: "MariaDB", iconSlug: "mariadb", description: "Banco de dados open-source de alta performance" },
  { name: "Django", iconSlug: "django", description: "Framework web Python para desenvolvimento rápido" },
  { name: "Node.js", iconSlug: "nodedotjs", description: "Runtime JavaScript para desenvolvimento backend" },
  { name: "Java", iconSlug: "openjdk", description: "Programação orientada a objetos e aplicações enterprise" },
  { name: "DevOps", icon: Settings, isLucide: true, description: "Automação, CI/CD e infraestrutura como código" },
  { name: "Git", iconSlug: "git", description: "Controle de versão e colaboração em projetos" },
  { name: "WordPress", iconSlug: "wordpress", description: "CMS para criação de sites e blogs profissionais" },
  { name: "Linux", iconSlug: "linux", description: "Sistema operacional para servidores e desenvolvimento" },
];

export default function SkillSets() {
  const getIcon = (iconSlug) => {
    if (!iconSlug) return null;
    const iconKey = `si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(1)}`;
    return SimpleIcons[iconKey];
  };

  // ref para a seção inteira
  const sectionRef = useRef(null);
  const controls = useAnimation();

  // observa quando a seção entra na viewport
  const isInView = useInView(sectionRef, { once: true, margin: '-180px' });

  // respeita preferência do usuário por reduzir movimento
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  // variants
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 76 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skillsets"
      className={styles.section}
      aria-labelledby="skillsets-title"
      ref={sectionRef}
    >
      <h1 id="skillsets-title" className={styles.title}>
        Minhas Skill-Sets
      </h1>

      <motion.div
        className={styles.grid}
        variants={containerVariant}
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate={reduceMotion ? 'visible' : controls}
        aria-live="polite"
      >
        {skills.map((skill, idx) => {
          const iconData = skill.isLucide ? null : getIcon(skill.iconSlug);

          // handlers para ajustar zIndex/position sem causar reflow dos irmãos
          const handleHoverStart = (event) => {
            if (reduceMotion) return;
            const el = event.currentTarget;
            el.style.zIndex = '30';
            el.style.position = 'relative';
            // small fix: ensure transform-rendering context
            el.style.transformStyle = 'preserve-3d';
          };

          const handleHoverEnd = (event) => {
            if (reduceMotion) return;
            const el = event.currentTarget;
            el.style.zIndex = '';
            el.style.position = '';
            el.style.transformStyle = '';
          };

          return (
            <motion.article
              key={skill.name + idx}
              className={styles.skillCard}
              variants={cardVariant}
              // micro-interaction ao passar o mouse (só se não for reduced motion)
              whileHover={reduceMotion ? {} : { y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              role="article"
              aria-label={`${skill.name} — ${skill.description}`}
              style={{ willChange: 'transform' }}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            >
              <div className={styles.iconCircle} aria-hidden>
                {skill.isLucide ? (
                  // lucide icon como componente
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
              <p className={styles.skillDescription}>{skill.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
