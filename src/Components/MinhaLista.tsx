import React from 'react';
import { useMinhaListaStore } from '../Store/minhaLista';
import MeuIngrediente from './MeuIngrediente';

const MinhaLista: React.FC = () => {
  const { lista } = useMinhaListaStore(); // Obtenha a propriedade "lista" do objeto retornado por useMinhaListaStore

  return (
    <section className="minha-lista">
      <h2>Sua lista:</h2>

      <ul className="meus-ingredientes">
        {lista.map((ingrediente: string, index: number) => (
          <li key={index}>
            <MeuIngrediente ingrediente={ingrediente} />
          </li>
        ))}
      </ul>

      <style>{`
        .minha-lista {
          padding-bottom: 1.625rem;
        }
  
        .minha-lista > h2 {
          font-size: 1.5rem;
          color: var(--laranja);
          margin-bottom: 1.5rem;
          line-height: 2rem;
          font-weight: 700;
        }
  
        .meus-ingredientes {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem 1.875rem;
        }
      `}</style>
    </section>
  );
};

export default MinhaLista;
