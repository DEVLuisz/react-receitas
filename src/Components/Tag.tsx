import React, { ReactNode } from 'react';

interface TagProps {
  ativa?: boolean;
  tamanho?: 'md' | 'lg';
  desabilitada?: boolean;
  children: ReactNode;
}

const Tag: React.FC<TagProps> = ({ ativa = false, tamanho = 'md', desabilitada = false, children }) => {
  return (
    <div className={`tag ${tamanho} ${ativa ? 'ativa' : ''} ${desabilitada ? 'desabilitada' : ''}`}>
      {children}
      <style>{`
        .tag {
          height: 48px;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
          color: var(--cor-texto-principal);
          background-color: var(--cinza);

          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.4s;
        }

        .ativa {
          color: var(--branco);
          background-color: var(--laranja);
        }

        .lg {
          font-size: 1.125rem;
          padding: 1rem 1.5rem;
        }

        .desabilitada {
          opacity: 0.7;
          cursor: default;
        }
      `}</style>
    </div>
  );
};

export default Tag;
