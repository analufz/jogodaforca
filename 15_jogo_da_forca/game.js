import * as io from './io.js';
import Word from './word.js';
import {maxAttempts} from './config.js';

function play() {
    io.print("Welcome!");
    const word = new Word();
    let leftAttempts = maxAttempts;
    const guesses = [];

    while(!word.revealed() && leftAttempts > 0) {
        io.newLine();
        io.print(word.maskedWord);

        const letter = io.read("Digite uma letra: ");

        if(!letter || guesses.includes(letter) || letter.length > 1) {
            io.print("Tente novamente:")
            continue;
        }

        guesses.push(letter);

        if(word.guess(letter)) {
            io.print("Acertou!");
        } else {
            io.print("Errou...");
            leftAttempts--;

            if (leftAttempts > 0) {
                io.print(`Você tem ${leftAttempts} chance(s)`);
            }
        }
    }

    if (leftAttempts == 0) {
        io.print(`Você perdeu... a palavra era '${word.word}'`);
    } else {
        io.print(`Você acertou! Encontrou a palavra '${word.word}' :)`)
    }
}

play();

// node .\15_jogo_da_forca\game.js