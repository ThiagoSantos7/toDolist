const inputTask = document.querySelector(".input-task");
const buttonAdd = document.querySelector(".btn-task");
const boxTask = document.querySelector(".list-task");
const check = document.querySelector("#check");
const trash = document.querySelector("#trash");
const paragraph = document.querySelector("p");

let myList = [];

const addTask = () => {
  myList.push({
    task: inputTask.value,
    concluse: false,
  });

  inputTask.value = "";

  taskVisible();
};

const taskVisible = () => {
  let newLi = "";

  myList.forEach((item, index) => {
    newLi =
      newLi +
      `
        <ul class="list-task">
            <li class="task ${item.concluse && "done"}">
                <i class='bx bx-check' onclick="taskCheck(${index})"></i>
                <p>${item.task}</p>
                <i id="trash" class='bx bxs-trash' onclick="deletItem(${index})"></i>
            </li>    
        </ul>

        `;
  });

  boxTask.innerHTML = newLi;

  localStorage.setItem("List", JSON.stringify(myList));
};

const taskCheck = (index) => {
  myList[index].concluse = !myList[index].concluse;
  taskVisible();
};

function deletItem(index) {
  myList.splice(index, 1);

  taskVisible();
}

function reloadTasks() {
  const tasksLocalStorage = localStorage.getItem("List");

  if (tasksLocalStorage) {
    myList = JSON.parse(tasksLocalStorage);
  }

  taskVisible();
}

reloadTasks();
buttonAdd.addEventListener("click", addTask);
