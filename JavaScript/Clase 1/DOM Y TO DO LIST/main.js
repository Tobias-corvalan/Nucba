const input = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const tasksList = document.querySelector('.tasks-list');
const deleteAllBtn = document.querySelector('.deleteAll-btn');


/*

forma de agregar un item en html
const unItem = document.createElement("li");
unItem.textContent = "5";

tasksList.append(unItem)
*/
let ID = 1;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveLocalStorage = ((todoList) =>{
    localStorage.setItem("tasks",JSON.stringify(todoList));//guarda los items en localstorage por si salis que los muestre
})

const createHTMLTask = ({ id, name }) => `<li>${name} <img class="delete-btn" src="./img/delete.svg" alt="botón de borrar" data-id="${id}" /></li>`

const renderTasksList = (tasks = []) => {

    const allTasks = tasks.map((task) => createHTMLTask(task)).join('')//hace un mapeo con cada li y el join va separando el array

    console.log(allTasks)


    tasksList.innerHTML = allTasks //muestra por web lo hecho anteriormente

}


const addTask = (e) => {
    e.preventDefault();
    const taskName = input.value
    const newTask = {
        id: ID,
        name: taskName
    }
    console.log('New Task: ', newTask)

    // tasks.push(newTask)//una forma de guardar cada tarea
    tasks = [
        ...tasks,
        newTask
    ]//otra forma de agregar cada tarea
    ID++;
    input.value = '';//esto es para que el valor del input vuelva a estar vacio
    console.log(tasks)

    renderTasksList(tasks)
    hideDeleteAll(tasks);
    saveLocalStorage(tasks);
}

const deleteTask = (event) => {

    
    if(!event.target.classList.contains("delete-btn")){return;}

    const taskID = parseInt(event.target.dataset.id);//de esta forma podemos obtener id del li especifico
    console.log(taskID);
    tasks = tasks.filter(task => task.id !== taskID);
    tasks.forEach(elemento => console.log(elemento));
    
    renderTasksList(tasks);
    hideDeleteAll(tasks);
    saveLocalStorage(tasks);

}

const deleteAll = (event) => {
    
    tasks = [];
    
    renderTasksList(tasks)
    hideDeleteAll(tasks);
    saveLocalStorage(tasks);
}

const hideDeleteAll = todoList => {
    if(todoList.length === 0){
        deleteAllBtn.classList.add("hidden")//agrega la clase y oculta el boton borrar todo
        return;
    }
     deleteAllBtn.classList.remove("hidden")//quita la clase y se muestra el boton borrar todo
    
}


renderTasksList(tasks);
hideDeleteAll(tasks);
addForm.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
deleteAllBtn.addEventListener("click",deleteAll);

//para eliminar espacios en un tipo string haces el input.value.trim();
//parentElement nos permite obtener el contenedor padre de donde estamos parados
