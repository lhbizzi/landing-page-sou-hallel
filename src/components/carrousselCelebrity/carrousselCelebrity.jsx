import React from 'react';
import './carrousselCelebrity.css';

/**
 * Componente CarrousselCelebrity
 * Retângulo de 290x70px para exibição centralizada de nome de celebridade / atração.
 * 
 * @param {string | React.ReactNode} text - Texto que será exibido no centro do retângulo
 * @param {string | React.ReactNode} [name] - Alias para text
 * @param {React.ReactNode} [children] - Alias para text caso seja passado como filho do componente
 * @param {Object} [styles] - Estilos inline customizados
 * @param {Object} [style] - Alias para styles
 * @param {string} [className] - Classes CSS adicionais
 */
export function CarrousselCelebrity({
  text,
  name,
  children,
  styles = {},
  style = {},
  className = '',
}) {
  const content = text || name || children;
  const combinedStyles = { ...styles, ...style };

  return (
    <div className={`carroussel-celebrity ${className}`} style={combinedStyles}>
      <span className="carroussel-celebrity-text">
        {content}
      </span>
    </div>
  );
}

export const CarrousselCelebrities = CarrousselCelebrity;
export default CarrousselCelebrity;
