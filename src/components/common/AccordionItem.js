import React from "react";
import { Accordion } from "react-bootstrap";

const AccordionItem = ({ info, imageUrl, accordionClassName }) => (
  <Accordion.Item eventKey={info.name}>
    <Accordion.Header>
      <h1 className="p-1">{info.name}</h1>
    </Accordion.Header>
    <Accordion.Body>
      <img className="img-fluid p-1" src={imageUrl} alt={`${info.name}`} />
      <p className="p-2">
        <strong>Lived:</strong> {info.lifespan}
      </p>
      <blockquote className="p-2">{`"${info.quote}"`}</blockquote>
      <p className="p-2">Powers: {info.powers.join(", ")} </p>
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
      <p className="p-2">
        <strong>Bio:</strong> {info.bio}
      </p>
    </Accordion.Body>
  </Accordion.Item>
);

export default AccordionItem;
