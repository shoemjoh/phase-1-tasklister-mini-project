document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    addTask(e.target.newtaskdescription.value)
    document.querySelector('form').reset();
  })
});

function addTask(task) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${task} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}