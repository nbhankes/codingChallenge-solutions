//Convert Binary to Hex

function binaryToHex(s) {
    const binarySplit = s.split("");
    console.log((binarySplit[0] * 8) + (binarySplit[1] * 4) + (binarySplit[2] * 2) + (binarySplit[3] * 1));
    }
    
    binaryToHex(1011); // 11

