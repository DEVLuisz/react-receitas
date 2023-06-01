import React from "react";
import logoImage from "../Assets/Images/irís-cook-logo.svg";

const Cabecalho: React.FC = () => {
  const styles: React.CSSProperties = {
    ["--largura-tela-base" as any]: "1440",
    background:"url('Assets/Images/header.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    height: "calc((325 / var(--largura-tela-base)) * 100vw)",
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <header style={styles}>
      <img src={logoImage} alt="Logo do Irís Cook" style={{ width: "calc((254 / var(--largura-tela-base)) * 100vw)" }} />
    </header>
  );
};

export default Cabecalho;
