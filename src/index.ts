import promptSync from 'prompt-sync';

const prompt = promptSync();
const randomNumber = (min: number = 0, max: number = 30): number => {
  return Math.round(Math.random() * (max - min) + min);
}
const minValue = 0;
const maxValue = 60;
const drawnNumber = randomNumber(minValue, maxValue);

prizeDrawLoop:
while(true) {
  const suggestion = prompt(`Qual número você sugere? [${minValue}-${maxValue}] `);
  const suggestionNumber = Number(suggestion);

  if(isNaN(suggestionNumber) || suggestionNumber < minValue || suggestionNumber > maxValue) {
    console.log(`O número ${suggestionNumber} não está na faixa de números do sorteio.`);
    continue;
  }

  if (suggestionNumber !== drawnNumber) {
    const wantToRetry = prompt('Você não foi sorteado, deseja continuar tentando? [S | N] ');

    switch (wantToRetry) {
      case 'S':
        continue;
      case 'N':
        console.log('Obrigado por participar do sorteio.')
        break prizeDrawLoop;
      default: break prizeDrawLoop;
    }
  }
  console.log('Parabéns você foi sorteado!');
  break;
}
