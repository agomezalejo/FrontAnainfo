import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import { useState } from "react"
import ModalCreate from "@/components/modalCreate"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [modalOpen, setmodalOpen] = useState(false)

  return (
    <>
      <div className="flex h-full flex-col justify-center items-center bg-white gap-5">
        <button className="p-10 text-center border border-2 border-gray-400 rounded-md w-1/6 shadow-lg shadow-gray-900 font-mono font-semibold hover:scale-105 text-xl" onClick={() => {
          setmodalOpen(true)
        }}>
          Crear Proyecto
        </button>
        <button className="p-10 text-center border border-2 border-gray-400 rounded-md w-1/6 shadow-lg shadow-gray-900 font-mono font-semibold hover:scale-105 text-xl">
          <Link href="projects">
            Ver Proyectos
          </Link>
        </button>
      </div>
      {
        modalOpen ?
          (
            <ModalCreate modalOpen={modalOpen} setModalOpen={setmodalOpen} list={[]} />

          )
          :
          <></>

      }
    </>
  )
}
