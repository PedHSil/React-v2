import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import styles from '../styles/Projects.module.css';
import { ExternalLink, X, Github } from 'lucide-react';
import Ampere from '../imgs/ampere.png';

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
    title: "Dashboard Analytics",
    shortDescription: "Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios em tempo real.",
    fullDescription: "Aplicação de analytics com visualização de dados em tempo real, permitindo análise de métricas de negócio através de gráficos interativos, filtros avançados e exportação de relatórios. Integração com múltiplas APIs e banco de dados para processamento de grandes volumes de informação.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["React", "TypeScript", "D3.js", "Python", "PostgreSQL"],
    github: "https://github.com/seu-usuario/projeto2",
    demo: "https://projeto2-demo.com"
  },
  {
    id: 3,
    title: "Task Management App",
    shortDescription: "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em equipe e notificações.",
    fullDescription: "Sistema de gerenciamento de projetos e tarefas com recursos de colaboração em tempo real, atribuição de tarefas, priorização, sistema de notificações push, integração com calendário e geração de relatórios de produtividade. Suporta múltiplos projetos e equipes.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    github: "https://github.com/seu-usuario/projeto3",
    demo: "https://projeto3-demo.com"
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

  // observe section to trigger animation on scroll
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  // safe body overflow handling when modal opens
  useEffect(() => {
    if (selectedProject) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous || 'unset';
      };
    }
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // animation variants
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

      <motion.div
        className={styles.grid}
        variants={containerVariant}
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate={reduceMotion ? 'visible' : controls}
        aria-live="polite"
      >
        {projectsData.map((project) => (
  <motion.article
    key={project.id}
    className={styles.projectCard}
    variants={cardVariant}
    // transforma apenas visually — não deve provocar reflow
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    style={{ willChange: 'transform' }}
    onHoverStart={(e) => {
      // garante que card sobe visualmente sem ser coberto
      e.currentTarget.style.zIndex = 20;
      e.currentTarget.style.position = 'relative';
    }}
    onHoverEnd={(e) => {
      e.currentTarget.style.zIndex = '';
      e.currentTarget.style.position = '';
    }}
    role="group"
    aria-labelledby={`project-title-${project.id}`}
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
        className={styles.btnDetails}
        onClick={() => openModal(project)}
        aria-haspopup="dialog"
        aria-controls={selectedProject ? 'project-modal' : undefined}
      >
        Saiba mais
      </button>
    </div>
  </motion.article>
))}

      </motion.div>

      {/* Modal */}
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
