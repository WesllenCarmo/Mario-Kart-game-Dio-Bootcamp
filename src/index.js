const player1 = {
  name: 'Mario',
  speed: 4,
  maneuverability: 3,
  power: 3,
  points: 0,
};
const player2 = {
  name: 'Peach',
  speed: 3,
  maneuverability: 4,
  power: 2,
  points: 0,
};
const player3 = {
  name: 'Yoshi',
  speed: 2,
  maneuverability: 4,
  power: 3,
  points: 0,
};
const player4 = {
  name: 'Bowser',
  speed: 5,
  maneuverability: 2,
  power: 5,
  points: 0,
};
const player5 = {
  name: 'Luigi',
  speed: 3,
  maneuverability: 4,
  power: 4,
  points: 0,
};
const player6 = {
  name: 'Donkey King',
  speed: 2,
  maneuverability: 2,
  power: 5,
  points: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

async function getRandomBlock() {
  let random = Math.random();
  let result;
  switch (true) {
    case random < 0.33:
      result = 'RETA';
      break;
    case random < 0.66:
      result = 'CURVA';
      break;
    default:
      result = 'CONFRONTO';
      break;
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`,
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);
    var block = await getRandomBlock();
    console.log(`Bloco: ${block}`);
    
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === 'RETA') {
      totalTestSkill1 = diceResult1 + character1.speed;
      totalTestSkill2 = diceResult2 + character2.speed;

      await logRollResult(
        character1.name,
        'velocidade',
        diceResult1,
        character1.speed,
      );

      await logRollResult(
        character2.name,
        'velocidade',
        diceResult2,
        character2.speed,
      );
    }
    if (block === 'CURVA') {
      totalTestSkill1 = diceResult1 + character1.maneuverability;
      totalTestSkill2 = diceResult2 + character2.maneuverability;

      await logRollResult(
        character1.name,
        'manobrilidade',
        diceResult1,
        character1.maneuverability,
      );

      await logRollResult(
        character2.name,
        'manobrilidade',
        diceResult2,
        character2.maneuverability,
      );
    }
    if (block === 'CONFRONTO') {
      let powerResult1 = diceResult1 + character1.power;
      let powerResult2 = diceResult2 + character2.power;

      console.log(`${character1.name} confrontou com ${character2.name}! 🥊`);

      await logRollResult(
        character1.name,
        'poder',
        diceResult1,
        character1.power,
      );

      await logRollResult(
        character2.name,
        'poder',
        diceResult2,
        character2.power,
      );
      
      if(powerResult1 > powerResult2) {
        if (character2.points > 0) {
          character2.points--;
          console.log(`${character1.name} venceu o confronto! ${character2.name} perdeu um ponto`);
        } else {
          console.log(`${character1.name} venceu o confronto! ${character2.name} não tem pontos para perder`);
        }
      } else if (powerResult2 > powerResult1) {
        if (character1.points > 0) {
          character1.points--;
          console.log(`${character2.name} venceu o confronto! ${character1.name} perdeu um ponto`);
        } else {
          console.log(`${character2.name} venceu o confronto! ${character1.name} não tem pontos para perder`)
        } 
      } else {
        console.log("Rodada empatada! Ninguém perdeu pontos");
        
      }

    }
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.name} marcou um ponto!`);
      character1.points++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.name} marcou um ponto!`);
      character2.points++;
    } else {
      block === "CONFRONTO" ? 0 : console.log("Rodada empatada!");
    }
    
    console.log("------------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.name}: ${character1.points} ponto(s)`);
  console.log(`${character2.name}: ${character2.points} ponto(s)`);
  
  if (character1.points > character2.points) {
    console.log(`\n${character1.name} venceu a corrida! Parabéns! 🏆`);
  } else if (character2.points > character1.points) {
    console.log(`\n${character2.name} venceu a corrida! Parabéns! 🏆`);
  } else {
    console.log("A corrida terminou em empate!");
    
  }
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.name} e ${player5.name} começando... \n`,
  );

  await playRaceEngine(player1, player5);
  await declareWinner(player1, player2);
})();
