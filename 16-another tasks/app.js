/*
Возьмите объект из предыдущего домашнего задания и
последовательно примените все методы его на новый объект:

const newTask {
    tasks: [{ 
id: 1, 
name: ‘тест’, 
description: ‘описание’,
order: 0
}];
}
*/
'use strict'

const toDoList = (function () {
    let idCounter = 1;
    return {
        tasks: [
            {
                title: 'Помыть посуду',
                id: 1,
                priority: 1
            }
        ],
        addTask(title, priority) {
            this.tasks.push({
                title,
                priority,
                id: ++idCounter
            });
        },
        
        removeTaskById(id) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        },

        updateTaskById(id, newTitle, newPriority) {
            const task = this.tasks.find(task => task.id === id);
            if (!task) {
                return;
            } if (newTitle !== undefined) {
                task.title = newTitle;
            }
            if (newPriority !== undefined) {
                task.priority = newPriority;
            }

        },

        sortByPriority() {
            this.tasks.sort((a, b) => a.priority - b.priority);
        }
    };

}) ();


toDoList.addTask('Сделать домашнее задание', 2);
toDoList.addTask('Погулять', 3);
toDoList.sortByPriority();
toDoList.updateTaskById(2, 'Сделать ДЗ', 3);
toDoList.removeTaskById(3);
console.log(toDoList.tasks);

const newTask = {
    tasks: [{ 
        id: 1, 
        name: 'тест', 
        description: 'описание',
        order: 0
    }]
}
const addNewTask = toDoList.addTask.bind(newTask);
const sortNewTask = toDoList.sortByPriority.bind(newTask);
const updateNewTask = toDoList.updateTaskById.bind(newTask);
const removeNewTask = toDoList.removeTaskById.bind(newTask);

addNewTask('test2', 3);
sortNewTask();
updateNewTask(4, 'Повторить теорию Дарвина', 2);
removeNewTask(4);
console.log(newTask.tasks);