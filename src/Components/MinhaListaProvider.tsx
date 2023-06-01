import React, { createContext, useContext, ReactNode, PropsWithChildren } from 'react';

type MinhaListaStore = {
  lista: string[];
  adicionarIngrediente: (ingrediente: string) => void;
  removerIngrediente: (ingrediente: string) => void;
};

const MinhaListaContext = createContext<MinhaListaStore | undefined>(undefined);

export const useMinhaLista = (): MinhaListaStore => {
  const context = useContext(MinhaListaContext);

  if (!context) {
    throw new Error('useMinhaLista must be used within a MinhaListaProvider');
  }

  return context;
};

export const MinhaListaProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [lista, setLista] = React.useState<string[]>([]);

  const adicionarIngrediente = (ingrediente: string) => {
    setLista((valorAtual) => [...valorAtual, ingrediente]);
  };

  const removerIngrediente = (ingrediente: string) => {
    setLista((valorAtual) => valorAtual.filter((item) => item !== ingrediente));
  };

  const value: MinhaListaStore = {
    lista,
    adicionarIngrediente,
    removerIngrediente,
  };

  return <MinhaListaContext.Provider value={value}>{children}</MinhaListaContext.Provider>;
};
