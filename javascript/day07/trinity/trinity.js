const container = document.querySelector(".container");
container.appendChild();
container.insertAdjacentHTML(
  "beforeend",
  `<div class="roomCard">${makeImage(image)}${makeInfo(price, detail)}</div>`
);

const makeImage = (image) => {
  `<div class="image">
                <img src="${image}" alt="">/
            </div>`;
};

const makeInfo=(price, detail)=>{
    `<div class = "info">
    <h5>${price}</h5>
    <span>${detail}</span>
    </div>`;
};

const makeRoomCard=()=>{
  
}

data.forEach((v) => container.insertAdjacentHTML("beforeend",makeRoomCard()))