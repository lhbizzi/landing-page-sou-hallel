import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './carroussel.css';

/**
 * Componente Reutilizável de Carrossel
 * 
 * @param {React.ReactNode | Array} children - Elementos/cards/imagens a serem exibidos no carrossel
 * @param {Array} items - (Opcional) Lista de dados
 * @param {boolean} showControls - Exibe as setas de navegação e indicadores (default: true)
 * @param {boolean} autoPlay - Avanço automático dos slides por etapa (default: true)
 * @param {boolean} infinite - Ativa o efeito de loop infinito (default: false)
 * @param {boolean} marquee - Ativa movimento contínuo, lento e fluído sem paradas (default: false)
 * @param {boolean} continuous - Alias para marquee (default: false)
 * @param {number} marqueeSpeed - Duração em segundos do ciclo de movimento contínuo (default: 35s)
 * @param {number} visibleSlides - Quantidade de slides visíveis no modo normal (default: 1)
 */
export function Carroussel({
  children,
  items,
  showControls = true,
  autoPlay = true,
  autoPassable = true,
  infinite = false,
  infinity = false,
  marquee = false,
  continuous = false,
  marqueeSpeed = 35,
  autoPlayInterval = 4000,
  styles = {},
  style = {},
  className = '',
  centerMode = false,
  visibleSlides = 1,
}) {
  const isMarquee = marquee || continuous;
  const isInfinite = infinite || infinity || isMarquee;

  const rawSlides = React.Children.toArray(children).length > 0
    ? React.Children.toArray(children)
    : (items || []);

  const totalRealSlides = rawSlides.length;

  // No modo marquee contínuo, quadruplicamos a lista para um movimento 100% fluído e sem salto visual a -50%
  const slidesToRender = isMarquee
    ? [...rawSlides, ...rawSlides, ...rawSlides, ...rawSlides]
    : ((isInfinite && totalRealSlides > 1) ? [...rawSlides, ...rawSlides, ...rawSlides] : rawSlides);

  const initialIndex = (isInfinite && !isMarquee && totalRealSlides > 1) ? totalRealSlides : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isAutoPlayEnabled = !isMarquee && (autoPlay !== undefined ? autoPlay : true) && (autoPassable !== undefined ? autoPassable : true);
  const totalRenderSlides = slidesToRender.length;

  // Próximo Slide
  const nextSlide = useCallback(() => {
    if (totalRealSlides <= 1) return;

    if (isInfinite) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex((prev) => (prev + 1) % totalRealSlides);
    }
  }, [isInfinite, totalRealSlides]);

  // Slide Anterior
  const prevSlide = useCallback(() => {
    if (totalRealSlides <= 1) return;

    if (isInfinite) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex((prev) => (prev - 1 + totalRealSlides) % totalRealSlides);
    }
  }, [isInfinite, totalRealSlides]);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    if (isInfinite && totalRealSlides > 1) {
      setCurrentIndex(totalRealSlides + index);
    } else {
      setCurrentIndex(index);
    }
  };

  // Suporte a gestos de toque (Touch Swipe) para mobile
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
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
  };

  // Reset imperceptível para o modo por etapas
  useEffect(() => {
    if (isMarquee || !isInfinite || totalRealSlides <= 1) return;

    if (currentIndex >= totalRealSlides * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev - totalRealSlides);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500);
      return () => clearTimeout(timer);
    }

    if (currentIndex < totalRealSlides) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev + totalRealSlides);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isInfinite, isMarquee, totalRealSlides]);

  // AutoPlay para modo por etapas
  useEffect(() => {
    if (!isAutoPlayEnabled || isHovered || totalRealSlides <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isAutoPlayEnabled, isHovered, autoPlayInterval, nextSlide, totalRealSlides]);

  if (totalRealSlides === 0) {
    return null;
  }

  const combinedStyles = { ...styles, ...style };

  // Se for Marquee contínuo, renderiza a esteira contínua lenta sem paradas
  if (isMarquee) {
    return (
      <div
        className={`carroussel-container mode-marquee ${className}`}
        style={combinedStyles}
      >
        <div
          className="carroussel-track carroussel-track-marquee"
          style={{
            animationDuration: `${marqueeSpeed}s`,
          }}
        >
          {slidesToRender.map((slideContent, index) => (
            <div key={index} className="carroussel-slide slide-marquee">
              {slideContent}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const effectiveDivisor = centerMode ? (isMobile ? 1 : 3) : visibleSlides;
  const trackTranslateX = centerMode && !isMobile
    ? ((1 - currentIndex) * (100 / totalRenderSlides))
    : -(currentIndex * (100 / totalRenderSlides));

  const activeDotIndex = (currentIndex % totalRealSlides + totalRealSlides) % totalRealSlides;

  return (
    <div
      className={`carroussel-container ${centerMode ? 'mode-center' : ''} ${isMobile ? 'is-mobile' : ''} ${className}`}
      style={combinedStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Trilho de Slides */}
      <div
        className="carroussel-track"
        style={{
          transform: `translateX(${trackTranslateX}%)`,
          width: `${(totalRenderSlides / effectiveDivisor) * 100}%`,
          transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
        }}
      >
        {slidesToRender.map((slideContent, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`carroussel-slide ${isActive ? 'active' : ''}`}
              style={{
                width: `${100 / totalRenderSlides}%`,
                minWidth: `${100 / totalRenderSlides}%`,
              }}
            >
              {slideContent}
            </div>
          );
        })}
      </div>

      {/* Controles */}
      {showControls && totalRealSlides > 1 && (
        <div className="carroussel-controls-wrapper">
          <button
            type="button"
            className="carroussel-arrow arrow-left"
            onClick={prevSlide}
            aria-label="Slide Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carroussel-indicators">
            {rawSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`carroussel-dot ${index === activeDotIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="carroussel-arrow arrow-right"
            onClick={nextSlide}
            aria-label="Próximo Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Carroussel;
