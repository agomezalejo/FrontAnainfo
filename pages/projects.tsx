import Modal from "@/components/modal";
import ModalCreate from "@/components/modalCreate";
import ProjectGridRow from "@/components/projectGridRow";
import { useState } from "react";
import projectExamples from "../data/projectExamples.json"


export default function TableProjets() {
    const [modalOpen, setmodalOpen] = useState(false)

    const renderProjects = () => {

        let htmlReturn = []

        for (let project of projectExamples) {
            htmlReturn.push(<ProjectGridRow key={project.id} project={project} />)
        }

        return htmlReturn
    }

    const showModal = () => {
        if (modalOpen) {
            return <ModalCreate modalOpen={modalOpen} setModalOpen={setmodalOpen} list={[]} />
        }
        return <></>
    }

    return (
        <>
            <div className="relative overflow-x-auto  sm:rounded-lg container max-w-7xl mx-auto mt-8 flex flex-col text-black">
                <h1 className="text-3xl my-5 ml-3 font-bold">
                    Lista de Proyectos
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre del Proyecto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cliente
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha de Inicio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha de finalizacion estimada
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accion
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderProjects()}
                    </tbody>
                </table>
                <button
                    className=" p-3 bg-green-600 rounded-lg  border boder-2 border-gray-900 w-20 h-12 self-end m-3 hover:bg-gray-200 shadow-md shadow-gray-900"
                    onClick={() => { setmodalOpen(true) }}
                >
                    Crear
                </button>
            </div>

            {showModal()}
        </>
    )
}