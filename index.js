const draggable = document.querySelector(".el");
const dropzone = document.querySelectorAll(".dropzone");


var dragged

document.addEventListener('drag', ()=> {

}, false);


document.addEventListener('dragstart', (e) => {
  dragged = e.target;
  e.target.style.opacity = 0.5;
});

document.addEventListener('dragend', (e) => {
  e.target.style.opacity = ""
})

document.addEventListener('dragover', (e) => {
  e.preventDefault();
  if(e.target.className === "dropzone") {
      e.target.style.opacity = 0.5
  }
})

document.addEventListener('dragleave', (e) => {
  if(e.target.className === "dropzone") {
    e.target.style.opacity = 1
  }
})

document.addEventListener('drop', (e) => {
  if(e.target.className === "dropzone") {
    dragged.parentNode.removeChild(dragged)
    e.target.appendChild(dragged)
    e.target.style.opacity = 1;
  }
})
