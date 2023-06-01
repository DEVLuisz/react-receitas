import React from 'react';
import './App.css';
import Cabecalho from './Components/Cabecalho';
import Footer from './Components/Footer';
import MinhaLista from './Components/MinhaLista';
import { useMinhaListaStore } from './Store/minhaLista';

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div className="container-principal">
      <Cabecalho />
      <div className="estilo-principal">
        {useMinhaListaStore().lista.length > 0 && (
          <div className="minha-lista-container">
            <MinhaLista />
            <div className="divisoria" />
          </div>
        )}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default App;
