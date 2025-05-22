document.addEventListener('DOMContentLoaded', () => {
  const api = 'http://localhost:3000/users';

  async function fetchUsers() {
    const res = await fetch(api);
    const users = await res.json();
    const list = document.getElementById('userList');
    list.innerHTML = '';
    users.forEach(u => {
      const li = document.createElement('li');
      li.textContent = `${u.name} (${u.email})`;
      li.innerHTML += ` <button onclick="editUser(${u.id},'${u.name}','${u.email}')">Editar</button>
        <button onclick="deleteUser(${u.id})">Excluir</button>`;
      list.appendChild(li);
    });
  }

  async function createOrUpdateUser(e) {
    e.preventDefault();
    const id = document.getElementById('userId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${api}/${id}` : api;
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    document.getElementById('userForm').reset();
    fetchUsers();
  }

  window.editUser = function(id, name, email) {
    document.getElementById('userId').value = id;
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
  }

  window.deleteUser = async function(id) {
    await fetch(`${api}/${id}`, { method: 'DELETE' });
    fetchUsers();
  }

  document.getElementById('userForm').addEventListener('submit', createOrUpdateUser);
  fetchUsers();
});