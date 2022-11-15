const sect = document.createDocumentFragment();
const popUp = sect.appendChild(document.createElement('section'));
popUp.textContent = 'hello world';

document.body.appendChild(popUp);

popUp.setAttribute('class', 'pop-up');

const title = document.createElement('h2');
popUp.appendChild(title);

const badges = document.createElement('ul');
popUp.appendChild(badges);

const listA = document.createElement('li');
badges.appendChild(listA);

const listB = document.createElement('li');
badges.appendChild(listB);

const listC = document.createElement('li');
badges.appendChild(listC);

const image = document.createElement('img');
popUp.appendChild(image);

const paragraph = document.createElement('p');
popUp.appendChild(paragraph);

const btn1 = document.createElement('button');
popUp.appendChild(btn1);

const btn2 = document.createElement('button');
popUp.appendChild(btn2);


/* eslint-disable */
function toggle() {
  const x = document.getElementById('menu');

  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
}
