import { useState } from 'react';

type MinhaListaStore = {
  lista: string[];
  adicionarIngrediente: (ingrediente: string) => void;
  removerIngrediente: (ingrediente: string) => void;
};

export const useMinhaListaStore = (): MinhaListaStore => {
  const [lista, setLista] = useState<string[]>([]);

  const adicionarIngrediente = (ingrediente: string) => {
    setLista((valorAtual) => [...valorAtual, ingrediente]);
  };

  const removerIngrediente = (ingrediente: string) => {
    setLista((valorAtual) => valorAtual.filter((item) => item !== ingrediente));
  };

  return {
    lista,
    adicionarIngrediente,
    removerIngrediente,
  };
};
