import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "../styles/About.module.css";
import Curriculo from "../documents/Currículo.pdf";

export default function About() {
    // referencia da section inteira
    const sectionRef = useRef(null);

    // useInView observa a ref e retorna true quando entra na viewport
    // { once: true } -> anima apenas a primeira vez (remova/coloque false se quiser repetir)
    const isInView = useInView(sectionRef, { once: true, margin: "-180px" });

    // controls para disparar animações
    const controls = useAnimation();

    // quando entra na view, inicia as animações
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Variants reutilizáveis
    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.04, // pequeno stagger entre filhos
            },
        },
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 180 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const lineVariant = {
        hidden: { opacity: 0, y: 18 },
        visible: (custom = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.56, ease: "easeOut", delay: custom },
        }),
    };

    return (
        <section
            id="sobre"
            className={styles.section}
            aria-labelledby="sobre-title"
            ref={sectionRef} // observamos a section inteira
        >
            {/* Animated Background */}
            <div className={styles.bgAnimation}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>

            <div className={styles.container}>
                {/* Header com badge */}
                <motion.div
                    className={styles.header}
                    variants={containerVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div className={styles.badge} variants={itemVariant}>
                        <span className={styles.badgeDot}></span>
                        Sobre Mim
                    </motion.div>

                    <motion.h2 id="sobre-title" className={styles.sectionTitle} variants={itemVariant}>
                        Transformando ideias em <span className={styles.highlight}>código</span>
                    </motion.h2>
                </motion.div>

                {/* Grid com informações */}
                <div className={styles.grid}>
                    {/* Card Principal - Código */}
                    <motion.div
                        className={styles.codeCard}
                        variants={containerVariant}
                        initial="hidden"
                        animate={controls}
                    >
                        <motion.div className={styles.codeHeader} variants={itemVariant}>
                            <div className={`${styles.codeDot} ${styles.codeDotRed}`}></div>
                            <div className={`${styles.codeDot} ${styles.codeDotYellow}`}></div>
                            <div className={`${styles.codeDot} ${styles.codeDotGreen}`}></div>
                            <motion.span className={styles.fileName} variants={itemVariant}>
                                developer.js
                            </motion.span>
                        </motion.div>

                        <motion.div className={styles.codeContent} variants={containerVariant}>
                            {/* cada linha é um motion.p com variant de linha (usando custom para delays menores) */}
                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.00}>
                                <span className={styles.codeKey}>const</span>{" "}
                                <span className={styles.codeVar}>developer</span> = &#123;
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.02}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>nome:</span>{" "}
                                <span className={styles.codeString}>"Pedro Henrique da Silva"</span>,
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.04}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>idade:</span>{" "}
                                <span className={styles.codeNumber}>20</span>,
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.06}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>localização:</span>{" "}
                                <span className={styles.codeString}>"Campinas, SP"</span>,
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.08}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>formação:</span>{" "}
                                <span className={styles.codeString}>"Ciência da Computação"</span>,
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.10}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>instituição:</span>{" "}
                                <span className={styles.codeString}>"UNIP"</span>,
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.12}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>formaturaPrevista:</span>{" "}
                                <span className={styles.codeNumber}>2028</span>,
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.14}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>idiomas:</span> [
                                <span className={styles.codeString}>"PT-BR"</span>,{" "}
                                <span className={styles.codeString}>"EN"</span>],
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.16}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>foco:</span>{" "}
                                <span className={styles.codeString}>"Full Stack Development"</span>,
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.18}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>projetos:</span> [
                                <span className={styles.codeString}>"Sites corporativos com CMS personalizado"</span>,
                                <span className={styles.codeString}>"Dashboards e sistemas internos"</span>,
                                <span className={styles.codeString}>"Aplicações full stack com APIs"</span>
                                ],
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.20}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>softSkills:</span> [
                                <span className={styles.codeString}>"Resolução de problemas"</span>,
                                <span className={styles.codeString}>"Aprendizado rápido"</span>,
                                <span className={styles.codeString}>"Comunicação"</span>
                                ],
                            </motion.p>

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.22}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>interesses:</span> [
                                <span className={styles.codeString}>"Web"</span>,
                                <span className={styles.codeString}>"Sistemas escaláveis"</span>,
                                <span className={styles.codeString}>"Cloud"</span>,
                                <span className={styles.codeString}>"Automação"</span>
                                ],
                            </motion.p>

                            {/* ... continue com as outras linhas usando lineVariant e custom delays ... */}

                            <motion.p className={styles.codeLine} variants={lineVariant} custom={0.28}>
                                &#125;;
                            </motion.p>

                            <motion.p
                                className={styles.codeLine}
                                style={{ marginTop: "12px" }}
                                variants={lineVariant}
                                custom={0.30}
                            >
                                <span className={styles.codeComment}>// Criando soluções que fazem diferença 🚀</span>
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Cards laterais */}
                    <motion.div
                        className={styles.sideCards}
                        variants={containerVariant}
                        initial="hidden"
                        animate={controls}
                    >
                        <motion.div className={styles.infoCard} variants={itemVariant}>
                            <div className={styles.cardIcon}>💡</div>
                            <h3 className={styles.cardTitle}>Sobre</h3>
                            <p className={styles.cardText}>
                                Desenvolvedor Full Stack focado em criar soluções funcionais e bem estruturadas.
                                Apaixonado por tecnologia e sempre buscando aprender novas ferramentas.
                            </p>
                        </motion.div>

                        <motion.div className={styles.infoCard} variants={itemVariant}>
                            <div className={styles.cardIcon}>⚡</div>
                            <h3 className={styles.cardTitle}>Soft Skills</h3>
                            <div className={styles.skillTags}>
                                <span className={styles.skillTag}>Proativo</span>
                                <span className={styles.skillTag}>Adaptável</span>
                                <span className={styles.skillTag}>Colaborativo</span>
                                <span className={styles.skillTag}>Problem Solver</span>
                            </div>
                        </motion.div>

                        <motion.div className={styles.infoCard} variants={itemVariant}>
                            <div className={styles.cardIcon}>🌎</div>
                            <h3 className={styles.cardTitle}>Idiomas</h3>
                            <div className={styles.languageList}>
                                <div className={styles.languageItem}>
                                    <span className={styles.languageName}>Português</span>
                                    <span className={styles.languageLevel}>Nativo</span>
                                </div>
                                <div className={styles.languageItem}>
                                    <span className={styles.languageName}>Inglês</span>
                                    <span className={styles.languageLevel}>Fluente</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* accessibility: se o usuário prefere reduzir movimento,
          não há animação — você pode manter isto no seu CSS global */}
            <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .${styles.section}, .${styles.container} {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
        </section>
    );
}
