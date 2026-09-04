import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoHallel from '../../assets/logo_hallel.png';
import { SubscriptionButton } from '../subscriptionButton/subscriptionButton.jsx';
import './navbar.css';

/**
 * Componente Navbar
 * 
 * @param {Array<{label: string, href: string}>} [navLinks] - Lista de botões/links de navegação dentro da página
 * @param {Array<{label: string, href: string}>} [links] - Alias para navLinks
 * @param {React.ReactNode} [children] - Elementos de navegação customizados passados como filhos
 * @param {string} [buttonText="QUERO SER SOU HALLEL"] - Texto do botão de inscrição
 * @param {string} [buttonHref="#assinar"] - Link do botão de inscrição
 * @param {Function} [onButtonClick] - Callback do botão de inscrição
 * @param {string} [logoSrc] - Imagem da logo (default: logo_hallel.png de assets)
 * @param {Object} [styles] - Estilos inline customizados
 * @param {Object} [style] - Alias para styles
 * @param {string} [className] - Classes CSS adicionais
 */
export function Navbar({
  navLinks,
  links,
  children,
  buttonText = 'QUERO SER SOU HALLEL',
  buttonHref = '#assinar',
  onButtonClick,
  logoSrc = logoHallel,
  styles = {},
  style = {},
  className = '',
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Links padrão de navegação exibidos se nenhum for fornecido
  const defaultLinks = [
    { label: 'FAQ', href: '#faq' },
    { label: 'QUEM SOMOS', href: '#quem-somos' },
    { label: 'FALE CONOSCO', href: '#fale-conosco' },
  ];

  const navigationItems = navLinks || links || defaultLinks;
  const combinedStyles = { ...styles, ...style };

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <header className={`navbar-wrapper ${className}`} style={combinedStyles}>
      <nav className="navbar-container">
        {/* Logo do Hallel à Esquerda */}
        <a href="#" className="navbar-logo-link">
          <img src={logoSrc} alt="Hallel Logo" className="navbar-logo-img" />
        </a>

        {/* Botões de Navegação Centralizados / Links */}
        <ul className={`navbar-center-menu ${isMobileOpen ? 'is-open' : ''}`}>
          {children
            ? children
            : navigationItems.map((item, index) => {
                const label = typeof item === 'string' ? item : item.label;
                const href = typeof item === 'string' ? `#${item.toLowerCase().replace(/\s+/g, '-')}` : item.href;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="navbar-link"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}

          {/* Botão de Inscrição em Telas Menores (Mobile Dropdown) */}
          {isMobileOpen && (
            <li className="navbar-actions-mobile">
              <SubscriptionButton
                text={buttonText}
                href={buttonHref}
                onClick={() => {
                  setIsMobileOpen(false);
                  if (onButtonClick) onButtonClick();
                }}
                className="navbar-subscription-btn"
              />
            </li>
          )}
        </ul>

        {/* Botão de Inscrição à Direita (Desktop) */}
        <div className="navbar-actions">
          <SubscriptionButton
            text={buttonText}
            href={buttonHref}
            onClick={onButtonClick}
            className="navbar-subscription-btn"
          />
        </div>

        {/* Botão Hamburger (Mobile) */}
        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Alternar Menu"
        >
          {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
