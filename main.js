const clientHeight = document.querySelector('.clientHeight');
const innerHeight = document.querySelector('.innerHeight');
const scrollHeight = document.querySelector('.scrollHeight');
const scrollTop = document.querySelector('.scrollTop');

const mainHeader = document.querySelector('.nav');

let last = 0;
let height = document.documentElement.scrollHeight;
let client = document.documentElement.clientHeight;
let max = height - client;

document.addEventListener('scroll', function () {
  let ch = document.documentElement.clientHeight;
  let ih = document.documentElement.innerHeght;
  let sh = document.documentElement.scrollHeight;
  let scroll = document.documentElement.scrollTop;

  clientHeight.innerHTML = `client height ${ch}`;
  innerHeight.innerHTML = `inner height ${ih}`;
  scrollHeight.innerHTML = `scroll height ${sh}`;
  scrollTop.innerHTML = `scroll top ${scroll}`;

  if (scroll > -1 && scroll < max) {
    if (scroll > last) {
      mainHeader.classList.add('hide');
    } else {
      mainHeader.classList.remove('hide');
    }
    last = scroll;
  }
});
