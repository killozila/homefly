import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputerMouse, faTabletButton } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
    return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
          <p className="copywritter">Comece sua jornada pelo mundo</p>
            Alianderson  .World.
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>

          <p className="intro__scroll">
  <FontAwesomeIcon className="desktop" icon={faComputerMouse} beat style={{ color: "#669eff", height: '1em', fontSize: '25px', marginRight: '10px' }} />
  <br className="breakDesktop" />
  <FontAwesomeIcon className="mobile" icon={faTabletButton} beat style={{ color: "#669eff", height: '1em', marginRight: '10px', paddingLeft: '1px', fontSize: '25px' }} />

  {/* Conteúdo padrão para dispositivos não móveis */}
  <span className="desktop">
    Scroll pra baixo ⇒ Acelerar
    <br />
    Scroll pra cima ⇒ Desacelerar
  </span>
  {/* Conteúdo padrão para dispositivos não móveis */}
  <span className="mobile">
    Arraste pra cima <FontAwesomeIcon icon={faArrowRight} /> Acelerar
    <br />
    Arraste pra baixo <FontAwesomeIcon icon={faArrowRight} /> Desacelerar
  </span>
</p>

          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
      Conheça
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
          <p className="outro__text">
            O meu mundo chegou ao fim... <br /> 
            Feche a janela ou atualize para recomeçar!
          </p>
      </div>
      
    </div>
  );
};
