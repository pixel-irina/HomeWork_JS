/*
Написать объект ToDoList, который хранит в себе задачи { ‘title’: ‘Помыть посуду’, id: 1, priority: 1 } и имеет методы:

Добавить задачу
Удалить задачу по id
Обновить имя или приоритет по Id
Отсортировать задачи по приоритету
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