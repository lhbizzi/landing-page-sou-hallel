import React from "react";
import "./subscriptionButton.css";

/**
 * Link fixo de redirecionamento para o checkout de assinatura do Sou Hallel (Vindi)
 */
export const SUBSCRIPTION_CHECKOUT_URL =
  "https://app.vindi.com.br/customer/pages/f1e31a08-5e7e-498c-bc9a-0ff890e3eff9/subscriptions/new";

/**
 * Componente SubscriptionButton (Botão de Inscrição / Assinatura)
 *
 * @param {string | React.ReactNode} text - Texto exibido no centro do botão (ex: "ASSINAR")
 * @param {string | React.ReactNode} [label] - Alias para text
 * @param {React.ReactNode} [children] - Alias para text se passado como filho do componente
 * @param {string} [target="_self"] - Target do link (ex: _self ou _blank)
 * @param {Function} [onClick] - Função executada ao clicar no botão
 * @param {Object} [styles] - Estilos inline customizados
 * @param {Object} [style] - Alias para styles
 * @param {string} [className] - Classes CSS adicionais
 */
export function SubscriptionButton({
  text,
  label,
  children,
  target = "_blank",
  onClick,
  styles = {},
  style = {},
  className = "",
}) {
  const content = text || label || children || "ASSINAR";
  const combinedStyles = { ...styles, ...style };

  return (
    <a
      href={SUBSCRIPTION_CHECKOUT_URL}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`subscription-button ${className}`}
      style={combinedStyles}
      onClick={onClick}
    >
      {content}
    </a>
  );
}

export const SubscriptionBtn = SubscriptionButton;
export default SubscriptionButton;
