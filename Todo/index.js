let todoRootEl = document.getElementById("todoRoot");
let userInputEl = document.getElementById("userInput");



let todoList = [
    {
        title: "HTML",
        id: 1
    },
    {
        title: "CSS",
        id: 2
    },
    {
        title: "Bootstrap",
        id: 3
    }
]



function onStatusChange(checkboxId, titleId) {

    let checkBoxEl = document.getElementById(checkboxId);
    let titleEl = document.getElementById(titleId);

    if (checkBoxEl.checked == true) {

        titleEl.classList.add("checked");

    }
    else {

        titleEl.classList.remove("checked");

    }
}



function onDeleteTodo(todoId){
    let myTodo = document.getElementById(todoId);
    todoRootEl.removeChild(myTodo);
    let newId = parseInt(todoId.slice(4));
    let index = todoList.findIndex((each)=> each.id === newId);
    todoList.splice(index,1);
}



function createAndAppendTodo(todo) {

    let checkboxId = "checkbox" + todo.id;
    let titleId = "title" + todo.id;
    let todoId = "todo" + todo.id;

    let listCont = document.createElement("li");
    listCont.classList.add("todo-list-cont");
    listCont.id = todoId;
    todoRootEl.appendChild(listCont);

    let checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox";
    checkBoxEl.id = checkboxId;
    checkBoxEl.onclick = function() {
        onStatusChange(checkboxId, titleId);
    }
    listCont.appendChild(checkBoxEl);

    console.log(checkBoxEl);

    let labelEl = document.createElement("label");
    labelEl.classList.add("label-cont");
    labelEl.htmlFor = checkboxId;
    listCont.appendChild(labelEl);

    let titleEl = document.createElement("h4");
    titleEl.textContent = todo.title;
    titleEl.id = titleId;
    labelEl.appendChild(titleEl);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        onDeleteTodo(todoId);
    }
    labelEl.appendChild(deleteBtn);

    let trashIconEl = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-trash");
    deleteBtn.appendChild(trashIconEl);

}



for (each of todoList) {

    createAndAppendTodo(each);

}



function onAddTodo() {

    console.log(userInputEl.value);
    if (userInputEl.value == "") {
        alert("Please enter a todo");
        return;
    }else{
        let newTodo = {
            title: userInputEl.value,
            id: todoList.length + 1
        }

        createAndAppendTodo(newTodo);
        todoList.push(newTodo);

        console.log(todoList);
    }

}