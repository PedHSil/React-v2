import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, Twitter, Instagram } from 'lucide-react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'seu.email@exemplo.com',
      href: 'mailto:seu.email@exemplo.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Telefone',
      value: '+55 (19) 99999-9999',
      href: 'tel:+5519999999999'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/seuusuario',
      href: 'https://github.com/seuusuario'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/seuusuario',
      href: 'https://linkedin.com/in/seuusuario'
    }
  ];

  return (
    <section id="contato" className={styles.section} aria-labelledby="contato-title">
      <h1 id="contato-title" className={styles.title}>
        Vamos Trabalhar Juntos
      </h1>
      <p className={styles.subtitle}>
        Estou aberto a oportunidades e colaborações! Entre em contato comigo através do formulário ou pelas redes sociais.
      </p>
      
      <div className={styles.card}>
        {/* Coluna esquerda - Informações de contato */}
        <div className={styles.infoColumn}>
          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>Informações de Contato</h2>
            <p className={styles.infoText}>
              Sinta-se à vontade para entrar em contato. Respondo geralmente em até 24 horas.
            </p>
            
            <div className={styles.contactList}>
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.contactItem}
                >
                  <div className={styles.iconWrapper}>
                    {item.icon}
                  </div>
                  <div className={styles.contactText}>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.divider}></div>

            <div className={styles.socialSection}>
              <p className={styles.socialTitle}>Me encontre também em:</p>
              <div className={styles.socialLinks}>
                <a 
                  href="https://twitter.com/seuusuario" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="https://instagram.com/seuusuario" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita - Formulário */}
        <div className={styles.formColumn}>
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="(19) 99999-9999"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
                placeholder="Descreva seu projeto ou proposta..."
                rows="5"
              ></textarea>
            </div>

            <button 
              onClick={handleSubmit}
              className={styles.button}
            >
              <Send size={20} />
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}