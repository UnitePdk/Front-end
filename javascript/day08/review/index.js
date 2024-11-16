const container = document.querySelector(".container");

const makeButton = (color, bgc, borderColor) => {
  return `<button
        class="btn"
        style="
          height: 60px;
          width: 150px;
          border-radius: 30px;
          font-size: 20px;
          font-weight: 300;
          padding: 12px 35px;
          color: ${color};
          background-color: ${bgc};
          border: 3px solid ${borderColor};
        "
      >
        Button
      </button>`;
};

container.insertAdjacentHTML(
  "beforeend",
  makeButton("white", "#2563eb", "#2563eb")
);
container.insertAdjacentHTML(
  "beforeend",
  makeButton("white", "#1d4ed8", "#1d4ed8")
);
container.insertAdjacentHTML(
  "beforeend",
  makeButton("#2563eb", "white", "#2563eb")
);
container.insertAdjacentHTML(
  "beforeend",
  makeButton("white", "#2563eb", "#2563eb")
);
