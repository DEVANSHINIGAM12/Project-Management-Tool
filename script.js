let projects = [];

function createProject() {
    const projectNameInput = document.getElementById('projectName');
    const projectName = projectNameInput.value.trim();

    if (projectName === '') {
        alert('Please enter a project name');
        return;
    }

    const newProject = {
        id: projects.length + 1,
        name: projectName,
        tasks: []
    };

    projects.push(newProject);
    displayProjects();
    projectNameInput.value = '';
}

function displayProjects() {
    const projectListContainer = document.getElementById('projectList');
    projectListContainer.innerHTML = '';

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectName = document.createElement('h3');
        projectName.textContent = project.name;

        const taskList = document.createElement('ul');
        project.tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.description;
            taskList.appendChild(taskItem);
        });

        const addTaskInput = document.createElement('input');
        addTaskInput.type = 'text';
        addTaskInput.placeholder = 'Enter task description';

        const addTaskButton = document.createElement('button');
        addTaskButton.textContent = 'Add Task';
        addTaskButton.onclick = () => {
            const description = addTaskInput.value.trim();
            if (description !== '') {
                project.tasks.push({ description });
                displayProjects();
                addTaskInput.value = '';
            }
        };

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(taskList);
        projectDiv.appendChild(addTaskInput);
        projectDiv.appendChild(addTaskButton);

        projectListContainer.appendChild(projectDiv);
    });
}

