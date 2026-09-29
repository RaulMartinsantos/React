export type Challenge = {
  id: number;
  word: string;
  tip: string;
};

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Linguagem de estilização" },
  { id: 2, word: "REACT", tip: "Lib para criação de interfaces web" },
  { id: 3, word: "HTML", tip: "Linguagem de marcação de texto" },
  { id: 4, word: "Javascript", tip: "Linguagem comum da web" },
  { id: 5, word: "Typescript", tip: "DX para Javascript" },
];
