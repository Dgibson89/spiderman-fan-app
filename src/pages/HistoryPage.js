import React from "react";
import Stack from "react-bootstrap/Stack";

function HistoryPage() {
  const stanLeeImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg/800px-Stan_Lee_by_Gage_Skidmore_3.jpg";

  // Other information about Stan Lee you may want to display
  const stanLeeInfo = {
    name: "Stan Lee",
    lifespan: "1922–2018",
    quote: "Excelsior!",
    bio: "Stan Lee, born Stanley Martin Lieber on December 28, 1922, was an iconic figure in the comic book world, renowned for his pivotal role in the creation and development of Marvel Comics. His career in comics began in the early 1940s, and through the years he co-created numerous beloved characters, including Spider-Man, the X-Men, Iron Man, Thor, the Hulk, the Fantastic Four, Black Widow, Daredevil, and Doctor Strange. Lee's approach to superheroes was groundbreaking; he imbued his characters with complex personalities, flaws, and relatable struggles, diverging from the archetypical paragons of virtue that dominated the genre before. This humanized his superheroes and made Marvel Comics particularly resonant with readers of all ages, fostering a deeper connection to the characters and their stories.",
  };

  return (
    <Stack gap={3}>
      <h1 className="p-1">{stanLeeInfo.name}</h1>
      <img className="p-1" src={stanLeeImageUrl} alt="Stan Lee" />
      <p className="p-2">Lived: {stanLeeInfo.lifespan}</p>
      <blockquote className="p-2">{`"${stanLeeInfo.quote}"`}</blockquote>
      <p className="p-2">{stanLeeInfo.bio}</p>
      {/* Additional content about the creation of Spider-Man */}
    </Stack>
  );
}

export default HistoryPage;
