import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './colapseFaq.css';

/**
 * Componente ColapseFaq (Accordion para FAQ)
 * 
 * @param {string | React.ReactNode} title - Título / Pergunta do FAQ
 * @param {string | React.ReactNode} [question] - Alias para title
 * @param {string | React.ReactNode} [description] - Descrição / Resposta exibida ao expandir
 * @param {string | React.ReactNode} [answer] - Alias para description
 * @param {React.ReactNode} [children] - Alias para description se passado como filho
 * @param {boolean} [defaultOpen=false] - Se o item começa expandido por padrão
 * @param {boolean} [isOpen] - Controle externo do estado aberto/fechado
 * @param {Function} [onToggle] - Callback disparado ao alternar expansão
 * @param {Object} [styles] - Estilos inline customizados
 * @param {Object} [style] - Alias para styles
 * @param {string} [className] - Classes CSS adicionais
 */
export function ColapseFaq({
  title,
  question,
  description,
  answer,
  children,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
  styles = {},
  style = {},
  className = '',
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);

  const isExpanded = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const headerTitle = title || question;
  const bodyContent = description || answer || children;
  const combinedStyles = { ...styles, ...style };

  const handleToggle = () => {
    const nextState = !isExpanded;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(nextState);
    }
    if (onToggle) {
      onToggle(nextState);
    }
  };

  return (
    <div
      className={`colapse-faq-container ${isExpanded ? 'is-open' : ''} ${className}`}
      style={combinedStyles}
    >
      {/* Cabeçalho Clicável */}
      <div
        className="colapse-faq-header"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <h4 className="colapse-faq-title">
          {headerTitle}
        </h4>

        <div className="colapse-faq-arrow">
          <ChevronDown size={22} />
        </div>
      </div>

      {/* Caixa de Conteúdo Expandível */}
      <div className="colapse-faq-content-wrapper">
        <div className="colapse-faq-content-inner">
          <div className="colapse-faq-body">
            <div className="colapse-faq-description">
              {typeof bodyContent === 'string' ? <p>{bodyContent}</p> : bodyContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CollapseFaq = ColapseFaq;
export const FaqItem = ColapseFaq;
export default ColapseFaq;
