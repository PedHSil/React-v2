import React from "react";
import styles from "../styles/About.module.css";
import Myself from "../imgs/myself.jpg";
import Curriculo from "../documents/Currículo.pdf"

export default function About() {
    return (
        <section id="sobre" className={styles.section} aria-labelledby="sobre-title">

            <div className={styles.bgAnimation}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.card}>
                    {/* Coluna da Imagem */}
                    <div className={styles.avatarWrap}>
                        <div className={styles.avatarContainer}>
                            <div className={styles.avatarGlow}></div>
                            <img
                                src={Myself}
                                alt="Foto de Pedro Henrique"
                                className={styles.avatar}
                                width="380"
                                height="380"
                            />
                        </div>
                    </div>

                    {/* Coluna do Texto */}
                    <div className={styles.text}>
                        <div className={styles.titleGroup}>
                            <h1 id="sobre-title" className={styles.title}>
                                Pedro Henrique da Silva
                            </h1>
                            <p className={styles.subtitle}>Full-stack Developer Junior</p>
                        </div>

                        {/* Bloco de código com informações */}
                        <div className={styles.codeBlock}>
                            {/* Header com os três pontos */}
                            <div className={styles.codeHeader}>
                                <div className={`${styles.codeDot} ${styles.codeDotRed}`}></div>
                                <div className={`${styles.codeDot} ${styles.codeDotYellow}`}></div>
                                <div className={`${styles.codeDot} ${styles.codeDotGreen}`}></div>
                            </div>

                            {/* Conteúdo do código */}
                            <div className={styles.codeContent}>
                                <p className={styles.codeLine}>
                                    <span className={styles.codeKey}>const</span> developer = &#123;
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>nome:</span> <span className={styles.codeString}>"Pedro Henrique da Silva"</span>,
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>idade:</span> <span className={styles.codeNumber}>20</span>,
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>nascimento:</span> <span className={styles.codeString}>"2005-02-04"</span>,
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>localização:</span> <span className={styles.codeString}>"Campinas, SP"</span>,
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>formação:</span> <span className={styles.codeString}>"Ciência da Computação - UNIP"</span>,
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>idiomas:</span> [<span className={styles.codeString}>"Português"</span>, <span className={styles.codeString}>"Inglês (Fluente)"</span>],
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>foco:</span> <span className={styles.codeString}>"Full Stack Development"</span>,
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>softSkills:</span> [<span className={styles.codeString}>"Proativo"</span>, <span className={styles.codeString}>"Adaptável"</span>, <span className={styles.codeString}>"Colaborativo"</span>]
                                </p>
                                <p className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKey}>Apresentação:</span> <span className={styles.codeString}>"Tenho foco em criar soluções funcionais e bem estruturadas, sempre
                                        buscando aprender novas tecnologias e contribuir para projetos colaborativos.
                                        Fluente em inglês e com perfil proativo e adaptável."</span>
                                </p>
                                <p className={styles.codeLine}>
                                    &#125;;
                                </p>
                                <p className={styles.codeLine} style={{ marginTop: '8px' }}>
                                    <span className={styles.codeComment}>// Sempre buscando evoluir e contribuir 🚀</span>
                                </p>
                            </div>
                        </div>

                        {/* Botões de ação */}
                        <div className={styles.ctaRow}>
                            <a
                                className={`${styles.btn} ${styles.btnPrimary}`}
                                href={Curriculo}
                                download
                            >
                                📄 Baixar CV
                            </a>
                            <a className={styles.btn} href="#projetos">
                                🚀 Ver Projetos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}