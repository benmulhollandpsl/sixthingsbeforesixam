// from chapter 16 of wes bos 30 days of vanilla js

  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
 e.preventDefault();
 const text = (this.querySelector('[name=item]')).value;
 const item = {
  text,
  done: false
};
items.push(item);
populateList(items, itemsList);
localStorage.setItem('items', JSON.stringify(items));


this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if(!e.target.matches('input')) return; //skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);

}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);


populateList(items, itemsList)


// from chapter 17 of wes bos 30 days of vanilla js



const hero = document.querySelector('.wrapper');
const text = hero.querySelector('h1');
const walk = 200; //100px


function shadow(e) {
  //get width and height of thing
  const { offsetWidth: width, offsetHeight: height } = hero; 
  let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    //keeps around 50 and 100 instead of zero
  // console.log(x, y);
  // console.log(xWalk, yWalk);

    // text.style.textShadow = `10px 10px 0 red`;
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    
    `;
  }
