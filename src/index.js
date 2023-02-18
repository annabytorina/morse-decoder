const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function splitByLength(str, length) {
    return str.match(RegExp(`.{1,${length}}`, 'gu'));
}

function decode(expr) {
    const n = 10;
    let arr = [];
    const splitStr = splitByLength(expr,n);

    for (let i=0;i<splitStr.length;i++) {
        splitStr[i] = splitStr[i].replace(/10/gi,'.');
        splitStr[i] = splitStr[i].replace(/11/gi,'-');
        splitStr[i] = splitStr[i].replace(/0/gi,'');
        splitStr[i] = splitStr[i].replace('**********',' ');
        for (key in MORSE_TABLE) {
            if (splitStr[i] == key) {
                splitStr[i] = MORSE_TABLE[key];
            }
        }
    }

    return splitStr.join('');
}

module.exports = {
    decode
}