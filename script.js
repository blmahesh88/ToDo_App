function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        li.style.textDecoration = this.checked ? "line-through" : "none";
    };

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + task + " "));
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}