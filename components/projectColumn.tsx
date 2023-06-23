import tasksExamples from "../data/tasksExamples.json";
import Task from "./task";
import { TaskProps } from "./types";

export default function ProjectColumn() {

    function getRandomTasks(count: number): any[] {
        // Agarra tasks random del json
        const randomTasks: any[] = [];
        const availableTasks = [...tasksExamples];

        for (let i = 0; i < count; i++) {
            if (availableTasks.length === 0) {
                break;
            }

            const randomIndex = Math.floor(Math.random() * availableTasks.length);
            const randomTask = availableTasks.splice(randomIndex, 1)[0];
            randomTasks.push(randomTask);
        }

        return randomTasks;
    }


    const renderTasks = (tasks: TaskProps[]) => {
        const htmlResponse = []

        for (let task of tasks) {
            htmlResponse.push(
                <Task task={task} />
            )
        }

        return htmlResponse
    }

    return (
        <div className="h-auto w-auto shadow-lg flex-grow flex flex-col relative bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-md">
            {/* Titulo  */}

            <div>
                <h1 className="text-2xl font-semibold p-3 w-50 text-white bg-gray-800 rounded-md ">Columna 1</h1>
            </div>

            {/* Lista de tareas */}

            <div className="pb-12 max-h-21">

                {renderTasks(getRandomTasks(5))}

            </div>

            {/* Agregar tarea */}

            <div className="absolute bottom-0 w-full flex justify-end">
                <button
                    type="button"
                    className="text-white  focus:ring-2  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-500"
                > Agregar
                </button>
            </div>

        </div>
    )
}