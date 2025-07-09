const form = document.getElementById('form');
const list = document.getElementById('list');
const name = form.name;
const phone = form.phone;
const email = form.email;

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function saveAndRender() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
  list.innerHTML = contacts.map((c, i) => `
    <li>
      <div>
        <span><strong>${c.name}</strong></span>
        <span>📞 ${c.phone}</span>
        <span>✉️ ${c.email}</span>
      </div>
      <button onclick="remove(${i})">🗑</button>
    </li>
  `).join('');
}

function remove(index) {
  contacts.splice(index, 1);
  saveAndRender();
}

form.onsubmit = e => {
  e.preventDefault();
  contacts.push({ name: name.value, phone: phone.value, email: email.value });
  form.reset();
  saveAndRender();
};

saveAndRender();
