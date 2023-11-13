import React, { useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionItem from '../components/common/AccordionItem'; // Adjust the path as necessary
import ThemeContext from '../utils/ThemeContext'; // Adjust the path as necessary
import characterData from '../data/characterData'; // Adjust the path as necessary

const HistoryPage = () => {
  const { theme } = useContext(ThemeContext);
  const accordionClassName = theme === 'light' ? 'accordion-light' : 'accordion-dark';

  return (
    <Accordion defaultActiveKey="0">
      {characterData.map((character, index) => (
        <AccordionItem 
          key={index} // It's better if you have a unique id for each character to use here instead of index
          info={character}
          imageUrl={character.imageUrl}
          accordionClassName={accordionClassName}
        />
      ))}
    </Accordion>
  );
};

export default HistoryPage;
