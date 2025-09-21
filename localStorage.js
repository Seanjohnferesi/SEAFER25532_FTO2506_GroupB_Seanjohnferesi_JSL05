//Loads tasks from the localStorage
export function loadTasks(){
    return JSON.parse(localStorage.getItem("initialTasks")) || [] ;
}

export function storeTasks(initialTasks) {
    localStorage.setItem("initialTasks", JSON.stringify(initialTasks));
}
