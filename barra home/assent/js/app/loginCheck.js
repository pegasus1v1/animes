const overlay = document.getElementById("overlay");
export const loginCheck = (user) => {
  if (user) {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
};