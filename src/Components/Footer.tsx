import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'url("../Assets/Images/footer.png"")',
      height: '100px',
      fontWeight: 700,
      color: 'var(--branco)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <img src="/icones/registered.png" alt="Icon Footer" className="registered" />
      <span className="brilho">CopyRight | Created by &copy;Louis & Amanda Wisnienski</span>

      <style>{`
        .registered {
          margin-right: 1px;
        }

        .brilho {
          animation: brilho 2s linear infinite;
        }

        @keyframes brilho {
          0% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4);
          }
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
