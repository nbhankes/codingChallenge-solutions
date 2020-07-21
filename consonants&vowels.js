function vowelsAndConsonants(s) {
    let letters = s.split("");
    const vowels = [];
    const consonants = [];
    const orderedLetters = [];
    
 
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
                    vowels.push(letters[i]);
                } else {
                    consonants.push(letters[i]);
                 }
    }

    orderedLetters.push(...vowels, ...consonants);

    for (let i = 0; i < orderedLetters.length; i++) {
        console.log(orderedLetters[i]);
}
}
