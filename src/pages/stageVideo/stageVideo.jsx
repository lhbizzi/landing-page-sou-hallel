import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import { SubscriptionButton } from "../../components/subscriptionButton/subscriptionButton.jsx";
import retanguloBg from "../../assets/retangulo_video.png";
import defaultPoster from "../../assets/sorteio_poster.jpg";
import "./stageVideo.css";

/**
 * Componente da Seção do Vídeo de Sorteio no Palco Central
 *
 * @param {string} [videoSrc] - Caminho ou URL para o arquivo de vídeo (.mp4, .webm, etc.)
 * @param {string} [posterSrc] - Imagem de capa/preview exibida antes do vídeo iniciar
 * @param {string} [youtubeId] - ID de vídeo do YouTube (ex: "dQw4w9WgXcQ") para exibição via embed
 */
export function StageVideo({ videoSrc, posterSrc = defaultPoster, youtubeId }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="stage-video-section" id="sorteio">
      {/* Imagem do Retângulo Curvado como Fundo */}
      <div className="stage-video-backdrop">
        <img
          src={retanguloBg}
          alt="Curved backdrop"
          className="stage-video-bg-img"
        />
      </div>

      {/* Container Principal de Conteúdo */}
      <div className="stage-video-container">
        {/* Coluna de Texto à Esquerda */}
        <div className="stage-video-content">
          <div className="stage-video-badge">BENEFÍCIOS</div>

          <h2 className="stage-video-title">
            Sorteio <br />
            <strong>palco central</strong>
          </h2>

          <p className="stage-video-subtitle">
            Não perca esses benefícios e assine já!
          </p>

          <SubscriptionButton text="ASSINAR" className="stage-video-cta" />
        </div>

        {/* Coluna do Player de Vídeo à Direita */}
        <div className="stage-video-player-wrapper">
          <div className="stage-video-frame">
            {youtubeId ? (
              /* Suporte para Embed do YouTube */
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}`}
                title="Sorteio Palco Central - Hallel"
                className="stage-video-element"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : videoSrc ? (
              /* Suporte para Arquivo de Vídeo Local ou Remoto (.mp4) */
              <video
                src={videoSrc}
                poster={posterSrc}
                controls={isPlaying}
                autoPlay={isPlaying}
                className="stage-video-element"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            ) : (
              /* Player com Poster e Botão de Play Interativo (Mockup preparado) */
              <div
                className="stage-video-placeholder"
                onClick={handlePlayToggle}
              >
                <img
                  src={posterSrc}
                  alt="Sorteio no Palco Central - Hallel"
                  className="stage-video-poster"
                />

                <div className="stage-video-overlay">
                  <button
                    type="button"
                    className={`stage-video-play-btn ${isPlaying ? "is-playing" : ""}`}
                    aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                  >
                    {isPlaying ? (
                      <Pause size={38} />
                    ) : (
                      <Play size={38} className="play-icon-offset" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StageVideo;
