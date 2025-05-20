let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.onclick = () => {

let span = document.createElement("span");
span.textContent = text;
span.onclick = () => {
  span.classList.toggle("done");
};

let li = document.createElement("li");
li.appendChild(span);
taskList.appendChild(li);
taskInput.value = "";

};