import React from "react";

function HistoryPage() {

    const stanLeeImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg/800px-Stan_Lee_by_Gage_Skidmore_3.jpg';
  
    // Other information about Stan Lee you may want to display
    const stanLeeInfo = {
      name: 'Stan Lee',
      lifespan: '1922–2018',
      quote: 'With great power comes great responsibility.'
    };
  
    return (
      <div>
        <h1>{stanLeeInfo.name}</h1>
        <img src={stanLeeImageUrl} alt="Stan Lee" />
        <p>Lived: {stanLeeInfo.lifespan}</p>
        <blockquote>{`"${stanLeeInfo.quote}"`}</blockquote>
        {/* Additional content about the creation of Spider-Man */}
      </div>
    );
  };

export default HistoryPage;
