 const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 4,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 5,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 6,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

const todoColumn = document.getElementById("todo-col");
const doingColumn = document.getElementById("doing-col");
const doneColumn = document.getElementById("done-col");
const modalOpen = document.getElementById("modal-cnt")
const modalClose = document.getElementById("close-btn")
const titleInput = document.getElementById("input-title")
const descriptionInput = document.getElementById("input-description")
const statusInput = document.getElementById("input-status")
const addTaskBtn = document.getElementById("add-task-btn")
const addTaskModal = document.getElementById("modal-cnt-2")
const closeTaskModal = document.getElementById("close-btn-2")

/**Creating the task elements**/
function createTaskElement(task){
    let displayTask = document.createElement("div"); //creates a new div element in memory
    displayTask.textContent = task.title;
    return displayTask; //returning it so we can use it outside the function.
}

/***Check the task's status and append the task element to the correct column***/
function appendTask(displayTask, status){
  if (status === "todo"){
    todoColumn.appendChild(displayTask);
  } else if(status === "doing"){
     doingColumn.appendChild(displayTask);
  } else if(status === "done"){
     doneColumn.appendChild(displayTask);
  }
}

/**Main task rendering loop**/
for(const task of initialTasks){ //Loop through all tasks.
  const divTask = createTaskElement(task);
  appendTask(divTask, task.status)

//click listener so the modal opens with the task's details when clicked.
  divTask.addEventListener("click", () => {
  modalOpen.classList.add("display-modal");
  titleInput.value = task.title;
  descriptionInput.value = task.description;
  statusInput.value = task.status;
})
}
  //click listener so the modal closes.
  modalClose.addEventListener("click", () => {
    modalOpen.classList.remove("display-modal")
  })

  //click listener so the add task modal open.
  addTaskBtn.addEventListener("click", () => {
    addTaskModal.classList.add("display-modal")
  })

  //click listener so the modal closes.
  closeTaskModal.addEventListener("click", () => {
    addTaskModal.classList.remove("display-modal")
  })