
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  bgColor: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, bgColor, children }) => {
  return (
    <section id={id} className={`${bgColor} py-24 md:py-32 px-6`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
