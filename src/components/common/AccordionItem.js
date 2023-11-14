import React, { useContext } from 'react';
import "../../styles/HistoryPage.css"
import { Accordion } from 'react-bootstrap';
import ThemeContext from '../../utils/ThemeContext';

const AccordionItem = ({ info, imageUrl }) => {
  const { theme } = useContext(ThemeContext);
  const accordionClassName = theme === 'light' ? 'accordion-light' : 'accordion-dark';

  return (
    <Accordion.Item eventKey={info.name} className={accordionClassName}>
      <Accordion.Header>
        <h1 className="p-1">{info.name}</h1>
      </Accordion.Header>
      <Accordion.Body>
        <img className="img-fluid p-1" src={imageUrl} alt={info.name} />
        {info.lifespan && (
          <p className="p-2">
            <strong>Lived:</strong> {info.lifespan}
          </p>
        )}
        {info.quote && (
          <blockquote className="p-2">{`"${info.quote}"`}</blockquote>
        )}
        {info.powers && (
          <p className="p-2">
            <strong>Powers:</strong> {info.powers.join(", ")}
          </p>
        )}
        {info.enemies && (
          <div className="p-2">
            <strong>Enemies:</strong>
            <ul>
              {info.enemies.map((enemy, index) => (
                <li key={index}>
                  <a href={enemy.url} target="_blank" rel="noopener noreferrer">
                    {enemy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {info.bio && (
          <p className="p-2">
            <strong>Bio:</strong> {info.bio}
          </p>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;
