import React from 'react';
import atracoesImg from '../../assets/atracoes.png';
import { Carroussel } from '../../components/carroussel/carroussel.jsx';
import { CarrousselCelebrity } from '../../components/carrousselCelebrity/carrousselCelebrity.jsx';
import './attractions.css';

/**
 * Componente da Página / Seção de Atrações (Attractions)
 */
export function Attractions() {
  const row1Attractions = [
    'FREI GILSON',
    'PE. MARCELO ROSSI',
    'PE. CHRYSTIAN SHANKAR',
    'ROSA DE SARON',
    'COLO DE DEUS',
    'JUNINHO CASSEMIRO',
    'THIAGO BRADO',
    'PADRE MANZOTTI',
  ];

  const row2Attractions = [
    'FLAVIO VITOR',
    'ALAM CARRION',
    'IRMÃ ZÉLIA',
    'GERADOS PELA IMACULADA',
    'GILL MOTTA',
    'FSJPII',
    'BANDA HALEV',
    'COLLIS',
  ];

  return (
    <section className="attractions-section" id="atracoes">
      {/* Grade e Brilho de Fundo */}
      <div className="attractions-grid-bg" />
      <div className="attractions-glow" />

      <div className="attractions-container">
        {/* Título da Seção */}
        <h2 className="attractions-title">
          Com o <span className="highlight">Sou Hallel</span> além de benefícios, você<br />
          contribui para o evento trazer várias atrações:
        </h2>

        {/* Imagem das Atrações em Destaque */}
        <div className="attractions-banner-wrapper">
          <img
            src={atracoesImg}
            alt="Atrações do Hallel - Frei Gilson, Padre Marcelo Rossi, Flavio Vitor, Juninho Cassemiro"
            className="attractions-banner-img"
          />
        </div>
      </div>

      {/* Linhas de Carrossel Infinito com Movimento Contínuo Lento (Sem paradas) */}
      <div className="attractions-carousel-wrapper">
        {/* Linha de cima: Deslocada um pouco para a direita em relação à de baixo */}
        <div className="attractions-carousel-row row-top">
          <Carroussel
            marquee={true}
            marqueeSpeed={38}
            showControls={false}
            className="attractions-carousel"
          >
            {row1Attractions.map((item, index) => (
              <CarrousselCelebrity key={`r1-${index}`} text={item} />
            ))}
          </Carroussel>
        </div>

        {/* Linha de baixo: Alinhada padrão */}
        <div className="attractions-carousel-row row-bottom">
          <Carroussel
            marquee={true}
            marqueeSpeed={42}
            showControls={false}
            className="attractions-carousel"
          >
            {row2Attractions.map((item, index) => (
              <CarrousselCelebrity key={`r2-${index}`} text={item} />
            ))}
          </Carroussel>
        </div>
      </div>
    </section>
  );
}

export default Attractions;
