import React from 'react'
import { Container } from 'react-bootstrap'

function MediaPage() {
    const constructionImageUrl = "https://www.seekpng.com/png/detail/259-2598162_page-in-under-construction.png"
    return (
      <div>
         <Container>
        <img
          className="img-fluid p-1"
          src={constructionImageUrl}
          alt="coming soon!"
        />
      </Container>
      </div>
    )
}

export default MediaPage