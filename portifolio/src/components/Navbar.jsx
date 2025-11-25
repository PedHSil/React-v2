import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "sobre", label: "Sobre mim", href: "#sobre" },
    { id: "linguagens", label: "Skill-Sets", href: "#skillsets" },
    { id: "projetos", label: "Projetos", href: "#projetos" },
    { id: "contato", label: "Contato", href: "#contato" },
  ];

  // fecha o menu ao redimensionar para desktop (bom para UX)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 720 && open) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  // fecha ao clicar num link (mobile)
  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <header className={styles.navbar}>
      <nav className={styles.container} aria-label="Navegação principal">
        {/* Lista centralizada de links */}
        <ul className={`${styles.navList} ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.id} className={styles.navItem}>
              <a
                className={styles.link}
                href={l.href}
                onClick={handleLinkClick}
                /* caso use react-router, troque por NavLink para controlar .active */
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* botão hamburger - aparece só em telas pequenas */}
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
