import React from "react";
import { Mail, Phone } from "lucide-react";
import logoHallel from "../../assets/logo_hallel.png";
import "./footer.css";

// Ícones SVG para redes sociais (garantindo 100% de compatibilidade sem dependências externas)
const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TiktokIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

/**
 * Componente Footer
 *
 * @param {string} [email="hallel_email@gmail.com"] - Email de contato
 * @param {string} [phone="(16) 99225-4399"] - Telefone/WhatsApp de contato
 * @param {string} [instagramUrl="https://www.instagram.com/hallelfrancaoficial/"] - Link para o Instagram
 * @param {string} [tiktokUrl="https://www.tiktok.com/@hallelfrancaoficial"] - Link para o TikTok
 * @param {string} [facebookUrl="#"] - Link para o Facebook (opcional)
 * @param {string} [youtubeUrl="#"] - Link para o YouTube (opcional)
 * @param {string} [copyrightText="Todos os direitos reservados ao Hallel"] - Texto de copyright
 * @param {string} [logoSrc] - Caminho da imagem da logo (default: logo_hallel.png)
 * @param {Object} [styles] - Estilos inline customizados
 * @param {Object} [style] - Alias para styles
 * @param {string} [className] - Classes CSS adicionais
 */
export function Footer({
  email = "hallelfrancasp@hotmail.com",
  phone = "+55 16 99988-2969",
  instagramUrl = "https://www.instagram.com/hallelfrancaoficial/",
  tiktokUrl = "https://www.tiktok.com/@halleloficial",
  facebookUrl = "https://www.facebook.com/hallelfranca",
  youtubeUrl = "https://www.youtube.com/@Halleloficial",
  copyrightText = "Todos os direitos reservados ao Hallel",
  logoSrc = logoHallel,
  styles = {},
  style = {},
  className = "",
}) {
  const combinedStyles = { ...styles, ...style };

  // Formata o número de telefone para o link tel:
  const rawPhone = phone.replace(/\D/g, "");

  return (
    <footer className={`footer-container ${className}`} style={combinedStyles}>
      <div className="footer-content">
        {/* Coluna 1: Logo do Hallel */}
        <div className="footer-col-logo">
          <a href="#" aria-label="Hallel início">
            <img src={logoSrc} alt="Hallel Logo" className="footer-logo-img" />
          </a>
        </div>

        {/* Coluna 2: Informações de Contato */}
        <div className="footer-col-contact">
          <h4 className="footer-title">Contato</h4>

          <a href={`mailto:${email}`} className="footer-contact-item">
            <span className="footer-contact-icon">
              <Mail size={18} />
            </span>
            <span>Email: {email}</span>
          </a>

          <a href={`tel:${rawPhone}`} className="footer-contact-item">
            <span className="footer-contact-icon">
              <Phone size={18} />
            </span>
            <span>{phone}</span>
          </a>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="footer-col-social">
          <h4 className="footer-title">Redes sociais</h4>

          <div className="footer-social-links">
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram Hallel"
              >
                <InstagramIcon size={20} />
              </a>
            )}

            {tiktokUrl && (
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="TikTok Hallel"
              >
                <TiktokIcon size={20} />
              </a>
            )}

            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook Hallel"
              >
                <FacebookIcon size={20} />
              </a>
            )}

            {youtubeUrl && (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="YouTube Hallel"
              >
                <YoutubeIcon size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="footer-divider" />

      {/* Rodapé Bottom: Direitos Reservados */}
      <div className="footer-bottom">
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}

export default Footer;
