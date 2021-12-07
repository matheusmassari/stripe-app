import React from "react";
import { useGlobalContext } from "../../context/context";
import phoneImg from "../../assets/phone.svg";
import hero from "../../assets/hero.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Pagamentos infraestrutura <br />
            para a internet
          </h1>
          <p>
            Milhões de empresas de todos os tamanhos - de startups a Fortune
            500s - usam o software Stripe e APIs para aceitar pagamentos, enviar
            pagamentos e gerenciar seus negócios online.
          </p>
          <button className="btn">Começar agora</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
