import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import styles from '../styles/Projects.module.css';
import { ExternalLink, X, Github } from 'lucide-react';
import Ampere from '../imgs/ampere.png';
import Java from '../imgs/java.png';
import Clinica from '../imgs/clinica.png';

const projectsData = [
  {
    id: 1,
    title: "Ampere do Brasil",
    shortDescription: "Site dinamico para empresa de energia solar, com sistema de gerenciamento de conteúdo personalizado.",
    fullDescription: "Desenvolvimento de um site corporativo para Ampere do Brasil, empresa em cabos eletricos de diferentes segmentos. O site apresenta um design moderno e responsivo, com seções detalhadas sobre os serviços oferecidos, projetos realizados e informações institucionais. Inclui um sistema de gerenciamento de conteúdo (CMS) personalizado para facilitar atualizações futuras pelo cliente.",
    image: Ampere,
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    demo: "https://www.amperecompany.com/"
  },
  {
    id: 2,
    title: "Painel de Analytics",
    shortDescription: "Dashboard de analytics com visualização de dados em tempo real.",
    fullDescription: "Dashboard contendo um CRUD completo para gestão de usuários e suas informações. Contem uma comunicação com um banco de dados MySQL para armazenamento e recuperação de dados.",
    image: Java,
    technologies: ["Java", "MySQL"],
    github: "https://github.com/PedHSil/APS---2025-02---23-09-2025",
  },
  {
    id: 3,
    title: "Clinica Médica",
    shortDescription: "Sistema de gerenciamento para clínica médica com agendamento de consultas e prontuários eletrônicos.",
    fullDescription: "Sistema completo para gerenciamento de uma clínica médica, incluindo funcionalidades para agendamento de consultas, gerenciamento de prontuários eletrônicos, controle de estoque de medicamentos e geração de relatórios financeiros. O sistema foi desenvolvido com foco em usabilidade e segurança dos dados dos pacientes.",
    image: Clinica,
    technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    github: "https://github.com/PedHSil/front-end-aps",
  },
  {
    id: 4,
    title: "Social Media API",
    shortDescription: "API RESTful para rede social com sistema de posts, comentários, likes e sistema de seguidores.",
    fullDescription: "API completa para aplicação de rede social incluindo autenticação JWT, sistema de posts com imagens, comentários aninhados, sistema de likes e compartilhamentos, funcionalidade de seguir/deixar de seguir usuários, feed personalizado baseado em algoritmo, e sistema de notificações em tempo real.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/seu-usuario/projeto4"
  },
  {
    id: 5,
    title: "Portfolio Website",
    shortDescription: "Site portfolio moderno e responsivo com animações suaves e design minimalista.",
    fullDescription: "Website portfolio desenvolvido com foco em performance e experiência do usuário. Conta com animações suaves, transições elegantes, design responsivo para todos os dispositivos, otimização SEO, modo escuro/claro, e integração com formulário de contato. Desenvolvido com as melhores práticas de acessibilidade.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    technologies: ["React", "CSS3", "JavaScript", "Vite"],
    github: "https://github.com/seu-usuario/projeto5",
    demo: "https://projeto5-demo.com"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    shortDescription: "Aplicativo de previsão do tempo com dados em tempo real e interface intuitiva.",
    fullDescription: "Aplicação de previsão meteorológica que utiliza APIs de clima para fornecer dados precisos e atualizados. Recursos incluem previsão para 7 dias, condições atuais detalhadas, mapas de radar, alertas climáticos, histórico de temperaturas e busca por localização. Interface responsiva e animações baseadas nas condições climáticas.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    technologies: ["React", "OpenWeather API", "CSS3", "Geolocation API"],
    github: "https://github.com/seu-usuario/projeto6",
    demo: "https://projeto6-demo.com"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRef = useRef(null);
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  useEffect(() => {
    if (selectedProject) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous || 'unset';
      };
    }
  }, [selectedProject]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedProject]);

  const openModal = (project) => {
  console.log('openModal called for project:', project?.title ?? project);
  setSelectedProject(project);
};

  const closeModal = () => setSelectedProject(null);

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const modalOverlayVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.18 } },
  };

  const modalContentVariant = {
    hidden: { opacity: 0, scale: 0.98, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.98, y: 8, transition: { duration: 0.18 } },
  };

  const hoverProps = reduceMotion
    ? {}
    : { whileHover: { translateY: -8, scale: 1.02 }, transition: { type: 'spring', stiffness: 220, damping: 20 } };

  return (
    <section
      id="projetos"
      className={styles.section}
      aria-labelledby="projects-title"
      ref={sectionRef}
    >
      <h1 id="projects-title" className={styles.title}>
        Meus Projetos
      </h1>

      {/* parent motion controla o reveal dos filhos */}
      <motion.div
        className={styles.grid}
        variants={containerVariant}
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate={reduceMotion ? 'visible' : controls}
        aria-live="polite"
      >
        {projectsData.map((project) => (
          // article estático no layout
          <article
            key={project.id}
            className={styles.projectCard}
            role="group"
            aria-labelledby={`project-title-${project.id}`}
            style={{ alignSelf: 'start' }}
          >
            {/* child: apenas variants (sem initial/animate) para respeitar o container */}
            <motion.div
              className={styles.cardInner}
              variants={cardVariant}
              {...hoverProps}
              style={{ willChange: 'transform' }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay} aria-hidden />
              </div>

              <div className={styles.cardContent}>
                <h3 id={`project-title-${project.id}`} className={styles.projectTitle}>
                  {project.title}
                </h3>
                <p className={styles.projectDescription}>
                  {project.shortDescription}
                </p>

                <div className={styles.techStack}>
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.techBadge}>+{project.technologies.length - 3}</span>
                  )}
                </div>

                <button
                  type="button"
                  className={styles.btnDetails}
                  onClick={() => openModal(project)}
                  aria-haspopup="dialog"
                  aria-controls="project-modal"
                >
                  Saiba mais
                </button>
              </div>
            </motion.div>
          </article>
        ))}
      </motion.div>

      {selectedProject && (
        <motion.div
          className={styles.modalOverlay}
          onClick={closeModal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalOverlayVariant}
          role="dialog"
          aria-modal="true"
          id="project-modal"
        >
          <motion.div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            variants={modalContentVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Fechar modal"
              type="button"
            >
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className={styles.modalImage}
              />
            </div>

            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>

              <p className={styles.modalDescription}>{selectedProject.fullDescription}</p>

              <div className={styles.modalSection}>
                <h3 className={styles.sectionTitle}>Tecnologias Utilizadas</h3>
                <div className={styles.techGrid}>
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.modalActions}>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalBtn}
                  >
                    <Github size={16} />
                    <span style={{ marginLeft: 8 }}>Ver no GitHub</span>
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.modalBtn} ${styles.modalBtnPrimary}`}
                  >
                    <ExternalLink size={16} />
                    <span style={{ marginLeft: 8 }}>Ver Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}