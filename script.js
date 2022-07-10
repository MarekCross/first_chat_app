const user1Button = document.querySelector('.user1btn');
const user2Button = document.querySelector('.user2btn');
const inputField = document.querySelector('.message_text');
inputField.value = '';
const sendButton = document.querySelector('.btn_send');
const logOutBtn = document.querySelector('.log_out');
const chat = document.querySelector('.chat');
let currentUser = '';

//set active user by click a button
user1Button.addEventListener('click', function () {
  currentUser = 'user1';
  user1Button.style.backgroundColor = 'royalblue';
  user2Button.style.backgroundColor = 'white';
  logOutBtn.style.backgroundColor = 'white';
});
user2Button.addEventListener('click', function () {
  currentUser = 'user2';
  user2Button.style.backgroundColor = 'royalblue';
  user1Button.style.backgroundColor = 'white';
  logOutBtn.style.backgroundColor = 'white';
});
//
sendButton.addEventListener('click', function () {
  if (currentUser === '') return;
  chat.insertAdjacentHTML(
    'beforeend',
    `<div class="message_get">
    <p class="message_get_p ${currentUser}">${inputField.value}</p>
  </div>`
  );
  inputField.value = '';
});

const user1 = document.getElementsByClassName('user1');
const user2 = document.getElementsByClassName('user2');
//function to change active user
const changeUserLR = function (user, where) {
  for (let i = 0; i < user.length; i++) {
    user.item(i).style.textAlign = where;
  }
};
//change user by clicking on button
user1Button.addEventListener('click', function () {
  changeUserLR(user1, 'right');
  changeUserLR(user2, 'left');
  // for (let i = 0; i < user1.length; i++) {
  //    user1.item(i).style.textAlign ="right";
  //  };
  // for (let i = 0; i < user2.length; i++) {
  //    user2.item(i).style.textAlign ="left";
  //  };
});

user2Button.addEventListener('click', function () {
  changeUserLR(user1, 'left');
  changeUserLR(user2, 'right');
  // for (let i = 0; i < user1.length; i++) {
  //     user1.item(i).style.textAlign ="left";
  //   };
  //  for (let i = 0; i < user2.length; i++) {
  //     user2.item(i).style.textAlign ="right";
  //   };
});
//set current user to "" to "Log out"
logOutBtn.addEventListener('click', function () {
  currentUser = '';
  user1Button.style.backgroundColor = 'white';
  user2Button.style.backgroundColor = 'white';
});
