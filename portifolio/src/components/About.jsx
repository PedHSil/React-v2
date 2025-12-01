import React from "react";
import styles from "../styles/About.module.css";
import Curriculo from "../documents/Currículo.pdf"

export default function About() {
    return (
        <section id="sobre" className={styles.section} aria-labelledby="sobre-title">
            {/* Animated Background */}
            <div className={styles.bgAnimation}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>

            <div className={styles.container}>
                {/* Header com badge */}
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Sobre Mim
                    </div>
                    <h2 id="sobre-title" className={styles.sectionTitle}>
                        Transformando ideias em <span className={styles.highlight}>código</span>
                    </h2>
                </div>

                {/* Grid com informações */}
                <div className={styles.grid}>
                    {/* Card Principal - Código */}
                    <div className={styles.codeCard}>
                        <div className={styles.codeHeader}>
                            <div className={`${styles.codeDot} ${styles.codeDotRed}`}></div>
                            <div className={`${styles.codeDot} ${styles.codeDotYellow}`}></div>
                            <div className={`${styles.codeDot} ${styles.codeDotGreen}`}></div>
                            <span className={styles.fileName}>developer.js</span>
                        </div>

                        <div className={styles.codeContent}>
                            <p className={styles.codeLine}>
                                <span className={styles.codeKey}>const</span> <span className={styles.codeVar}>developer</span> = &#123;
                            </p>
                            <p className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>nome:</span> <span className={styles.codeString}>"Pedro Henrique da Silva"</span>,
                            </p>
                            <p className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>idade:</span> <span className={styles.codeNumber}>20</span>,
                            </p>
                            <p className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>localização:</span> <span className={styles.codeString}>"Campinas, SP"</span>,
                            </p>
                            <p className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>formação:</span> <span className={styles.codeString}>"Ciência da Computação"</span>,
                            </p>
                            <p className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>instituição:</span> <span className={styles.codeString}>"UNIP"</span>,
                            </p>
                            <p className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>idiomas:</span> [<span className={styles.codeString}>"PT-BR"</span>, <span className={styles.codeString}>"EN"</span>],
                            </p>
                            <p className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.codeProp}>foco:</span> <span className={styles.codeString}>"Full Stack Development"</span>,
                            </p>
                            <p className={styles.codeLine}>
                                &#125;;
                            </p>
                            <p className={styles.codeLine} style={{ marginTop: '12px' }}>
                                <span className={styles.codeComment}>// Criando soluções que fazem diferença 🚀</span>
                            </p>
                        </div>
                    </div>

                    {/* Cards laterais */}
                    <div className={styles.sideCards}>
                        {/* Card Sobre */}
                        <div className={styles.infoCard}>
                            <div className={styles.cardIcon}>💡</div>
                            <h3 className={styles.cardTitle}>Sobre</h3>
                            <p className={styles.cardText}>
                                Desenvolvedor Full Stack focado em criar soluções funcionais e bem estruturadas. 
                                Apaixonado por tecnologia e sempre buscando aprender novas ferramentas.
                            </p>
                        </div>

                        {/* Card Skills */}
                        <div className={styles.infoCard}>
                            <div className={styles.cardIcon}>⚡</div>
                            <h3 className={styles.cardTitle}>Soft Skills</h3>
                            <div className={styles.skillTags}>
                                <span className={styles.skillTag}>Proativo</span>
                                <span className={styles.skillTag}>Adaptável</span>
                                <span className={styles.skillTag}>Colaborativo</span>
                                <span className={styles.skillTag}>Problem Solver</span>
                            </div>
                        </div>

                        {/* Card Idiomas */}
                        <div className={styles.infoCard}>
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
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
}