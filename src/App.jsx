import React from "react";
import { Navbar } from "./components/navbar/navbar.jsx";
import { Home } from "./pages/home/home.jsx";
import { Benefits } from "./pages/benefits/benefits.jsx";
import { Founder } from "./pages/founder/founder.jsx";
import { Attractions } from "./pages/attractions/attractions.jsx";
import { StageVideo } from "./pages/stageVideo/stageVideo.jsx";
import { UsersAvaliation } from "./pages/usersAvaliation/usersAvaliation.jsx";
import { ColapseFaq } from "./components/colapseFaq/colapseFaq.jsx";
import { Footer } from "./components/footer/footer.jsx";
import Faq from "./pages/faq/faq.jsx";

export default function App() {
  const navLinks = [
    { label: "BENEFÍCIOS", href: "#beneficios" },
    { label: "FUNDADORA", href: "#quem-somos" },
    { label: "ATRAÇÕES", href: "#atracoes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="app-layout">
      {/* Navbar Flutuante Fixa no Topo */}
      <Navbar
        navLinks={navLinks}
        buttonText="QUERO SER SOU HALLEL"
        buttonHref="#assinar"
      />

      {/* Conteúdo Principal */}
      <main className="main-content">
        {/* Gradiente Circular à Esquerda abrangendo Home, Benefits e Founder */}
        <div className="home-benefits-founder-glow" aria-hidden="true" />

        {/* Gradiente Circular à Direita abrangendo Founder e Atrações */}
        <div className="founder-attractions-glow" aria-hidden="true" />

        {/* Hero Section / Página Inicial (Home) - Inicia no topo absoluto (top: 0) */}
        <Home />

        {/* Seções Subsequentes */}
        <div className="sections-container">
          {/* Página / Seção de Benefícios */}
          <Benefits />

          {/* Página / Seção da Fundadora (Tia Lolita) */}
          <Founder />

          {/* Seção de Atrações */}
          <Attractions />

          {/* Seção do Vídeo Sorteio Palco Central - Temporariamente desabilitado*/}
          {/* <StageVideo /> */}

          {/* Seção Avaliações de Usuários (Sou Hallel) */}
          <UsersAvaliation />

          {/* Seção Perguntas Frequentes (FAQ) */}
          <Faq />
        </div>
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
  );
}
