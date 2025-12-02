import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, Twitter, Instagram } from 'lucide-react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // animation controls + in-view
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'pedroh422silva@gmail.com', href: 'mailto:pedroh422silva@gmail.com' },
    { icon: <Phone size={20} />, label: 'Telefone', value: '+55 (19) 98263-4944', href: 'tel:+5519982634944' },
    { icon: <Github size={20} />, label: 'GitHub', value: 'github.com/PedHSil', href: 'https://github.com/PedHSil' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/pedro-silva', href: 'https://www.linkedin.com/in/pedro-silva-63630228a/?locale=en_US' }
  ];

  // variants
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // hover handlers to prevent layout shift (only when motion allowed)
  const onHoverStart = (e) => {
    if (reduceMotion) return;
    const el = e.currentTarget;
    el.style.zIndex = '40';
    el.style.position = 'relative';
    el.style.transformStyle = 'preserve-3d';
  };
  const onHoverEnd = (e) => {
    if (reduceMotion) return;
    const el = e.currentTarget;
    el.style.zIndex = '';
    el.style.position = '';
    el.style.transformStyle = '';
  };

  return (
    <section
      id="contato"
      className={styles.section}
      aria-labelledby="contato-title"
      ref={sectionRef}
    >
      <motion.h1
        id="contato-title"
        className={styles.title}
        variants={containerVariant}
        initial="hidden"
        animate={reduceMotion ? 'visible' : controls}
      >
        Vamos Trabalhar Juntos
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        variants={itemVariant}
        initial="hidden"
        animate={reduceMotion ? 'visible' : controls}
      >
        Estou aberto a oportunidades e colaborações! Entre em contato comigo através do formulário ou pelas redes sociais.
      </motion.p>

      <motion.div
        className={styles.card}
        variants={containerVariant}
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate={reduceMotion ? 'visible' : controls}
        aria-live="polite"
      >
        {/* Coluna esquerda - Informações de contato */}
        <motion.div className={styles.infoColumn} variants={itemVariant}>
          <div className={styles.infoContent}>
            <motion.h2 className={styles.infoTitle} variants={itemVariant}>Informações de Contato</motion.h2>
            <motion.p className={styles.infoText} variants={itemVariant}>
              Sinta-se à vontade para entrar em contato.
            </motion.p>

            <motion.div className={styles.contactList} variants={containerVariant}>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.contactItem}
                  variants={itemVariant}
                  whileHover={reduceMotion ? {} : { y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  onHoverStart={onHoverStart}
                  onHoverEnd={onHoverEnd}
                  style={{ willChange: 'transform' }}
                >
                  <div className={styles.iconWrapper} aria-hidden>{item.icon}</div>
                  <div className={styles.contactText}>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div className={styles.divider} variants={itemVariant} />

            <motion.div className={styles.socialSection} variants={itemVariant}>
              <p className={styles.socialTitle}>Me encontre também em:</p>
              <div className={styles.socialLinks}>
                <motion.a
                  href="https://x.com/PedroHSIL_?t=CYrKQt9qPGO0MUMbHG_BoQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  variants={itemVariant}
                  whileHover={reduceMotion ? {} : { y: -4 }}
                  onHoverStart={onHoverStart}
                  onHoverEnd={onHoverEnd}
                  style={{ willChange: 'transform' }}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/pedr.hsilva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  variants={itemVariant}
                  whileHover={reduceMotion ? {} : { y: -4 }}
                  onHoverStart={onHoverStart}
                  onHoverEnd={onHoverEnd}
                  style={{ willChange: 'transform' }}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Coluna direita - Formulário */}
        <motion.div className={styles.formColumn} variants={itemVariant}>
          <motion.form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
            <motion.div className={styles.formGroup} variants={itemVariant}>
              <label htmlFor="name" className={styles.label}>Nome Completo</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange}
                className={styles.input} required placeholder="Seu nome" />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariant}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                className={styles.input} required placeholder="seu.email@exemplo.com" />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariant}>
              <label htmlFor="phone" className={styles.label}>Telefone</label>
              <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                className={styles.input} placeholder="(19) 99999-9999" />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariant}>
              <label htmlFor="message" className={styles.label}>Mensagem</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                className={styles.textarea} required placeholder="Descreva seu projeto ou proposta..." rows="5" />
            </motion.div>

            <motion.button
              type="submit"
              className={styles.button}
              variants={itemVariant}
              whileHover={reduceMotion ? {} : { scale: 1.02 }}
              onHoverStart={onHoverStart}
              onHoverEnd={onHoverEnd}
              style={{ willChange: 'transform' }}
            >
              <Send size={16} style={{ marginRight: 8 }} /> Enviar Mensagem
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
