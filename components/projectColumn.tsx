import { useState } from "react";
import tasksExamples from "../data/tasksExamples.json";
import ModalCreateTask from "./modalCreateTask";
import Task from "./task";
import { TaskProps } from "./types";

export default function ProjectColumn() {

    const [modalOpen, setModalOpen] = useState(false);

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

    const showModal = () => {
        if (modalOpen) {
            return <ModalCreateTask modalOpen setModalOpen={setModalOpen} list={[]} />
        }
        return <></>
    }

    return (
        <>
            <div className="h-auto w-auto shadow-lg flex-grow flex flex-col relative bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-md">
                {/* Titulo  */}

                <div>
                    <h1 className="text-2xl font-semibold p-3 w-50 text-white bg-gray-800 rounded-md ">Tareas</h1>
                </div>

                {/* Lista de tareas */}

                <div className="pb-12 max-h-21">

                    {renderTasks(getRandomTasks(5))}

                </div>

            </div>

            {showModal()}

        </>

    )
}