document.addEventListener("DOMContentLoaded", () => {
	const addButton = document.getElementById("add-todo");
	const inputField = document.getElementById("todo-input");
	const todoList = document.getElementById("todo-list");

	// 페이지 로드 시 To-do 리스트 로드
	loadTodos();

	addButton.addEventListener("click", function () {
		// 사용자 입력값 투두 리스트 항목 추가
		const todoText = inputField.value.trim();
		if (todoText !== "") {
			addTodo(todoText);
			saveTodos();

			inputField.value = "";
		}
	});

	inputField.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			addButton.click();
		}
	});

	function addTodo(todoText) {
		const listItem = document.createElement("li");
		listItem.textContent = todoText;

		// 삭제 버튼 추가
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.onclick = function () {
			listItem.remove();
			saveTodos(); // 항목을 삭제할 때도 변경사항 저장
		};

		listItem.appendChild(deleteButton);
		todoList.appendChild(listItem);
	}

	// local Storage에서 To-do 리스트 로드
	function loadTodos() {
		const todos = JSON.parse(localStorage.getItem("todos")) || [];
		todos.forEach((todoText) => {
			addTodo(todoText);
		});
	}

	// local Storage에 To-do 리스트 저장
	function saveTodos() {
		const todos = [];
		document.querySelectorAll("#todo-list li").forEach((item) => {
			const todoText = item.textContent.replace("Delete", "").trim();
			todos.push(todoText);
		});
		localStorage.setItem("todos", JSON.stringify(todos));
	}
});
