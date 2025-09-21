
import {initialTasks } from "./initialData.js";
import { loadTasks, storeTasks} from "./localStorage.js";
import { renderTasks, createTaskElement, appendTask } from "./taskRender.js";
import { modalListenerOpen, modalListenerClose, modalTaskListener } from "./modalManager.js";
import { 
    modalOpen, modalClose, addTaskBtn, addTaskModal, mobileTaskBtn, closeTaskModal,
    createTask, titleInput2, descriptionInput2, statusInput2 
} from "./dom.js";

let tasks = loadTasks();

if (!tasks.length){
  tasks = initialTasks;
  storeTasks(tasks);
};

renderTasks(tasks);

function clearTextField() {
  titleInput2.value = "";
  descriptionInput2.value = "";
}

createTask.addEventListener("click", () => {
  let id = tasks.length + 1;
  const newTask = {
    id: id,
    title: titleInput2.value,
    description: descriptionInput2.value,
    status: statusInput2.value
  }
  tasks.push(newTask)
  storeTasks(tasks);

  const displayTask = createTaskElement(newTask)
  appendTask(displayTask, newTask.status)
  modalTaskListener(displayTask, newTask);

  clearTextField();
})

//click listener so the Task modal closes.
modalListenerClose(modalClose, modalOpen)

//click listener so the ADD TASK modal open.
modalListenerOpen(addTaskBtn, addTaskModal)

//click listener so the ADD TASK modal closes.
modalListenerClose(closeTaskModal, addTaskModal)

//click listener so the ADD TASK modal open for mobile.
modalListenerOpen(mobileTaskBtn, addTaskModal)






////////////////////////////////////////////////////////////////////////////////////////////////
/**RENDERS HARDCODED ARRAY**/
// /**Main task rendering loop**/
// for(const task of initialTasks){ //Loop through all tasks.
//   const divTask = createTaskElement(task);
//   appendTask(divTask, task.status)

// //click listener so the modal opens with the task's details when clicked.
//   divTask.addEventListener("click", () => {
//   modalOpen.classList.add("display-modal");
//   titleInput.value = task.title;
//   descriptionInput.value = task.description;
//   statusInput.value = task.status;
// })
// }