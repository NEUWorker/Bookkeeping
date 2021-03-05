const choices = ["Rock", "Paper", "Scissors"];

const randomComputerPick = () => {
  choices[Math.floor(Math.random() * choices.length)];
};
