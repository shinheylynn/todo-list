document.addEventListener("DOMContentLoaded", () => {
	const addButton = document.getElementById("add-todo");
	const inputField = document.getElementById("todo-input");
	const todoList = document.getElementById("todo-list");

	addButton.addEventListener("click", function () {
		const todoText = inputField.value.trim();
		if (todoText !== "") {
			const listItem = document.createElement("li");
			listItem.textContent = todoText;

			// 삭제 버튼 추가
			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.onclick = function () {
				listItem.remove();
			};

			listItem.appendChild(deleteButton);
			todoList.appendChild(listItem);

			inputField.value = ""; // 입력 필드 초기화
		}
	});

	inputField.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			addButton.click(); // Enter 키로 추가 버튼 활성화
		}
	});
});
