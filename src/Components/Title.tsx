import React, { ReactNode } from 'react';

interface TitleProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ tag, children }) => {
  const Tag = tag;

  return (
    <Tag className={`titulo tag-${tag}`}>
      {children}
      <style>{`
        .titulo {
          color: var(--verde);
          text-transform: uppercase;
        }

        .tag-h1 {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </Tag>
  );
};

export default Title;
