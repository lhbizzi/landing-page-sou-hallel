import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarrousselCards } from "../../components/carrousselCards/carrousselCards.jsx";
import "./usersAvaliation.css";

/**
 * Lista padrão de avaliações de benfeitores do Sou Hallel
 */
const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: "RAFAEL FUZISAWA",
    comment:
      "O sou Hallel proporcionou vários benefícios, comprei a camisa do hallel com aquele desconto. Recomendo!!",
  },
  {
    id: 2,
    name: "MARIA EDUARDA",
    comment:
      "A experiência de ser benfeitora Sou Hallel é incrível! Ter acesso aos sorteios e descontos exclusivos faz toda a diferença.",
  },
  {
    id: 3,
    name: "GABRIEL SANTOS",
    comment:
      "Muito gratificante apoiar essa obra tão abençoada e ainda poder participar de momentos únicos com os artistas e pregadores.",
  },
  {
    id: 4,
    name: "ANA CLARA",
    comment:
      "O desconto nos produtos oficiais e na entrada dos eventos valeu super a pena. Sou Hallel de coração!",
  },
  {
    id: 5,
    name: "LUCAS PEREIRA",
    comment:
      "Viver o Hallel o ano inteiro através do Sou Hallel transforma a nossa espiritualidade. Recomendo para toda a família!",
  },
];

/**
 * Componente da Página / Seção de Avaliações de Usuários
 *
 * @param {Array<{id: number, name: string, comment: string}>} [reviews] - Lista de avaliações customizadas
 */
export function UsersAvaliation({ reviews = DEFAULT_REVIEWS }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const totalReviews = reviews.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avançar para a próxima avaliação
  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  // Voltar para a avaliação anterior
  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Ir para uma avaliação específica
  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  // Gestos de toque (Touch Swipe) para mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextReview();
    } else if (distance < -45) {
      prevReview();
    }
  };

  // Autoplay suave a cada 5 segundos
  useEffect(() => {
    if (isHovered || totalReviews <= 1) return;

    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, totalReviews]);

  const trackTransform = isMobile
    ? `translateX(-${currentIndex * 100}%)`
    : `translateX(-${currentIndex * 340}px)`;

  return (
    <section className="users-avaliation-section" id="avaliacoes">
      {/* Luz ambiente de fundo */}
      <div className="users-avaliation-glow" />

      <div className="users-avaliation-container">
        {/* Coluna Esquerda: Texto de Apresentação Fixo */}
        <div className="users-avaliation-header">
          <h2 className="users-avaliation-title">
            Avaliações <br />
            de quem é <br />
            <span className="users-avaliation-highlight">SOU HALLEL</span>
          </h2>
        </div>

        {/* Coluna Direita: Carrossel com os Cards de Avaliação */}
        <div
          className={`users-avaliation-carousel-wrapper ${isMobile ? "is-mobile" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Trilho de Cards */}
          <div className="users-avaliation-track-viewport">
            <div
              className="users-avaliation-track"
              style={{
                transform: trackTransform,
              }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="users-avaliation-slide">
                  <CarrousselCards
                    title={review.name}
                    description={review.comment}
                    className="review-card"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controles de Navegação (Setas e Pontos Indicadores) */}
          <div className="users-avaliation-controls">
            <button
              type="button"
              className="users-avaliation-arrow arrow-left"
              onClick={prevReview}
              aria-label="Avaliação anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="users-avaliation-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`users-avaliation-dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToReview(index)}
                  aria-label={`Ir para avaliação ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="users-avaliation-arrow arrow-right"
              onClick={nextReview}
              aria-label="Próxima avaliação"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsersAvaliation;
