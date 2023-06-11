const blurryShape = document.getElementById("blurry-shape");

setTimeout(() => {
  window.addEventListener("mousedown", (e) => {
    blurryShape.classList.add("blurry-shape-click");
    blurryShape.classList.remove("blurry-shape-click-release");
  });
  window.addEventListener("mouseup", (e) => {
    blurryShape.classList.remove("blurry-shape-click");
    blurryShape.classList.add("blurry-shape-click-release");
  });
}, 7500);
