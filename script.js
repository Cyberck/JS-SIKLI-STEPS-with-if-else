let amount = +prompt('Write quantity of steps', ''),
  symbol = prompt('Enter the symbol', ''),
  last = prompt('Enter the end symbol', '');


for (let i = 0; i < amount; i++) {
  if (last == 0) {
    console.log(last);
  } else if (amount > 0) {
    console.log(last = symbol + last)
  } else {
    console.log('Something is wrong');
  }
}