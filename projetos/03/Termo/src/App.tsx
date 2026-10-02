import styles from "./App.module.css";
import Input from "./components/Input";
import Tip from "./components/Tip/index";
import Header from "./components/Header";
import Letter from "./components/Letter";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { WORDS, type Challenge } from "./utils/words";
import LettersUsed, {
  type LettersUsedProps,
} from "./components/LettersUsed/index";

function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);

  function handleRestartGame() {
    const confirmRestart = window.confirm(
      "Você tem certeza que deseja reiniciar?",
    );

    if (confirmRestart) {
      startGame();
    }
  }

  useEffect(() => {
    startGame();
  }, []);

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);

    setScore(0);
    setLetter("");
    setLettersUsed([]);
  }

  function handleConfirm() {
    if (!challenge) {
      return;
    }

    if (!letter.trim()) {
      return alert("Digite uma letra");
    }

    const value = letter.toLocaleUpperCase();
    const exists = lettersUsed.find(
      (used) => used.value.toLocaleUpperCase() === value,
    );

    const hits = challenge.word
      .toLocaleUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    if (exists) {
      setLetter("");
      return alert("Não é possível repetir letras");
    }

    setLettersUsed((prev) => [...prev, { value, correct: correct }]);
    setScore(currentScore);
    setLetter("");
  }

  function endGame(message: string) {
    alert(message);
    startGame();
  }

  useEffect(() => {
    if (!challenge) {
      return;
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        endGame(`Você acertou a palavra era ${challenge.word}`);
      }

      if (lettersUsed.length === challenge.word.length + 4) {
        return endGame(
          `Você usou todas as tentativas a palavra era ${challenge.word}`,
        );
      }
    }, 200);
  }, [score, lettersUsed.length]);

  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + 4}
          onRestart={handleRestartGame}
        />

        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase(),
            );

            return (
              <Letter
                value={letterUsed?.value}
                key={index}
                color={letterUsed ? "correct" : "default"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}

export default App;
