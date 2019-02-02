function createTodoItem(title) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className;

  const label = document.createElement('label');
  label.innerText = addInput.value;
  label.className = 'title';

  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'textField';

  const editButton = document.createElement('button');
  editButton.innerText = 'Изменить';
  editButton.className = 'edit';

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Удалить';
  deleteButton.className = 'delete';

  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  console.log(listItem);
  return listItem;
}

function addTodoItem(event) {
  event.preventDefault();

  if (addInput.value === '') return alert('Need wr!');

  const todoItem = createTodoItem(addInput.value);
  todoList.appendChild(todoItem);
  addInput.value = '';
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelector('.todo-item');

todoForm.addEventListener('submit', addTodoItem)