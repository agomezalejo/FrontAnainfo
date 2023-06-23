import { Usuario } from "@/pages/types"

export interface ISidebarItem {
  href: string
  title: string
  children?: ISidebarItem[]
}

export interface ModalProps {
  modalOpen: boolean
  setModalOpen: (x: boolean) => void
  list: Usuario[]
}

export interface ProjectInfoProps {
  project: {
    id: number;
    nombre: string;
    cliente: string;
    fechaInicio: string;
    fechaEstimadaFinalizacion: string;
    estado: string;
  }
}

export interface ProjectProps {
  id: number;
  nombre: string;
  columnas: ColumnProps[];
}


export interface TaskProps {
  task: {
    id: number;
    descripcion: string;
    estado: string;
  }
}

export interface ColumnProps {
  id: number;
  nombre: string;
  tareas: TaskProps[];
}