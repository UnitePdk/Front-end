const container = document.createElement("section");
container.style.cssText = "display:flex;flex-direction:column;gap:22px";
document.body.appendChild(container);

const makeButton = (color) => {
  const button1 = document.createElement("button");
  button1.style.cssText = `background-color:${color};border:none;padding:10px 12px;color:white;border-radius=30px`;
  button1.innerText = "Button";
  container.appendChild(button1);
};

const colorList = ["#2563EB", "#1D4ED8", "skyblue", "DBEAFE"];

colorList.forEach((v) => makeButton(v));
