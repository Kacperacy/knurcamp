import { WinnerTab2 } from "./WinnerTab2";

const nobelPrizeWinners = [
  {
    name: "Maria Skłodowska-Curie",
    nationality: "Polish",
    category: "Physics",
    achievements: [
      "Discovered the elements polonium and radium.",
      "Conducted pioneering research on radioactivity.",
    ],
  },
  {
    name: "Henryk Sienkiewicz",
    nationality: "Polish",
    category: "Literature",
    achievements: [
      "Authored 'Quo Vadis', a historical novel.",
      "His works significantly influenced Polish literature.",
    ],
  },
  {
    name: "Władysław Reymont",
    nationality: "Polish",
    category: "Literature",
    achievements: [
      "Wrote 'The Peasants', a novel that won him the Nobel Prize.",
      "His works realistically depicted rural life in Poland.",
    ],
  },
  {
    name: "Isidor Isaac Rabi",
    nationality: "American",
    category: "Physics",
    achievements: [
      "Discovered nuclear magnetic resonance.",
      "Used magnetic resonance to develop new methods for measuring nuclear magnetic moments.",
    ],
  },
  {
    name: "Albert Einstein",
    nationality: "German",
    category: "Physics",
    achievements: [
      "Developed the theory of relativity.",
      "Made significant contributions to the development of quantum mechanics.",
    ],
  },
  {
    name: "Lech Wałęsa",
    nationality: "Polish",
    category: "Peace",
    achievements: [
      "Co-founded Solidarity, the Soviet bloc's first independent trade union.",
      "Served as the President of Poland from 1990 to 1995.",
    ],
  },
  {
    name: "Martin Luther King Jr.",
    nationality: "American",
    category: "Peace",
    achievements: [
      "Led the Civil Rights Movement in the United States.",
      "Delivered the famous 'I Have a Dream' speech.",
    ],
  },
  {
    name: "Andrzej Schally",
    nationality: "Polish",
    category: "Medicine",
    achievements: [
      "Conducted significant research on peptide hormones.",
      "His work laid the foundation for many medical treatments.",
    ],
  },
  {
    name: "Olga Tokarczuk",
    nationality: "Polish",
    category: "Literature",
    achievements: [
      "Authored 'Flights', a novel that won her the Nobel Prize.",
      "Her works explore themes of travel and human anatomy.",
    ],
  },
  {
    name: "Ernest O. Lawrence",
    nationality: "American",
    category: "Physics",
    achievements: [
      "Invented the cyclotron, a type of particle accelerator.",
      "His invention led to the discovery of many radioactive isotopes.",
    ],
  },
];

function PolscyNoblisciV2() {
  const polscyNoblisci = nobelPrizeWinners.filter((winner) => {
    return winner.nationality === "Polish";
  });
  const niePolscyNoblisci = nobelPrizeWinners.filter((winner) => {
    return winner.nationality !== "Polish";
  });

  return (
    <>
      <h1>Polscy nobliści</h1>
      {polscyNoblisci.map((winner, index) => {
        return <WinnerTab2 key={index} {...winner} />;
      })}
      <h1>Nobliści</h1>
      {niePolscyNoblisci.map((winner, index) => {
        return <WinnerTab2 key={index} {...winner} />;
      })}
    </>
  );
}

export { PolscyNoblisciV2 };
