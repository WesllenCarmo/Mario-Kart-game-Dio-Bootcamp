const player1 = {
  name: "Mario",
  speed: 4,
  maneuverability: 3,
  power: 3,
  points: 0
};
const player2 = {
  name: "Peach",
  speed: 3,
  maneuverability: 4,
  power: 2,
  points: 0
};
const player3 = {
  name: "Yoshi",
  speed: 2,
  maneuverability: 4,
  power: 3,
  points: 0
};
const player4 = {
  name: "Bowser",
  speed: 5,
  maneuverability: 2,
  power: 5,
  points: 0
};
const player5 = {
  name: "Luigi",
  speed: 3,
  maneuverability: 4,
  power: 4,
  points: 0
};
const player6 = {
  name: "Donkey King",
  speed: 2,
  maneuverability: 2,
  power: 5,
  points: 0
};
async function rollDice() {
  return Math.floor((Math.random() * 6) + 1);
}
(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1.name} e ${player5.name} começando... \n`);
})();