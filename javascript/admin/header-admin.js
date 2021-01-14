const navBtn = document.querySelector("#close-btn");
const nav = document.querySelector("nav");
const mainContainer = document.querySelector(".container");
const cover = document.querySelector(".cover");

const rightArrow = "images/nav-right.png";
const leftArrow = "images/nav-left.png";

const rightArrowImg = setArrowImg(rightArrow);
const leftArrowImg = setArrowImg(leftArrow);

navBtn.appendChild(rightArrowImg);

function openNav() {
  nav.style.width = "250px";
  navBtn.style.left = "260px";
  navBtn.setAttribute("onclick", "closeNav()");
  navBtn.innerHTML = "";
  navBtn.appendChild(leftArrowImg);
  cover.id = "cover-div";
}

function closeNav() {
  nav.style.width = "0px";
  navBtn.style.left = "10px";
  navBtn.setAttribute("onclick", "openNav()");
  navBtn.innerHTML = "";
  navBtn.appendChild(rightArrowImg);
  cover.id = "";
}

function setArrowImg(imgUrl) {
  var image = document.createElement("img");
  image.setAttribute("src", imgUrl);
  image.setAttribute("alt", "nav-arrow");
  image.id = "nav-btn-image";
  return image;
}
