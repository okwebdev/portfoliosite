const el = document.querySelector("#splashContainer");

el.addEventListener("mousemove", (e) => {
  el.style.setProperty("--x", -e.offsetX / 70 + "px");
  el.style.setProperty("--y", -e.offsetY / 70 + "px");
});
