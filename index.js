const todoInput = document.getElementById("todo-input");
const todo = document.getElementById("todo-box");
const submitBtn = document.getElementById("todo-submit");

let todoList = [];

function loadStorage() {
	const storedTodo = localStorage.getItem("TODO");
	if (storedTodo != null) {
		const myTodoList = JSON.parse(storedTodo);
		myTodoList.forEach((todo) => {
			const { text } = todo;
			const { checked } = todo;
			printTodo(text, checked);
			storedTodo(text, checked);
		});
	}
}

function createList(e) {
	e.preventDefault();
	const todoValue = todoInput.value;
	if (todoValue == "") alert("할 일을 입력해주세요.");
	else {
		printTodo(todoValue, 0); // 0 = checked 값
		storeTodo(todoValue, 0);
		todoInput.value = "";
	}
}

function storeTodo(todoValue, checkValue) {
	const todoListObj = {
		text: todoValue,
		id: todoList.length + 1,
		checked: checkValue,
	};
	todoList.push(todoListObj);
	localStorage.setItem("TODO", JSON.stringify(todoList));
}

function setting() {
	loadStorage();
	submitBtn.addEventListener("click", createList);
}
setting();
