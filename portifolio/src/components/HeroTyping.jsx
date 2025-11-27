import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/HeroTyping.module.css";
import myself from '../imgs/self.jpg'
import Curriculo from "../documents/Currículo.pdf"

/**
 * Hero Section com efeito de digitação moderno e profissional
 * Props:
 *  - lines: array de strings (frases a serem digitadas)
 *  - typingSpeed: ms por caractere (default 50)
 *  - pauseBetween: ms entre frases (default 2000)
 *  - deleteSpeed: velocidade de deleção (default 30)
 */
export default function HeroTyping({
  lines = [
    "Frontend Developer.",
    "UI/UX Enthusiast.",
    "Problem Solver.",
  ],
  typingSpeed = 50,
  deleteSpeed = 30,
  pauseBetween = 2000,
}) {
  const [display, setDisplay] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const mountedRef = useRef(true);

  // Respeitar preferência de reduzir movimento
  const reduceMotion = typeof window !== "undefined" && 
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(lines[0]);
      return;
    }

    if (!mountedRef.current || isPaused) return;

    const currentLine = lines[lineIndex];
    
    const timer = setTimeout(() => {
      if (!mountedRef.current) return;

      if (!isDeleting) {
        if (display.length < currentLine.length) {
          setDisplay(currentLine.slice(0, display.length + 1));
        } else {
          setIsPaused(true);
          setTimeout(() => {
            if (mountedRef.current) {
              setIsPaused(false);
              setIsDeleting(true);
            }
          }, pauseBetween);
        }
      } else {
        if (display.length > 0) {
          setDisplay(display.slice(0, -1));
        } else {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [display, isDeleting, isPaused, lineIndex, lines, typingSpeed, deleteSpeed, pauseBetween, reduceMotion]);

  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.bgAnimation}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>

      {/* Content Container */}
      <div className={styles.container}>
        
        {/* Left Side - Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageGlow}></div>
          <img
            src={myself}
            alt="Pedro Silva"
            className={styles.avatar}
          />
          <div className={styles.statusBadge}>
            <span className={styles.statusDot}></span>
            Disponível
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Aberto para novos projetos
          </div>

          <h1 className={styles.title}>
            <span className={styles.greeting}>Olá, eu sou</span>
            <span className={styles.name}>Pedro Henrique da Silva</span>
            
            <div className={styles.typingWrapper}>
              <span className={styles.typedText}>{display}</span>
              <span className={styles.cursor}>|</span>
            </div>
          </h1>

          <p className={styles.subtitle}>
            Crio interfaces escaláveis e elegantes com foco em performance e acessibilidade. 
            Transformo ideias em experiências digitais memoráveis.
          </p>

          <div className={styles.ctas}>
            <a href="#projetos" className={styles.btnPrimary}>
              Ver Projetos
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <a href={Curriculo} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              Baixar CV
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V11M8 11L5 8M8 11L11 8M2 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}