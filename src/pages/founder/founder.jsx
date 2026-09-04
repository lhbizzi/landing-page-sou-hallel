import React from 'react';
import tiaLolita from '../../assets/tia_lolita.png';
import './founder.css';

/**
 * Componente da Página / Seção da Fundadora (Tia Lolita)
 * Fonte: Sora
 */
export function Founder() {
  return (
    <section className="founder-section" id="quem-somos">
      {/* Grade e Brilhos de Fundo */}
      <div className="founder-grid-bg" />
      <div className="founder-glow-left" />
      <div className="founder-glow-right" />

      <div className="founder-container">
        {/* Foto da Tia Lolita (Esquerda - Ampliada) */}
        <div className="founder-media">
          <img
            src={tiaLolita}
            alt="Tia Lolita - Fundadora do Hallel"
            className="founder-img"
          />
        </div>

        {/* Informações sobre a Fundadora (Direita - Fonte Sora) */}
        <div className="founder-info">
          <span className="founder-subtitle">
            Nossa <strong>fundadora</strong>
          </span>

          <h2 className="founder-title">
            Tia Lolita
          </h2>

          <p className="founder-text">
            Tia Lolita nasceu em Franca, em uma família profundamente católica, e desde jovem esteve ligada à Igreja. Na adolescência, desejou seguir a vida religiosa, mas posteriormente descobriu sua vocação como leiga e evangelizadora. Sua missão ganhou uma nova dimensão em 1988, quando, durante uma oração, teve a inspiração de reunir jovens para celebrar a Deus através da música, da alegria e da evangelização.
          </p>

          <p className="founder-text">
            Dessa inspiração nasceu o <strong>Hallel</strong>, que se tornou uma grande obra de evangelização. Sua trajetória é marcada pela oração, pelo discernimento, pela devoção a Nossa Senhora de Guadalupe e pelo desejo de levar Cristo especialmente aos jovens. O que começou com uma inspiração em um momento de oração tornou-se uma missão que alcançou milhares de pessoas.
          </p>

          <blockquote className="founder-quote">
            “Aquele que tem caridade no coração tem sempre qualquer coisa para dar”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Founder;
