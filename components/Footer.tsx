
export default function Footer() {
    return (
        <>

            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Home</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Soporte</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Proyectos</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Recursos</a>
                    </li>
                </ul>
            </footer>

        </>
    )
}