// Seleciona os elementos do DOM
const taskInput = document.getElementById('taskInput');
const taskTime = document.getElementById('taskTime');
const addTaskButton = document.getElementById('addTaskButton');
const clearCompletedButton = document.getElementById('clearCompletedButton');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');

// Adiciona o evento de clique ao botão "Adicionar"
addTaskButton.addEventListener('click', () => {
    // Captura o texto do campo de entrada
    const taskText = taskInput.value.trim();
    const taskTimeValue = taskTime.value;

    // Verifica se o campo de entrada está vazio
    if (taskText === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    // Cria um novo elemento <li>
    const listItem = document.createElement('li');

    // Adiciona a checkbox ao <li>
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    listItem.appendChild(checkBox);

    // Adiciona o texto da tarefa
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    listItem.appendChild(taskContent);

    // Adiciona o horário da tarefa (se especificado)
    if (taskTimeValue) {
        const taskTimeElement = document.createElement('span');
        taskTimeElement.textContent = ` - ${taskTimeValue}`;
        taskTimeElement.style.color = 'gray';
        taskTimeElement.style.fontSize = '0.9em';
        taskTimeElement.style.marginLeft = '10px';
        listItem.appendChild(taskTimeElement);
    }

    // Adiciona o evento para mover a tarefa para "Tarefas Concluídas"
    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            listItem.classList.add('completed');
            completedTaskList.appendChild(listItem);
        } else {
            listItem.classList.remove('completed');
            taskList.appendChild(listItem);
        }
    });

    // Adiciona o item à lista de tarefas pendentes
    taskList.appendChild(listItem);

    // Limpa os campos de entrada
    taskInput.value = '';
    taskTime.value = '';
});

// Remove todas as tarefas concluídas
clearCompletedButton.addEventListener('click', () => {
    completedTaskList.innerHTML = '';
});