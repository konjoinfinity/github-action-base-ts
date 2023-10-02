import { getInput, setOutput } from "@actions/core";

export async function generateRandomCharacters() {
  const numOfCharacters = getInput("input1");
  const startRange = 0x0020;
  const endRange = 0x007e;
  const result: string[] = [];

  for (let i = 0; i < Number(numOfCharacters); i++) {
    const randomCodePoint = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
    const randomCharacter = String.fromCodePoint(randomCodePoint);
    result.push(randomCharacter);
  }
  await setOutput("output1", result.join(""));
}

generateRandomCharacters();
