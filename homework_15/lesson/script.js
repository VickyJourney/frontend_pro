const form = document.querySelector('form');
const userNameInput = document.querySelector('#user-name-input');
const tbody = document.querySelector('tbody');
const editInput = document.querySelector('#edit-user input');
const editButton = document.querySelector('#edit-user button');
const editForm = document.querySelector('#edit-user');

window.addEventListener('load', initTable);

function initTable() {
  const users = localStorage.getItem('users');

  if(users) {
    JSON.parse(users).forEach(user => buildRow(user.name, user.uuid))
  }
}

function buildRow(name, uuid) {
  const tr = document.createElement('tr');

  tr.setAttribute('data-uuid', uuid);

  const td = document.createElement('td');
  td.textContent = name;

  tr.append(td);
  tr.append(buildTdButton('View', 'view'))
  tr.append(buildTdButton('Edit', 'edit'))
  tr.append(buildTdButton('Delete', 'delete'))

  tbody.append(tr);
}

function buildTdButton(textButton, textAttribute) {
  const td = document.createElement('td');
  const button = document.createElement('button');
  button.setAttribute('data-name', textAttribute);
  button.textContent = textButton;

  td.append(button)

  return td;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = userNameInput.value || 'Unknown user';
  const uuid = +new Date();

  buildRow(value, uuid);

  const usersFromLocalStorage = localStorage.getItem('users');
  localStorage.setItem(
    'users',
    usersFromLocalStorage
      ? JSON.stringify([...JSON.parse(usersFromLocalStorage), { name: value, uuid: uuid }])
      : JSON.stringify([{ name: value, uuid: uuid }])
  )

  form.reset();
})

tbody.addEventListener('click', (event) => {
  const targetButton = event.target.getAttribute('data-name');
  const targetRow =  event.target.closest('tr');
  const targetRowUuid = targetRow.getAttribute('data-uuid');

  switch(targetButton) {
    case 'view':
      console.log('User:', targetRow.querySelector('td').textContent);
      break;
    case 'edit':
      editInput.removeAttribute('disabled');
      editButton.removeAttribute('disabled');
      editInput.focus();
      editInput.value = targetRow.querySelector('td').textContent;

      localStorage.setItem('data-uuid', targetRowUuid);
      break;
    case 'delete':
      targetRow.remove();
      break;
    default:
      break;
  }
})

editForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const editName = editInput.value;
  const uuid = localStorage.getItem('data-uuid');

  document.querySelector(`tr[data-uuid="${uuid}"] td`).textContent = editName;

  localStorage.removeItem('data-uuid');
  editInput.setAttribute('disabled', true);
  editButton.setAttribute('disabled', true);
  editForm.reset();
})