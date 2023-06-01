import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  largura?: string;
}

const Card: React.FC<CardProps> = ({ children, largura = "300px" }) => {
  const cardStyle = {
    width: largura,
    minHeight: "100%",
    background: "var(--branco)",
    boxShadow: "4px 4px 10px 1px rgba(0, 0, 0, 0.1)"
  };

  return (
    <div className="card" style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
