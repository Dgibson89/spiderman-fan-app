import React from "react";
import { Accordion, AccordionItem, Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HistoryPage() {
  const stanLeeImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg/800px-Stan_Lee_by_Gage_Skidmore_3.jpg";

  const spiderManImageUrl = "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/08/22/87a1ef74-6d37-4dc2-b334-ba5c725686e3/marvels-spider-man-screenshot"


  const stanLeeInfo = {
    name: "Stan Lee",
    lifespan: "1922–2018",
    quote: "Excelsior!",
    bio: "Stan Lee, born Stanley Martin Lieber on December 28, 1922, was an iconic figure in the comic book world, renowned for his pivotal role in the creation and development of Marvel Comics. His career in comics began in the early 1940s, and through the years he co-created numerous beloved characters, including Spider-Man, the X-Men, Iron Man, Thor, the Hulk, the Fantastic Four, Black Widow, Daredevil, and Doctor Strange. Lee's approach to superheroes was groundbreaking; he imbued his characters with complex personalities, flaws, and relatable struggles, diverging from the archetypical paragons of virtue that dominated the genre before. This humanized his superheroes and made Marvel Comics particularly resonant with readers of all ages, fostering a deeper connection to the characters and their stories.",
  }
  
  const spiderManInfo = {
    name: "Spider-Man",
    powers: "Placeholder",
    enemies: "Placeholder",
    bio: "Placeholder",
  };

  return (
    <>
    <Container data-bs-theme="dark">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Stack gap={3}>
            <Accordion>
              <AccordionItem>
                <Accordion.Header>
                  <h1 className="p-1">{stanLeeInfo.name}</h1>
                </Accordion.Header>
                <Accordion.Body>
                  <img className="img-fluid p-1" src={stanLeeImageUrl} alt="Stan Lee" />
                  <p className="p-2">Lived: {stanLeeInfo.lifespan}</p>
                  <blockquote className="p-2">{`"${stanLeeInfo.quote}"`}</blockquote>
                  <p className="p-2">Bio: {stanLeeInfo.bio}</p>
                </Accordion.Body>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Col>
      </Row>
    </Container>

<Container data-bs-theme="dark">
<Row className="justify-content-center">
  <Col xs={12} md={8} lg={6}>
    <Stack gap={3}>
      <Accordion>
        <AccordionItem>
          <Accordion.Header>
            <h1 className="p-1">{spiderManInfo.name}</h1>
          </Accordion.Header>
          <Accordion.Body>
            <img className="img-fluid p-1" src={spiderManImageUrl} alt="Spider-Man" />
            <p className="p-2">Powers: {spiderManInfo.powers}</p>
            <p className="p-2">Enemies: {spiderManInfo.enemies}</p>
            <p className="p-2">Bio: {spiderManInfo.bio}</p>
          </Accordion.Body>
        </AccordionItem>
      </Accordion>
    </Stack>
  </Col>
</Row>
</Container>
</>
  );
}

export default HistoryPage;
