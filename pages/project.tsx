import ProjectColumn from "@/components/projectColumn"


export default function Project() {

    return (
        <>
            <div className="relative mb-20 overflow-x-auto rounded-lg container max-w-9xl overflow-y-scroll mx-auto mt-8 flex flex-col text-black">
                <div>
                    <h1 className="text-3xl my-5 ml-3 font-bold">
                        Projecto
                    </h1>

                </div>

                {/* Tablero */}

                <div className=" grid grid-flow-row auto-cols-auto space-x-2 max-h-full overflow-y-scroll p-5 lg:grid-cols-4">

                    <ProjectColumn />
                    <ProjectColumn />
                    <ProjectColumn />
                    <ProjectColumn />

                </div>
            </div>
        </>
    )
}