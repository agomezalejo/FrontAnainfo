import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <button className="p-10 text-center border border-2 border-black-500 rounded-md">Crear Proyecto</button>
      <button>Ver Proyectos</button>
    </div>
  )
}
