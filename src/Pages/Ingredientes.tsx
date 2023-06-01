import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Components/Title";
import Category from "../Components/Category";
import categorias from "../Json/categorias.json";
import { useMinhaListaStore } from '../Store/minhaLista'; // Alteração da importação para useMinhaListaStore
import TagLink from "../Components/TagLink";

interface IngredienteProps {
  pathname?: string;
}

const Ingrediente: React.FC<IngredienteProps> = ({ pathname }) => {
  const navigate = useNavigate();
  const { lista: minhaLista, adicionarIngrediente, removerIngrediente } = useMinhaListaStore(); // Obtenha a lista e as funções do objeto retornado por useMinhaListaStore
  const listEmpty = minhaLista.length === 0; // Atualize a referência para minhaLista

  useEffect(() => {
    const handleBeforeNavigate = (event: BeforeUnloadEvent) => {
      if (listEmpty && (window.event?.target as Window)?.location.pathname === '/receitas') {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeNavigate);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeNavigate);
    };
  }, [listEmpty]);

  const handleTagLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (listEmpty) {
      event.preventDefault();
    }
  };

  return (
    <>
      <main>
        <Title tag="h1">Ingredientes</Title>

        <div className="info">
          <p>Selecione abaixo os Ingredientes que você deseja usar nessa refeição:</p>
          <p>*Atenção: Consideramos que você tenha em casa: sal, pimenta e água.</p>
        </div>

        <ul className="categorias">
          {categorias.map((categoria) => (
            <li key={categoria.nome}>
              <Category
                categoria={{
                  nome: "",
                  ingredientes: [],
                  imagem: "",
                }}
                {...categoria}
              />
            </li>
          ))}
        </ul>

        <div className="buscar-receitas">
          <TagLink
            href="/receitas"
            desabilitada={listEmpty}
            onClick={handleTagLinkClick}
          >
            Buscar Receitas!
          </TagLink>
        </div>
      </main>

      <style>{`
        .info {
          margin-bottom: 3.375rem;
        }

        .info > p {
          line-height: 2rem;
        }

        .categorias {
          margin-bottom: 4.6875rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .buscar-receitas {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Ingrediente;
