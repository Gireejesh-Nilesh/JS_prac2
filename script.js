const btn = document.querySelector("button");
const main = document.querySelector("main");

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  const x = Math.random() * 90;
  const y = Math.random() * 80;
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random();
  const rot = Math.random() * 360;

  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = "blue";
  div.style.position = "absolute";
  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  div.style.rotate = rot + "deg";
  main.appendChild(div);
});
