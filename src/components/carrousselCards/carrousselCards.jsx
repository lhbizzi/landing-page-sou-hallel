import React from 'react';
import './carrousselCards.css';

/**
 * Componente de Card para o Carrossel (CarrousselCards)
 * 
 * @param {React.ReactNode} title - Título renderizado no cabeçalho do card
 * @param {React.ReactNode | Function} [icon] - Ícone (passado obrigatoriamente por onde o componente é renderizado)
 * @param {React.ReactNode} description - Texto ou elementos renderizados no corpo do card
 * @param {Object} [styles] - Estilos inline customizados
 * @param {Object} [style] - Alias para styles
 * @param {string} [className] - Classes CSS adicionais
 */
export function CarrousselCards({
  title,
  icon,
  description,
  styles = {},
  style = {},
  className = '',
}) {
  const combinedStyles = { ...styles, ...style };

  // Renderiza o ícone recebido via prop (seja como elemento JSX <Shirt /> ou referência de componente)
  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === 'function') {
      const IconComponent = icon;
      return <IconComponent size={28} />;
    }
    return icon;
  };

  const iconElement = renderIcon();

  return (
    <div className={`carroussel-card ${className}`} style={combinedStyles}>
      {/* Cabeçalho com Ícone e Título */}
      <div className="carroussel-card-header">
        {iconElement && (
          <div className="carroussel-card-icon-wrapper">
            {iconElement}
          </div>
        )}

        <h3 className="carroussel-card-title">
          {title}
        </h3>
      </div>

      {/* Linha Divisória */}
      <div className="carroussel-card-divider" />

      {/* Corpo com a Descrição */}
      <div className="carroussel-card-description">
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
    </div>
  );
}

export const CarrousselCard = CarrousselCards;
export default CarrousselCards;
