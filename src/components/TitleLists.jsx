import { useState } from 'react';

//lista di titoli
const initialTasks = ['titolo 1', 'titolo 2', 'titolo 3']


export default function TitleLists() {

    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');

    return (
        <div>
            <h2>Lista Titoli</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}