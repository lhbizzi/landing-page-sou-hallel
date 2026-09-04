import React from "react";
import { SubscriptionButton } from "../../components/subscriptionButton/subscriptionButton.jsx";
import "./home.css";

/**
 * Componente da Página Inicial (Home / Hero Section)
 */
export function Home() {
  return (
    <section className="home-hero-section">
      {/* Background Image com Overlay & Cor de Fundo */}
      <div className="hero-bg-layer" />

      {/* Efeitos de Brilho / Light Glow de Fundo */}
      <div className="hero-glow-left" />
      <div className="hero-glow-right" />

      {/* Container Centralizado para o Conteúdo */}
      <div className="hero-container">
        {/* Conteúdo Principal (Texto e Chamada à Ação) */}
        <div className="hero-content">
          <div className="hero-badge">HORA DE SER SOU HALLEL</div>

          <h1 className="hero-title">
            Ser <span className="hero-title-highlight">SOU HALLEL</span> é{" "}
            <br className="hero-title-br" />
            viver essa obra <br className="hero-title-br" />
            com intensidade
          </h1>

          <p className="hero-subtitle">
            Colabore com esta obra e receba benefícios <br className="hero-subtitle-br" />
            durante <strong>todo o ano e durante o evento.</strong>
          </p>

          <SubscriptionButton
            text="QUERO SER SOU HALLEL"
            href="#assinar"
            className="hero-cta-btn"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
