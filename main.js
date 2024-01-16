const btn = document.querySelector("button");
const txt = document.querySelector("h1");

const typer = () => {
  btn.style.display = "none";
  const name = "I love you";

  for (let i = 0; i <= name.length; i++) {
    setTimeout(() => {
      txt.innerText = name.substring(0, i);
    }, i * 100);
  }
};

btn.addEventListener("click", () => {
  typer();
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
});
