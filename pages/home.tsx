import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import { useState } from "react"
import ModalCreate from "@/components/modalCreate"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [modalOpen, setmodalOpen] = useState(false)

  const showModal = () => {
    if (modalOpen) {
      return <ModalCreate modalOpen={modalOpen} setModalOpen={setmodalOpen} list={[]} />
    }
    return <></>
  }

  return (
    <>
      <div className="flex h-full flex-col justify-center items-center  gap-5 ">
        <button
          className="bg-green-600 p-10 text-center border border-gray-400 rounded-lg w-1/6 shadow-lg shadow-gray-900 font-mono font-semibold hover:scale-105 text-xl"
          onClick={() => { setmodalOpen(true) }}
        >
          Crear Proyecto
        </button>
        <Link href="/projects">
          <button className="bg-gray-200 text-black w-auto p-10 text-center border  border-gray-400 rounded-md shadow-lg shadow-gray-900 font-mono font-semibold hover:scale-105 text-xl">
            Ver Proyectos
          </button>
        </Link>
      </div>

      {showModal()}

    </>
  )
}
