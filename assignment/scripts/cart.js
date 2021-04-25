console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
function addItem( item ) {
  basket.push ( item );
  return true;
}
addItem('Pears');
addItem('Bread');
addItem('Milk');

function listItems(){
  for(let b = 0; b < basket.length; b++){
    console.log(basket[b]);
  }
}
console.log(listItems());

function empty(){
  while(basket.length > 0)
    basket.pop()
}

const maxItems = 5
isFull(){
  if (basket.length <= maxItems){
    console.log('True');
  }
  else {
    console.log('False');
  }
}
