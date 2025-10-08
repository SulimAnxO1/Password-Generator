const hoverGif = document.getElementById("hoverGif");
let isFollowing = false;

hoverGif.addEventListener("mouseenter", () => {
  isFollowing = true;
  hoverGif.style.pointerEvents = "none";
});

document.addEventListener("mouseleave", () => {
  isFollowing = false;
  hoverGif.style.pointerEvents = "auto";
});

document.addEventListener("mousemove", (e) => {
  if (isFollowing) {
    hoverGif.style.left = e.pageX + 10 + "px";
    hoverGif.style.top = e.pageY + 10 + "px";
  }
});
