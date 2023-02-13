let oddugiImage = [
  "../public/image/oddugimain_1.png",
  "../public/image/oddugimain_2.png",
  "../public/image/oddugimain_3.png",
];

let oddugi = document.querySelector(".oddugi");

let num = 0;
function sliden() {
  num++;
  if (num == 3) {
    num = 0;
  }
  oddugi.style.background = `url(${oddugiImage[num]})`;
}
setInterval(sliden, 3000);
console.log(oddugiImage[2]);
