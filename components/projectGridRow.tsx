import { ProjectProps } from "./types";

export default function ProjectGridRow ({ project }: ProjectProps) {
    return (
        <tr key={project.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {project.nombre}
            </th>
            <td className="px-6 py-4">
                {project.cliente}
            </td>
            <td className="px-6 py-4">
                {project.fechaInicio}
            </td>
            <td className="px-6 py-4">
                {project.fechaEstimadaFinalizacion}
            </td>
            <td className="px-6 py-4">
                {project.estado}
            </td>
            <td className="px-6 py-4">
                <a href="/project" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Abrir</a>
            </td>
        </tr>
    )
}