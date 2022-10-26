//array
const subscribe = [
  {
    head: 'Annual plan',
    price: '59.99$',
  },
  {
    head: 'Monthly plan',
    price: '29.99$',
  },
  {
    head: 'Weekly plan',
    price: '19.99$',
  },
  {
    head: 'Daily plan',
    price: '5.99$',
  },
];
//global variable
let currentItem = 0;

//declaration
const headText = document.querySelector('.head_text');
const annual = document.querySelector('.annual');
const link = document.querySelector('.link');
const price = document.querySelector('.price');

const btnCancel = document.querySelector('.btn-cancel');

//functionality
window.addEventListener('DOMContentLoaded', showPlan(currentItem));

link.addEventListener('click', function () {
  currentItem++;
  if (currentItem > subscribe.length-1) {
    currentItem = 0;
  }
  showPlan(currentItem);
});
//callbacks
function showPlan(currentItem) {
  const item = subscribe[currentItem];
  headText.textContent = item.head;
  price.textContent = item.price;
}
