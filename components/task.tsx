import { TaskProps } from "./types";


export default function Task({ task }: any) {

    const renderState = () => {
        if (task.estado == 'completada')
            return (
                <span className="bg-green-600 text-white text-grey-800 h-auto text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-2 border-green-800">
                    {task.estado}
                </span>)

        if (task.estado == "en progreso")
            return (
                <span className="bg-yellow-400 text-black text-grey-800 h-auto text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-2 border-yellow-600">
                    {task.estado}
                </span>
            )

        if (task.estado == "no iniciada")
            return (
                <span className="bg-red-400 text-white text-grey-800 h-auto text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-2 border-red-800">
                    {task.estado}
                </span>
            )
    }


    return (
        <div key={task.id} className="m-2 border rounded dark:bg-gray-900 dark:border-gray-700">
            <div className="flex flex-col justify-between">
                <div className="w-full flex flex-row justify-between items-center p-2">
                    <h1 className="text-l text-center text-white font-bold"> Tarea {task.id} </h1>

                    {renderState()}

                </div>
                <hr className="border-gray-700" />
                <span className="text-sm p-2 text-white">{task.descripcion}</span>
            </div>
        </div>
    )
}