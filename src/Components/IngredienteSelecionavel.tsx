import React from "react";
import Tag from "./Tag";
import { useMinhaListaStore } from "../Store/minhaLista";

interface IngredienteSelecionavelProps {
  ingrediente: string;
}

const IngredienteSelecionavel: React.FC<IngredienteSelecionavelProps> = ({
  ingrediente,
}) => {
  const { lista, adicionarIngrediente, removerIngrediente } = useMinhaListaStore(); // Obtenha as funções e a lista do objeto retornado por useMinhaListaStore

  const [selecionado, setSelecionado] = React.useState(
    lista.includes(ingrediente)
  );

  const handleClick = () => {
    if (!selecionado) {
      adicionarIngrediente(ingrediente);
    } else {
      removerIngrediente(ingrediente);
    }
    setSelecionado(!selecionado);
  };

  return (
    <button onClick={handleClick}>
      <Tag ativa={selecionado}>{ingrediente}</Tag>
    </button>
  );
};

export default IngredienteSelecionavel;
