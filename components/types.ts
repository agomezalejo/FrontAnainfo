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

export interface ProjectProps {
  project: {
    id: number;
    nombre: string;
    cliente: string;
    fechaInicio: string;
    fechaEstimadaFinalizacion: string;
    estado: string;
  }
}
