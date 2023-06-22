import Modal from "@/components/modal";
import ModalCreate from "@/components/modalCreate";
import { useState } from "react";

export default function TableProjets() {
    const [modalOpen, setmodalOpen] = useState(false)

    return (
        <>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container max-w-7xl mx-auto mt-8 flex flex-col">
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
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                Activo
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Abrir</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className=" p-3  border boder-2 border-gray-900 rounded-sm self-end m-3 hover:bg-gray-200 shadow-md shadow-gray-900"
                onClick={() => {
                    setmodalOpen(true)
                  }}
                  >Crear</button>
            </div>
            {
                modalOpen?
                (
                    <ModalCreate modalOpen={modalOpen} setModalOpen={setmodalOpen} list={[]}/>

                ) 
                :
                <></>

            }

        </>
    )
}