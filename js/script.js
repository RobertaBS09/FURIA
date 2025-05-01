import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
import a051806f1Fe04A6A83DfC4194F91Af15RemovebgPreview1 from "./a051806f-1fe0-4a6a-83df-c4194f91af15-removebg-preview-1.png";
import acesseAoFanChatDaFuria from "./acesse-ao-fan-chat-da-furia.png";
import "./style.css";
import unnamedRemovebgPreview11 from "./unnamed-removebg-preview-1-1.png";

export const MainPage = ({ property1, className }) => {
  return (
    <div className={`main-page ${className}`}>
      <div className="overlap-group">
        <Button
          className="button-instance"
          divClassName="design-component-instance-node"
          label="Acesse o chat"
          size="medium"
          variant="primary"
        />
        <div className="fan-chat"> Fan Chat</div>

        <img
          className="af-fe-aa"
          alt="Af fe aa"
          src={a051806f1Fe04A6A83DfC4194F91Af15RemovebgPreview1}
        />

        <img
          className="unnamed-removebg"
          alt="Unnamed removebg"
          src={unnamedRemovebgPreview11}
        />
      </div>

      <div className="group" />

      <img
        className="acesse-ao-fan-chat"
        alt="Acesse ao fan chat"
        src={acesseAoFanChatDaFuria}
      />

      <p className="div">
        No Fan Chat da FURIA, você fica por dentro de tudo em tempo real!
      </p>

      <p className="converse-com-outros">
        Converse com outros torcedores, acompanhe os jogos ao vivo, receba
        notícias exclusivas e participe da torcida como nunca antes.
        <br /> Mostre sua paixão pela FURIA e viva cada jogada com a comunidade
        que mais vibra no cenário!
      </p>
    </div>
  );
};

MainPage.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
