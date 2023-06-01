import React from 'react';
import { useMinhaListaStore } from '../Store/minhaLista';
import Tag from './Tag';

interface MeuIngredienteProps {
  ingrediente: string;
}

const MeuIngrediente: React.FC<MeuIngredienteProps> = ({ ingrediente }) => {
  const { removerIngrediente } = useMinhaListaStore(); // Obtenha a função removerIngrediente do objeto retornado por useMinhaListaStore

  const handleRemoverIngrediente = () => {
    removerIngrediente(ingrediente);
  };

  return (
    <>
      <div className="meu-ingrediente-container">
        <Tag ativa={true}>
          <button className="close" onClick={handleRemoverIngrediente}></button>
          {ingrediente}
        </Tag>

        <span className="remover" onClick={handleRemoverIngrediente}>
          Remover
        </span>
      </div>

      <style>{`
        .meu-ingrediente-container {
          position: relative;
        }

        .close {
          background-image: url("../Assets/Icons/close.svg");
          height: 10px;
          width: 10px;
          cursor: pointer;

          position: absolute;
          top: 4px;
          right: 4px;
        }

        .remover {
          line-height: 24px;
          font-size: 0.875rem;
          color: var(--laranja);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default MeuIngrediente;
