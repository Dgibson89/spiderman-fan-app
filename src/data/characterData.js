const characterData = [
  {
    name: "Stan Lee",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg/800px-Stan_Lee_by_Gage_Skidmore_3.jpg",
    lifespan: "1922–2018",
    powers: ["None...that he revealed..."],
    quote: "Excelsior!",
    bio: "Stan Lee, born Stanley Martin Lieber on December 28, 1922, was an iconic figure in the comic book world, renowned for his pivotal role in the creation and development of Marvel Comics. His career in comics began in the early 1940s, and through the years he co-created numerous beloved characters, including Spider-Man, the X-Men, Iron Man, Thor, the Hulk, the Fantastic Four, Black Widow, Daredevil, and Doctor Strange. Lee's approach to superheroes was groundbreaking; he imbued his characters with complex personalities, flaws, and relatable struggles, diverging from the archetypical paragons of virtue that dominated the genre before. This humanized his superheroes and made Marvel Comics particularly resonant with readers of all ages, fostering a deeper connection to the characters and their stories.",
  },

  {
    name: "Spider-Man",
    imageUrl: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/08/22/87a1ef74-6d37-4dc2-b334-ba5c725686e3/marvels-spider-man-screenshot",
    powers: [
      "Superhuman Strength",
      "Wall-Crawling",
      "Spider-Sense",
      "Superhuman Speed",
      "Agility and Reflexes",
      "Endurance",
      "Healing Factor",
      "Web-Slinging",
    ],
    enemies: [
      {
        name: "Green Goblin (Norman Osborn)",
        url: "https://www.marvel.com/characters/green-goblin-norman-osborn",
      },
      {
        name: "Doctor Octopus (Otto Octavius)",
        url: "https://www.marvel.com/characters/doctor-octopus-otto-octavius",
      },
      {
        name: "Venom (Eddie Brock)",
        url: "https://www.marvel.com/characters/venom-eddie-brock",
      },
      {
        name: "Sandman (Flint Marko)",
        url: "https://www.marvel.com/characters/sandman-william-baker",
      },
      {
        name: "The Lizard (Dr. Curt Connors)",
        url: "https://www.marvel.com/characters/lizard-curtis-connors",
      },
      {
        name: "Kingpin (Wilson Fisk)",
        url: "https://www.marvel.com/characters/kingpin",
      },
      {
        name: "Electro (Max Dillon)",
        url: "https://www.marvel.com/characters/electro-maxwell-dillon",
      },
      {
        name: "Mysterio (Quentin Beck)",
        url: "https://www.marvel.com/characters/electro-maxwell-dillon",
      },
      {
        name: "Kraven the Hunter (Sergei Kravinoff)",
        url: "https://www.marvel.com/characters/kraven-sergei-kravinoff",
      },
      {
        name: "Vulture (Adrian Toomes)",
        url: "https://www.marvel.com/characters/vulture-adrian-toomes",
      },
    ],
    bio: "Spider-Man, the alter ego of Peter Parker, is a fictional superhero character created by writer Stan Lee and writer-artist Steve Ditko. He first appeared in 'Amazing Fantasy' #15, published in August 1962 by Marvel Comics. Peter Parker was a high school student living in New York City when he was bitten by a radioactive spider during a science exhibition. This event granted him superhuman strength, agility, and the uncanny ability to cling to walls. \n Struggling with everyday teenage problems and financial issues, Peter first used his powers for personal gain. However, after his failure to stop a thief led to the death of his beloved Uncle Ben, Peter learned that 'with great power comes great responsibility,' a phrase that would define his superhero career. This personal tragedy inspired him to use his abilities for fighting crime and protecting the innocent, becoming the vigilante known as Spider-Man. \n Spider-Man is characterized by his witty banter, acrobatic combat style, and innovative use of his web-shooters, which he designed himself. The web-shooters allow him to swing between buildings, create web-based gadgets, and immobilize foes. Despite his superhero status, Peter Parker has continually struggled to balance his personal life with his responsibilities as Spider-Man, often facing adversity and sacrifice while maintaining a strong moral compass. Over the years, Spider-Man has become one of Marvel's most beloved and enduring characters, starring in numerous comic book series, television shows, and films. He is a member of various superhero teams, including the Avengers and the Fantastic Four. His iconic red and blue suit, along with the spider emblem, is recognized worldwide. Spider-Man's rogues' gallery includes a wide array of villains, such as the Green Goblin, Doctor Octopus, Venom, and the Sandman. Despite the formidable opposition, Spider-Man remains committed to fighting for justice and is often regarded as the quintessential 'friendly neighborhood Spider-Man.'",
  },

  {
    name: "Spider-Man (Symbiote)",
    imageUrl: "https://www.pixground.com/wp-content/uploads/2023/10/Marvels-Spider-Man-2-Spider-Man-Venom-Symbiote-Suit-4K-Wallpaper-jpg.webp",
    powers: [
      "Enhanced Strength",
      "Enhanced Agility and Reflexes",
      "Enhanced Durability",
      "Unlimited Webbing",
      "Webbing Variety",
      "Camouflage Capabilities",
      "Constituent-Matter Generation",
      "Offensive and Defensive Constructs",
      "Wall-Crawling",
      "Spider-Sense Enhancement",
      "Direct Cloth Simulation",
      "Psychic Detection Immunity",
      "Consciousness Link",
      "Emotional Influence",
    ],
    enemies: [
      {
        name: "Green Goblin (Norman Osborn)",
        url: "https://www.marvel.com/characters/green-goblin-norman-osborn",
      },
      {
        name: "Doctor Octopus (Otto Octavius)",
        url: "https://www.marvel.com/characters/doctor-octopus-otto-octavius",
      },
      {
        name: "Venom (Eddie Brock)",
        url: "https://www.marvel.com/characters/venom-eddie-brock",
      },
      {
        name: "Sandman (Flint Marko)",
        url: "https://www.marvel.com/characters/sandman-william-baker",
      },
      {
        name: "The Lizard (Dr. Curt Connors)",
        url: "https://www.marvel.com/characters/lizard-curtis-connors",
      },
      {
        name: "Kingpin (Wilson Fisk)",
        url: "https://www.marvel.com/characters/kingpin",
      },
      {
        name: "Electro (Max Dillon)",
        url: "https://www.marvel.com/characters/electro-maxwell-dillon",
      },
      {
        name: "Mysterio (Quentin Beck)",
        url: "https://www.marvel.com/characters/electro-maxwell-dillon",
      },
      {
        name: "Kraven the Hunter (Sergei Kravinoff)",
        url: "https://www.marvel.com/characters/kraven-sergei-kravinoff",
      },
      {
        name: "Vulture (Adrian Toomes)",
        url: "https://www.marvel.com/characters/vulture-adrian-toomes",
      },
    ],
    bio: "When Spider-Man acquires the symbiote, his story takes a dark and thrilling turn. The symbiote, an alien lifeform, first comes into contact with Peter Parker, aka Spider-Man, during the 'Secret Wars' storyline on the Battleworld. Initially, the symbiote presents itself as merely a black substance that Spider-Man mistakenly believes to be a new type of costume, conveniently generated from a machine that's supposed to replace damaged superhero outfits. The black suit not only alters Spider-Man’s iconic appearance, swapping his traditional red and blue for a sleek, all-black design, but also significantly enhances his powers. Spider-Man experiences increased strength, agility, and endurance. He also discovers that the suit can generate an unlimited supply of webbing and mimic any type of clothing, making it incredibly versatile. However, the symbiote is far from just a suit. It's a sentient being that bonds with Peter emotionally and physically, influencing his behavior and personality. Peter begins to exhibit uncharacteristic aggression and starts to enjoy the power and edge that the symbiote gives him, but it soon becomes apparent that the alien is slowly taking control. The turning point comes when Peter realizes the symbiote's intentions to permanently bond with him and its influence on his actions. After several attempts and considerable struggle, Peter is finally able to separate himself from the symbiote using the sound waves from a church bell, exploiting the creature's weakness to high-frequency sounds. Feeling rejected, the symbiote finds a new host in Eddie Brock, who harbors a personal vendetta against Spider-Man. The symbiote amplifies Brock's hatred, and together they become Venom, one of Spider-Man's most formidable adversaries. The symbiote saga introduces themes of power, control, and the seductive nature of darkness, challenging Spider-Man's character and resolve in unprecedented ways. It remains one of the most popular and enduring storylines in the Spider-Man canon.",
  }
];


export default characterData;