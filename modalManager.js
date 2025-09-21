import { modalOpen, titleInput, descriptionInput, statusInput } from "./dom.js";

export function modalListenerOpen(openBtn, modal){
    openBtn.addEventListener("click", () => {
        modal.classList.add("display-modal")
    })
}
export function modalListenerClose(closeBtn, modal){
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("display-modal")
    })
}

//click listener so the modal opens with the task's details when clicked.
export function modalTaskListener(divTask, task){
    divTask.addEventListener("click", () => {
        modalOpen.classList.add("display-modal");
        titleInput.value = task.title;
        descriptionInput.value = task.description;
        statusInput.value = task.status;
    });
}

//click listener so the modal closes.
// modalClose.addEventListener("click", () => {
//   modalOpen.classList.remove("display-modal")
// })

// //click listener so the add task modal open.
// addTaskBtn.addEventListener("click", () => {
//   addTaskModal.classList.add("display-modal")
// })

// //click listener so the modal closes.
// closeTaskModal.addEventListener("click", () => {
//   addTaskModal.classList.remove("display-modal")
// })