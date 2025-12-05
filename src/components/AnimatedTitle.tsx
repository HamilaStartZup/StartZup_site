import React from 'react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className, style }) => {
  // Diviser le texte en caractères individuels
  const characters = text.split('').map((char, index) => {
    // Si c'est un espace, on le garde tel quel
    if (char === ' ') {
      return <span key={index} className="inline-block w-2">&nbsp;</span>;
    }
    
    // Sinon, on applique l'animation subtile
    return (
      <span key={index} className="letter-animate">
        {char}
      </span>
    );
  });

  return (
    <span className={className} style={style}>
      {characters}
    </span>
  );
};

export default AnimatedTitle;
