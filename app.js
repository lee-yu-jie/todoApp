const taskForm = document.querySelector('Form')
const taskInput = document.querySelector('#taskInput')
const closeBtn = document.querySelectorAll('.closeBtn')
const taskList = document.querySelector('.todo-list')
const tasks = document.querySelectorAll('.todo-item')

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if(taskInput.value === ''){
        alert('不可空白')
    }else{
        const task = `<li class="todo-item">
        <span class="item">${taskInput.value}</span>
        <button class="closeBtn"><i class="fa-solid fa-trash"></i></button></li>`
        taskList.insertAdjacentHTML('afterbegin', task)
        taskInput.value=''
        window.localStorage.setItem('task', task);
    }
})

taskList.addEventListener('click', (e) => {
    if (e.target.nodeName === 'I'){
            const removeItem = e.target.parentElement.parentElement
            removeItem.classList.add('fall')
            removeItem.addEventListener('transitionend', () => {
                removeItem.remove()
            })
        }
})




