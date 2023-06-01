import React, { ReactNode } from 'react';
import Tag from './Tag';

interface TagLinkProps {
  href: string;
  desabilitada?: boolean;
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const TagLink: React.FC<TagLinkProps> = ({ href, desabilitada = false, children }) => {
  return (
    <a href={href}>
      <Tag ativa tamanho="lg" desabilitada={desabilitada}>
        {children}
      </Tag>
      <style>{`
        /* Estilos do link */
      `}</style>
    </a>
  );
};

export default TagLink;
