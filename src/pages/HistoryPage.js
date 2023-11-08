import React from "react";
import Stack from "react-bootstrap/Stack";

function HistoryPage() {
  const stanLeeImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg/800px-Stan_Lee_by_Gage_Skidmore_3.jpg";

  // Other information about Stan Lee you may want to display
  const stanLeeInfo = {
    name: "Stan Lee",
    lifespan: "1922–2018",
    quote: "With great power comes great responsibility.",
  };

  return (
    <Stack gap={3}>
      <h1 className="p-2">{stanLeeInfo.name}</h1>
      <img className="p-2" src={stanLeeImageUrl} alt="Stan Lee" />
      <p className="p-2">Lived: {stanLeeInfo.lifespan}</p>
      <blockquote className="p-2">{`"${stanLeeInfo.quote}"`}</blockquote>
      {/* Additional content about the creation of Spider-Man */}
    </Stack>
  );
}

export default HistoryPage;
