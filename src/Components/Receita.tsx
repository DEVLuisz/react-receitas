import React from 'react';
import IReceita from '../Interfaces/IReceita';
import Card from './Card';

interface ReceitaProps {
  receita: IReceita;
}

const Receita: React.FC<ReceitaProps> = ({ receita }) => {
  return (
    <Card largura="280px">
      <img src={`../Assets/Images/receitas/${receita.imagem}`} alt={receita.nome} className="receita-img" />

      <div className="receita-info">
        <h3 className="receita-nome">{receita.nome}</h3>
        {receita.quantidade && (
          <>
            <p className="receita-quantidade" style={{ whiteSpace: 'pre-line' }}>{receita.quantidade}</p>
            <hr />
          </>
        )}
        <h4 className="receita-modo">Modo de Preparo:</h4>
        <p className="receita-descricao">{receita.modo}</p>
      </div>

      <style>{`
        .receita-img {
          width: 100%;
          height: 150px;
        }
  
        .receita-nome {
          font-size: 1.125rem;
        }
  
        .receita-info {
          padding: 0.75rem 0.875rem;
        }
  
        .receita-quantidade {
          font-size: 0.850rem;
          margin-bottom: 0.5rem;
        }
  
        .receita-modo {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
  
        .receita-descricao {
          font-size: 0.875rem;
          line-height: 1.5;
          white-space: pre-line;
        }
      `}</style>
    </Card>
  );
};

export default Receita;
