import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/HeroTyping.module.css"; // ou use Tailwind

/**
 * Props:
 *  - lines: array de strings (frases a serem digitadas)
 *  - typingSpeed: ms por caractere (default 60)
 *  - pauseBetween: ms entre frases (default 1200)
 */
export default function HeroTyping({
  lines = [
    "Olá — eu sou Pedro Silva.",
    "Frontend Developer.",
    "Crio interfaces escaláveis e elegantes.",
  ],
  typingSpeed = 60,
  pauseBetween = 1200,
}) {
  const [display, setDisplay] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const mountedRef = useRef(true);

  // respeitar preferência de reduzir movimento
  const reduceMotion = typeof window !== "undefined" && window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      // fallback: sem animação — mostra primeira linha estática
      setDisplay(lines[0]);
      return;
    }

    if (!mountedRef.current) return;

    const currentLine = lines[lineIndex % lines.length];
    const isEndOfLine = !deleting && charIndex === currentLine.length;
    const isStartOfLine = deleting && charIndex === 0;

    let delay = typingSpeed;

    if (isEndOfLine) delay = pauseBetween;
    if (isStartOfLine) delay = typingSpeed / 2;

    const timer = setTimeout(() => {
      if (!mountedRef.current) return;

      if (!deleting) {
        // adiciona um caractere
        setDisplay(currentLine.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else {
        // remove um caractere
        setDisplay(currentLine.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }

      // se terminou de digitar, inicia deleção depois da pausa
      if (!deleting && charIndex + 1 > currentLine.length - 1) {
        // dá um tempo e começa a deletar
        setTimeout(() => {
          if (!mountedRef.current) return;
          setDeleting(true);
        }, pauseBetween);
      }

      // se terminou de deletar, passa pra próxima linha
      if (deleting && charIndex - 1 === 0) {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
      }
    }, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, deleting, lineIndex, lines, typingSpeed, pauseBetween, reduceMotion]);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {/* foto/logo */}
        <div className={styles.left}>
          <img
            src="/me.jpg" /* substitua pela tua imagem */
            alt="Foto de Pedro Silva"
            className={styles.avatar}
          />
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>
            <span className={styles.static}>Hi,</span>{" "}
            <span className={styles.type} aria-live="polite">{display}</span>
            <span className={styles.caret} aria-hidden="true">|</span>
          </h1>

          <p className={styles.subtitle}>
            Eu ajudo times a construir interfaces performáticas e acessíveis — React,
            Next.js e TypeScript.
          </p>

          <div className={styles.ctas}>
            <a href="#projetos" className={styles.btnPrimary}>Ver Projetos</a>
            <a href="/Pedro-Silva-CV.pdf" className={styles.btnGhost} target="_blank" rel="noopener noreferrer">Baixar CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
