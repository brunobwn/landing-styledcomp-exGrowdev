import React from 'react';
import { IconType } from 'react-icons';

interface AdvantageProps {
  icon: IconType;
  title: string;
  subtitle: string;
}

const AdvantageCard: React.FC<AdvantageProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="content">
      <>{React.createElement(icon)}</>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
