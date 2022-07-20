const preloadScreen = document.getElementById("preload-screen");

window.addEventListener("load", () => {
  preloadScreen.style.animation = "go-down 1s ease 1s";
  setTimeout(() => {
    preloadScreen.style.display = "none";
  }, 2000);
  alert('Lumang site ko na \'to. Gawa ako bago mga minsan. Hehe.');
});
