let n = Number(prompt('Enter a number'))

switch (n) {
    case 1:
        console.log('Monday');
        break;
    case 2:
    case 3:
        console.log('webnesday');
        break;
    case 4:
        console.log('thusday');
        break;
    case 'shivam':
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;

    default: console.log('nothing');
        break;
}