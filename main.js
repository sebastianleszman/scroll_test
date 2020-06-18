const clientHeight = document.querySelector('.clientHeight');
const innerHeight = document.querySelector('.innerHeight');
const scrollHeight = document.querySelector('.scrollHeight');
const scrollTop = document.querySelector('.scrollTop');

document.addEventListener('scroll', function () {
  let ch = document.documentElement.clientHeight;
  let ih = document.documentElement.innerHeght;
  let sh = document.documentElement.scrollHeight;
  let st = document.documentElement.scrollTop;

  clientHeight.innerHTML = `client height ${ch}`;
  innerHeight.innerHTML = `inner height ${ih}`;
  scrollHeight.innerHTML = `scroll height ${sh}`;
  scrollTop.innerHTML = `scroll top ${st}`;
});
