import { data } from "./data";

const container = document.querySelector(".container");
container.appendChild();
container.insertAdjacentHTML("beforeend");

const makeImage = (image) => {
  `<div class="avatar">
        <img src="${image}" alt="">
    </div>`;
};

const makeName = (name) => {
  `<div class="name">${name}</div>`;
};

const makeChip = (image, name) => {
  makeImage(image);
  makeName(name);
};

const makeLine = 

container.insertAdjacentHTML(
  "beforeend",
  makeChip(data[0].avatar, data[0].fullName)
);
// data.forEach((v) => container.insertAdjacentHTML("beforeend",makeCard(data[v].avatar, data[v].fullName)));
