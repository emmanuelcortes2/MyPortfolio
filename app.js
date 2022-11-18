/* eslint-disable */
function pop() {
  const y = document.getElementById('popup');

  if (y.style.display === 'none') {
    y.style.display = 'flex';
  } else {
    y.style.display = 'none';
  }

  window.location.reload();
}

function popDesk() {
  const z = document.getElementById('desk-popup');

  if (z.style.display === 'flex') {
    z.style.display = 'none';
  } else {
    z.style.display = 'flex';
  }
}

const data = [
  {
    title: 'Project name goes here',
    badge1: 'HTML/CSS',
    badge2: 'Ruby on Rails',
    badge3: 'JavaScript',
    graphic: './images/Rectangle21.svg',
    deskgraphic: './images/Rectangle21.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    btntext1: 'See live',
    btntext2: 'See source',
    link1: 'https://github.com/emmanuelcortes2/emmanuelcortes2.github.io',
    link2: 'https://emmanuelcortes2.github.io/',
  },
  {
    title: 'Project name goes here',
    badge1: 'HTML/CSS',
    badge2: 'Ruby on Rails',
    badge3: 'JavaScript',
    graphic: './images/Image2.svg',
    deskgraphic: './images/Image2.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    btntext1: 'See live',
    btntext2: 'See source',
    link1: 'https://github.com/emmanuelcortes2/emmanuelcortes2.github.io',
    link2: 'https://emmanuelcortes2.github.io/',
  },
  {
    title: 'Project name goes here',
    badge1: 'HTML/CSS',
    badge2: 'Ruby on Rails',
    badge3: 'JavaScript',
    graphic: './images/Image3.svg',
    deskgraphic: './images/Image3.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    btntext1: 'See live',
    btntext2: 'See source',
    link1: 'https://github.com/emmanuelcortes2/emmanuelcortes2.github.io',
    link2: 'https://emmanuelcortes2.github.io/',
  },
  {
    title: 'Project name goes here',
    badge1: 'HTML/CSS',
    badge2: 'Ruby on Rails',
    badge3: 'JavaScript',
    graphic: './images/Image4.svg',
    deskgraphic: './images/Image4.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    btntext1: 'See live',
    btntext2: 'See source',
    link1: 'https://github.com/emmanuelcortes2/emmanuelcortes2.github.io',
    link2: 'https://emmanuelcortes2.github.io/',
  },
  {
    title: 'Project name goes here',
    badge1: 'HTML/CSS',
    badge2: 'Ruby on Rails',
    badge3: 'JavaScript',
    graphic: './images/Image5.svg',
    deskgraphic: './images/Image5.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    btntext1: 'See live',
    btntext2: 'See source',
    link1: 'https://github.com/emmanuelcortes2/emmanuelcortes2.github.io',
    link2: 'https://emmanuelcortes2.github.io/',
  },
  {
    title: 'Project name goes here',
    badge1: 'HTML/CSS',
    badge2: 'Ruby on Rails',
    badge3: 'JavaScript',
    graphic: './images/Image6.svg',
    deskgraphic: './images/Image6.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    btntext1: 'See live',
    btntext2: 'See source',
    link1: 'https://github.com/emmanuelcortes2/emmanuelcortes2.github.io',
    link2: 'https://emmanuelcortes2.github.io/',
  },
];

desktopP = `
    <div class="geometry1"></div>
    <div class="laptop2"></div>
    <div class="laptop1"></div>
    <div class="project1">
      <div class="sub-div">
          <p class="subtitle">${data[0].title}</p>
          <ul class="btn-list">
              <li class="tech-btn">${data[0].badge1}</li>
              <li class="tech-btn">${data[0].badge2}</li>
              <li class="tech-btn">${data[0].badge3}</li>
          </ul>
          <button class="see-btn" onclick="showProjectd(0)" type="button">See this project</button>
      </div>
      </div>
      <div class="p-title"><h1 class="title title1">Projects</h1></div>
      <div class="geometry2"></div>
      <div class="geometry3"></div>
      <div class="project2">
        <div class="sub-div p2">
          <p class="subtitle">${data[0].title}</p>
          <ul class="btn-list">
              <li class="tech-btn">${data[0].badge1}</li>
              <li class="tech-btn">${data[0].badge2}</li>
              <li class="tech-btn">${data[0].badge3}</li>
          </ul>
          <button class="see-btn" onclick="showProjectd(2)" type="button">See this project</button>
        </div>
        </div>
        <div class="laptop3"></div>`;

document.getElementById('projects').innerHTML = desktopP;

mobileP = `
     <div>
     <h1 class="title">Projects</h1>
     </div>
     <img class="project1" src="${data[0].graphic}" alt="">
     <div class="sub-div">
       <p class="subtitle">${data[0].title}</p>
       <ul class="btn-list">
           <li class="tech-btn">${data[0].badge1}</li>
           <li class="tech-btn">${data[0].badge2}</li>
           <li class="tech-btn">${data[0].badge3}</li>
       </ul>
       <a class="see-btn" href="#popup" onclick="showProject(0)">See this project</a>
     </div>
     <img class="project1" src="${data[1].graphic}" alt="">
     <div class="sub-div">
       <p class="subtitle">${data[1].title}</p>
       <ul class="btn-list">
           <li class="tech-btn">${data[1].badge1}</li>
           <li class="tech-btn">${data[1].badge2}</li>
           <li class="tech-btn">${data[1].badge3}</li>
       </ul>
       <a class="see-btn" href="#popup" onclick="showProject(1)">See this project</a>
     </div>
     <img class="project1" src="${data[2].graphic}" alt="">
     <div class="sub-div">
       <p class="subtitle">${data[2].title}</p>
       <ul class="btn-list">
           <li class="tech-btn">${data[2].badge1}</li>
           <li class="tech-btn">${data[2].badge2}</li>
           <li class="tech-btn">${data[2].badge3}</li>
       </ul>
       <a class="see-btn" href="#popup" onclick="showProject(2)">See this project</a>
     </div>
     <img class="project1" src="${data[3].graphic}" alt="">
     <div class="sub-div">
       <p class="subtitle">${data[3].title}</p>
       <ul class="btn-list">
           <li class="tech-btn">${data[3].badge1}</li>
           <li class="tech-btn">${data[3].badge2}</li>
           <li class="tech-btn">${data[3].badge3}</li>
       </ul>
       <a class="see-btn" href="#popup" onclick="showProject(3)">See this project</a>
     </div>
     <img class="project1" src="${data[4].graphic}" alt="">
     <div class="sub-div">
       <p class="subtitle">${data[4].title}</p>
       <ul class="btn-list">
           <li class="tech-btn">${data[4].badge1}</li>
           <li class="tech-btn">${data[4].badge2}</li>
           <li class="tech-btn">${data[4].badge3}</li>
       </ul>
       <a class="see-btn"  href="#popup" onclick="showProject(4)">See this project</a>
     </div>
     <img class="project1" href="#popup" src="${data[5].graphic}" alt="">
     <div class="sub-div">
       <p class="subtitle">${data[5].title}</p>
       <ul class="btn-list">
           <li class="tech-btn">${data[5].badge1}</li>
           <li class="tech-btn">${data[5].badge2}</li>
           <li class="tech-btn">${data[a].badge3}</li>
       </ul>
       <a class="see-btn" href="#popup" onclick="showProject(5)">See this project</a>
     </div>
     <div class="popup" id="popup"></div>`;

document.getElementById('projects-m').innerHTML = mobileP;

function showProject(a) {
  const popUp = document.getElementById('popup');
  popUp.style.display = 'flex';

  const close = document.createElement('img');
  popUp.appendChild(close);
  close.src = './images/close.svg';
  close.height = '17';
  close.id = 'close-icon';
  close.onclick = pop;

  const title = document.createElement('h2');
  popUp.appendChild(title);
  title.textContent = (data[a].title);

  const badges = document.createElement('ul');
  popUp.appendChild(badges);

  const listA = document.createElement('li');
  badges.appendChild(listA);
  listA.textContent = (data[a].badge1);

  const listB = document.createElement('li');
  badges.appendChild(listB);
  listB.textContent = (data[a].badge2);

  const listC = document.createElement('li');
  badges.appendChild(listC);
  listC.textContent = (data[a].badge3);

  const image = document.createElement('img');
  popUp.appendChild(image);
  image.id = 'img-popup';
  image.src = data[a].graphic;

  const paragraph = document.createElement('p');
  popUp.appendChild(paragraph);
  paragraph.textContent = (data[a].text);

  const btn1 = document.createElement('a');
  popUp.appendChild(btn1);
  btn1.id = 'popBtn1';
  btn1.href = (data[a].link2);
  btn1.textContent = (data[a].btntext1);

  const btn2 = document.createElement('a');
  popUp.appendChild(btn2);
  btn2.id = 'popBtn2';
  btn2.href = (data[a].link1);
  btn2.textContent = (data[a].btntext2);
}

function showProjectd(b) {
  const deskPop = document.getElementById('desk-popup');
  deskPop.id = 'desk-popup';
  deskPop.style.display = 'flex';

  const closedesk = document.createElement('img');
  deskPop.appendChild(closedesk);
  closedesk.src = './images/close.svg';
  closedesk.height = '30';
  closedesk.id = 'closedesk-icon';
  closedesk.onclick = popDesk;

  const titledesk = document.createElement('h2');
  deskPop.appendChild(titledesk);
  titledesk.textContent = (data[b].title);

  const badgesdesk = document.createElement('ul');
  deskPop.appendChild(badgesdesk);

  const listAdesk = document.createElement('li');
  badgesdesk.appendChild(listAdesk);
  listAdesk.textContent = (data[b].badge1);

  const listBdesk = document.createElement('li');
  badgesdesk.appendChild(listBdesk);
  listBdesk.textContent = (data[b].badge2);

  const listCdesk = document.createElement('li');
  badgesdesk.appendChild(listCdesk);
  listCdesk.textContent = (data[b].badge3);

  const deskGraph = document.createElement('img');
  deskPop.appendChild(deskGraph);
  deskGraph.src = data[b].deskgraphic;
  deskGraph.id = 'desk-graph';

  const paragraphDesk = document.createElement('p');
  deskPop.appendChild(paragraphDesk);
  paragraphDesk.textContent = (data[b].text);

  const btndiv = document.createElement('div');
  deskPop.appendChild(btndiv);
  btndiv.id = 'btndiv';

  const btndesk1 = document.createElement('a');
  btndiv.appendChild(btndesk1);
  btndesk1.id = 'popBtn1-desk';
  btndesk1.href = (data[b].link2);
  btndesk1.textContent = (data[b].btntext1);

  const btndesk2 = document.createElement('a');
  btndiv.appendChild(btndesk2);
  btndesk2.id = 'popBtn2-desk';
  btndesk2.href = (data[b].link1);
  btndesk2.textContent = (data[b].btntext2);

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
}

function toggle() {
  const x = document.getElementById('menu');

  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
}

const form = document.getElementById('contact');
const email = document.getElementById('email');
const eMessage = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase()) {
    eMessage.textContent = '';
  } else {
    e.preventDefault();
    eMessage.textContent = 'The email must be in lowercase';
    eMessage.style.display = 'block';
  }
});

const nameIn = document.getElementById('name');
const message = document.getElementById('message');

form.addEventListener('input', () => {
  const valuesObj = {
    nameValue: nameIn.value,
    emailValue: email.value,
    textAreaValue: message.value,
  };
  localStorage.setItem('userFormDataCollected', JSON.stringify(valuesObj));
});

let getData = localStorage.getItem('userFormDataCollected');
getData = JSON.parse(getData);

if (getData != null) {
  nameIn.value = getData.nameValue;
  email.value = getData.emailValue;
  message.value = getData.textAreaValue;
}
