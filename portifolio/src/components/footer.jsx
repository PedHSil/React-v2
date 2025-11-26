import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>
                &copy; {new Date().getFullYear()} Pedro Silva. Todos os direitos reservados.
            </p>
        </footer>
    );
}