function pop() {
  const y = document.getElementById('popup');

  if (y.style.display === 'flex') {
    y.style.display = 'none';
  } else {
    y.style.display = 'flex';
  }
}

function popDesk() {
  const z = document.getElementById('desk-popup');

  if (z.style.display === 'flex') {
    z.style.display = 'none';
  } else {
    z.style.display = 'flex';
  }
}

const data = {
  title: 'Project name goes here',
  badge1: 'HTML/CSS',
  badge2: 'Ruby on Rails',
  badge3: 'JavaScript',
  graphic: './images/Rectangle21.svg',
  deskgraphic: './images/Group 104.svg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  btntext1: 'See live',
  btntext2: 'See source',
};

const popUp = document.getElementById('popup');

const close = document.createElement('img');
popUp.appendChild(close);
close.src = './images/close.svg';
close.height = '17';
close.id = 'close-icon';
close.onclick = pop;

const title = document.createElement('h2');
popUp.appendChild(title);
title.textContent = (data.title);

const badges = document.createElement('ul');
popUp.appendChild(badges);

const listA = document.createElement('li');
badges.appendChild(listA);
listA.textContent = (data.badge1);

const listB = document.createElement('li');
badges.appendChild(listB);
listB.textContent = (data.badge2);

const listC = document.createElement('li');
badges.appendChild(listC);
listC.textContent = (data.badge3);

const image = document.createElement('img');
popUp.appendChild(image);
image.id = 'img-popup';
image.src = data.graphic;

const paragraph = document.createElement('p');
popUp.appendChild(paragraph);
paragraph.textContent = (data.text);

const btn1 = document.createElement('button');
popUp.appendChild(btn1);
btn1.id = 'popBtn1';
btn1.textContent = (data.btntext1);

const btn2 = document.createElement('button');
popUp.appendChild(btn2);
btn2.id = 'popBtn2';
btn2.textContent = (data.btntext2);

const deskPop = document.getElementById('desk-popup');
deskPop.id = 'desk-popup';

const closedesk = document.createElement('img');
deskPop.appendChild(closedesk);
closedesk.src = './images/close.svg';
closedesk.height = '30';
closedesk.id = 'closedesk-icon';
closedesk.onclick = popDesk;

const titledesk = document.createElement('h2');
deskPop.appendChild(titledesk);
titledesk.textContent = (data.title);

const badgesdesk = document.createElement('ul');
deskPop.appendChild(badgesdesk);

const listAdesk = document.createElement('li');
badgesdesk.appendChild(listAdesk);
listAdesk.textContent = (data.badge1);

const listBdesk = document.createElement('li');
badgesdesk.appendChild(listBdesk);
listBdesk.textContent = (data.badge2);

const listCdesk = document.createElement('li');
badgesdesk.appendChild(listCdesk);
listCdesk.textContent = (data.badge3);

const deskGraph = document.createElement('img');
deskPop.appendChild(deskGraph);
deskGraph.src = (data.deskgraphic);
deskGraph.id = 'desk-graph';

const paragraphDesk = document.createElement('p');
deskPop.appendChild(paragraphDesk);
paragraphDesk.textContent = (data.text);

const btndiv = document.createElement('div');
deskPop.appendChild(btndiv);
btndiv.id = 'btndiv';

const btndesk1 = document.createElement('button');
btndiv.appendChild(btndesk1);
btndesk1.id = 'popBtn1-desk';
btndesk1.textContent = (data.btntext1);

const btndesk2 = document.createElement('button');
btndiv.appendChild(btndesk2);
btndesk2.id = 'popBtn2-desk';
btndesk2.textContent = (data.btntext2);

const fwdBck = document.createElement('div');
deskPop.appendChild(fwdBck);
fwdBck.id = 'fwdBck';

const bck = document.createElement('button');
fwdBck.appendChild(bck);
bck.id = 'bck';
bck.textContent = 'Next project';

const fwd = document.createElement('button');
fwdBck.appendChild(fwd);
fwd.id = 'fwd';
fwd.textContent = 'Previous project';

/* eslint-disable */
function toggle() {
  const x = document.getElementById('menu');

  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }
}