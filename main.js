const clientHeight = document.querySelector('.clientHeight');
const innerHeight = document.querySelector('.innerHeight');
const scrollHeight = document.querySelector('.scrollHeight');
const scrollTop = document.querySelector('.scrollTop');

const mainHeader = document.querySelector('.nav');

let last = 0;
let height = document.documentElement.scrollHeight;
let client = document.documentElement.clientHeight;

document.addEventListener('scroll', function () {
  let ch = document.documentElement.clientHeight;
  let ih = document.documentElement.innerHeght;
  let sh = document.documentElement.scrollHeight;
  let st = document.documentElement.scrollTop;

  clientHeight.innerHTML = `client height ${ch}`;
  innerHeight.innerHTML = `inner height ${ih}`;
  scrollHeight.innerHTML = `scroll height ${sh}`;
  scrollTop.innerHTML = `scroll top ${st}`;

  let scroll = document.documentElement.scrollTop;

  if (scroll > -1 || height - scroll > client - 20) {
    if (scroll > last) {
      mainHeader.classList.add('hide');
    } else {
      mainHeader.classList.remove('hide');
    }
    last = scroll;
  }
});
