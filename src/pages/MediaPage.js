import React from "react";
import { Container } from "react-bootstrap";

const MediaPage = () => {
  // Example YouTube video embed URL
  const videoEmbedUrl = "https://www.youtube-nocookie.com/embed/2T4pOB7d8xk?si=43YqW0gSImk922w7";

  return (
    <Container className="my-4">
      <div className="ratio ratio-16x9">
        <iframe width="560" height="315" src={videoEmbedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </Container>
  );
};

export default MediaPage;
