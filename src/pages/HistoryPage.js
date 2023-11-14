import React, { useContext } from 'react';
import "../styles/HistoryPage.css"
import { Accordion } from 'react-bootstrap';
import AccordionItem from '../components/common/AccordionItem'; 
import ThemeContext from '../utils/ThemeContext'; 
import characterData from '../data/characterData'; 
const HistoryPage = () => {
  const { theme } = useContext(ThemeContext);
  const accordionClassName = theme === 'light' ? 'accordion-light' : 'accordion-dark';

  return (
    <Accordion className={accordionClassName} defaultActiveKey="0">
      {characterData.map((character, index) => (
        <AccordionItem 
          key={index} // It's better if you have a unique id for each character to use here instead of index, remember UID import
          info={character}
          imageUrl={character.imageUrl}
          accordionClassName={accordionClassName}
        />
      ))}
    </Accordion>
  );
};

export default HistoryPage;
