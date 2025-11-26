import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "sobre", label: "Sobre mim", href: "#sobre" },
    { id: "linguagens", label: "Skill-Sets", href: "#skillsets" },
    { id: "projetos", label: "Projetos", href: "#projetos" },
    { id: "contato", label: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 720 && open) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <header className={styles.navbar}>
      <nav className={styles.container} aria-label="Navegação principal">
        {/* LEFT: brand */}
        <div className={styles.brand}>
          <a href="#top" className={styles.brandLink}>
            {/* substitua por <img src="/logo.svg" alt="Logo" className={styles.brandLogoImg} /> se tiver SVG */}
            <span className={styles.brandLogo}>PS</span>
            <span className={styles.brandName}>Pedro Silva</span>
          </a>
        </div>

        {/* CENTER: links */}
        <ul className={`${styles.navList} ${open ? styles.open : ""}`} role="menubar">
          {links.map((l) => (
            <li key={l.id} className={styles.navItem} role="none">
              <a
                className={styles.link}
                href={l.href}
                onClick={handleLinkClick}
                role="menuitem"
              >
                {l.label}
              </a>
            </li>
          ))}

          {/* Socials dentro do menu (aparecem apenas em mobile quando o menu está aberto) */}
          
        </ul>

        {/* RIGHT: social icons (desktop) */}
        <div className={styles.socials} aria-hidden={open}>
          <a
            className={styles.iconLink}
            href="https://github.com/PedHSil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            className={styles.iconLink}
            href="https://www.linkedin.com/in/pedro-silva-63630228a/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            className={styles.iconLink}
            href="mailto:pedroh422silva@gmail.com"
            aria-label="Enviar email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* hamburger */}
        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={styles.bars} aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
