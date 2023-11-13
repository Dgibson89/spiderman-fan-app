import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import { Accordion, AccordionItem, Container } from "react-bootstrap";
import "../styles/HistoryPage.css";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HistoryPage() {
  const { theme } = useContext(ThemeContext);


  const accordionClassName =
    theme === "light" ? "accordion-light" : "accordion-dark";

  return (
    <>
      <Container id="padding" data-bs-theme={theme === "light" ? "light" : "dark"}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Stack gap={3}>
              <Accordion className={accordionClassName}>
                <AccordionItem>
                  <Accordion.Header>
                    <h1 className="p-1">{stanLeeInfo.name}</h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <img
                      className="img-fluid p-1"
                      src={stanLeeImageUrl}
                      alt="Stan Lee"
                    />
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

      <Container id="padding" data-bs-theme={theme === "light" ? "light" : "dark"}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Stack gap={3}>
              <Accordion className={accordionClassName} defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h1 className="p-1">{spiderManInfo.name}</h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <img
                      className="img-fluid p-1"
                      src={spiderManImageUrl}
                      alt="Spider-Man"
                    />
                    <p className="p-2">
                      Powers: {spiderManInfo.powers.join(", ")}{" "}
                    </p>
                    <div className="p-2">
                      <strong>Enemies:</strong>
                      <ul>
                        {spiderManInfo.enemies.map((enemy, index) => (
                          <li key={index}>
                            <a
                              href={enemy.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {enemy.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="p-2">Bio: {spiderManInfo.bio}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Stack>
          </Col>
        </Row>
      </Container>

      <Container id="padding" data-bs-theme={theme === "light" ? "light" : "dark"}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Stack gap={3}>
              <Accordion className={accordionClassName} defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h1 className="p-1">{spiderSymbioteInfo.name}</h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <img
                      className="img-fluid p-1"
                      src={spiderSymbioteImageUrl}
                      alt="Spider-Man (Symbiote)"
                    />
                    <p className="p-2">
                      Powers: {spiderSymbioteInfo.powers.join(", ")}{" "}
                    </p>
                    <div className="p-2">
                      <strong>Enemies:</strong>
                      <ul>
                        {spiderSymbioteInfo.enemies.map((enemy, index) => (
                          <li key={index}>
                            <a
                              href={enemy.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {enemy.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="p-2">Bio: {spiderSymbioteInfo.bio}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HistoryPage;
