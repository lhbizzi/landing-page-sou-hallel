import React from "react";
import { Shirt, Star, Gift, ShoppingBag, HandHeart } from "lucide-react";
import { Carroussel } from "../../components/carroussel/carroussel.jsx";
import { CarrousselCards } from "../../components/carrousselCards/carrousselCards.jsx";
import { SubscriptionButton } from "../../components/subscriptionButton/subscriptionButton.jsx";
import "./benefits.css";

/**
 * Componente da Página / Seção de Benefícios
 */
export function Benefits() {
  const benefitsList = [
    {
      id: 1,
      icon: <ShoppingBag size={28} />,
      title: "DESCONTO EM PRODUTOS OFICIAIS (LOJA HALLEL)",
      description:
        "No Hallel, garanta suas camisetas, bonés e diversos outros produtos com um super desconto especial. Não perca essa chance de viver o Hallel ainda mais de perto e levar essa experiência com você!",
    },
    {
      id: 2,
      icon: <HandHeart size={28} />,
      title: "PULSEIRA DE SILICONE EDIÇÃO LIMITADA",
      description: `Carregue essa marca com você! Ao ser benfeitor, você recebe a pulseira exclusiva "Sou Hallel", um item comemorativo e colecionável disponível apenas para apoiadores.`,
    },
    {
      id: 3,
      icon: <Star size={28} />,
      title: "ÁREA EXCLUSIVA SOU HALLEL",
      description:
        "Viva cada momento da programação com vista privilegiada! Garanta seu lugar bem em frente ao palco central para louvar e celebrar de perto com seus artistas favoritos.",
    },
    {
      id: 4,
      icon: <Gift size={28} />,
      title: "SORTEIOS EXCLUSIVOS",
      description:
        "Participe de sorteios exclusivos para assinantes no Palco Central e concorra a visitas ao camarim, sessões de fotos com os artistas e muito mais durante os momentos oficiais do Hallel!",
    },
    {
      id: 4,
      icon: <Shirt size={28} />,
      title: "BRINDE DE FIDELIDADE (CAMISETA OFICIAL 2026)",
      description:
        "A sua perseverança evangeliza com a gente! Assinantes com mais de um ano de contribuição ativa e em dia garantem gratuitamente a Camiseta Oficial do Hallel 2026.",
    },
  ];

  return (
    <section className="benefits-section" id="beneficios">
      {/* Efeito de Luz Neon / Ambient Glow do Lado Esquerdo */}
      <div className="benefits-glow-left" />

      {/* Cabeçalho da Seção */}
      <div className="benefits-header">
        <div className="benefits-badge">BENEFÍCIOS</div>

        <h2 className="benefits-title">
          Nossos{" "}
          <span className="benefits-title-highlight">
            benefícios sou Hallel
          </span>
        </h2>
      </div>

      {/* Carrossel Multi-Item em Destaque 3D (exibe múltiplos cards como no protótipo) */}
      <div className="benefits-carroussel-wrapper">
        <Carroussel
          centerMode={true}
          infinite={true}
          showControls={true}
          autoPlay={true}
          autoPlayInterval={4000}
        >
          {benefitsList.map((benefit) => (
            <CarrousselCards
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </Carroussel>
      </div>

      {/* Chamada de Assinatura no Rodapé da Seção */}
      <div className="benefits-callout">
        <h3 className="benefits-callout-text">
          Assine o{" "}
          <span className="benefits-callout-highlight">Sou Hallel</span> agora
          mesmo
        </h3>
        <SubscriptionButton text="ASSINAR" href="#assinar" />
      </div>
    </section>
  );
}

export default Benefits;
