import React from "react";
import ICategoria from "../Interfaces/ICategoria";
import Card from "./Card";
import IngredienteSelecionavel from "./IngredienteSelecionavel";

interface CategoryProps {
  categoria: {
    nome: string;
    ingredientes: string[];
    imagem: string;
  };
}

const Category: React.FC<CategoryProps> = ({ categoria }) => {
  return (
    <Card>
      <div className="categoria-container">
        <img
          src={`../Assets/Icons/categorias_ingredientes/${categoria.imagem}`}
          alt={categoria.nome}
          className="categoria-imagem"
        />

        <h3 className="categoria-nome">{categoria.nome}</h3>

        <ul className="ingredientes">
          {categoria.ingredientes.map((ingrediente) => (
            <li key={ingrediente}>
              <IngredienteSelecionavel ingrediente={ingrediente} />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Category;
