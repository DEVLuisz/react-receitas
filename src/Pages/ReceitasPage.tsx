import React from "react";
import Receita from "../Components/Receita";
import TagLink from "../Components/TagLink";
import Title from "../Components/Title";
import receitas from '../Json/receitas.json';
import { useMinhaListaStore } from '../Store/minhaLista';

interface ReceitasPageProps {
  pathname?: string;
}

const ReceitasPage: React.FC<ReceitasPageProps> = ({ pathname }) => {
  const minhaLista = useMinhaListaStore(); // Usando o hook useMinhaListaStore

  const receitasFiltradas = receitas.filter((receita) =>
    receita.ingredientes.every((ingrediente) => minhaLista.lista.includes(ingrediente))
  );

  return (
    <>

      <main>
        <Title tag="h1">Receitas!</Title>

        <div className="info">
          <p className="verde">Resultados Encontrados: {receitasFiltradas.length}</p>

          {receitasFiltradas.length ? (
            <p>
              Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
            </p>
          ) : (
            <p>Não encontramos nenhuma receita com os seus ingredientes 😫!</p>
          )}
        </div>

        {receitasFiltradas.length > 0 && (
          <ul className="receitas">
            {receitasFiltradas.map((receita) => (
              <li key={receita.nome}>
                <Receita receita={receita} />
              </li>
            ))}
          </ul>
        )}

        <div className="editar-lista">
          <TagLink href="/">Editar Lista</TagLink>
        </div>
      </main>

      <style>{`
        .info {
          margin-bottom: 3.375rem;
        }

        .info > p {
          line-height: 2rem;
        }

        .info > p.verde {
          color: var(--verde);
        }

        .receitas {
          text-align: start;
          margin-bottom: 3.75rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .receitas li {
          list-style: none;
        }

        .editar-lista {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default ReceitasPage;
