const lists = document.getElementsByClassName("list");
const right = document.getElementsByClassName("right")[0];
const left = document.getElementsByClassName("left")[0];

let draggedItem = null;

for (let list of lists) {
  list.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
  });
}

// Allow drop on right box
right.addEventListener("dragover", (event) => {
  event.preventDefault();
});

right.addEventListener("drop", (event) => {
  if (draggedItem) {
    right.appendChild(draggedItem);
    draggedItem = null;
  }
});

// Allow drop on left box
left.addEventListener("dragover", (event) => {
  event.preventDefault();
});

left.addEventListener("drop", (event) => {
  if (draggedItem) {
    left.appendChild(draggedItem);
    draggedItem = null;
  }
});
