import Link from "next/link"
import { useRouter } from "next/router"
import SideBarItem from "./SidebarItem"
import { ISidebarItem } from "./types"
import Navbar from "./NavBar"
import Footer from "./Footer"

export default function Layout({ children }: { children: any }) {
  const menuItems: ISidebarItem[] = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/clientes",
      title: "Clientes",
    },
    {
      href: "/usuarios",
      title: "Usuarios",
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white justify-between">
      <Navbar/>
      <div className="flex flex-col md:flex-row flex-1">
        <main className="flex-1">{children}</main>
      </div>
      <Footer/>
    </div>
  )
}
