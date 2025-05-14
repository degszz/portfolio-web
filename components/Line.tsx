export default function Line() {
    return (
        <>
            <div >
                <div className="w-full flex justify-center py-4" >
                    <div
                        className="flex justify-start max-w-[350px] md:w-full md:min-w-[450px] lg:max-w-[750px]">
                        <div
                            className="border-2 border-t-0 border-b-0 border-r-0 z-40 border-white md:mx-0 pb-6 space-y-10"
                        >
                            <div className="relative">
                                <div
                                    className="absolute -left-3 bg-white h-6 w-6 rounded-full border-2 border-black"
                                >
                                    <span
                                        className="text-black text-center flex justify-center items-center h-full w-full"
                                    >
                                        <b>1</b>
                                    </span>
                                </div>
                                <div className="pl-6">
                                    <h2 className="text-sans text-xl dark:text-white mb-2">
                                        <b>📚 Certificados:</b>
                                    </h2>
                                    <span className="dark:text-white text-md text-serif"
                                    >Soy un Desarrollador Autodidacta,  <b className="text-[#006092]">Certificado en Python y Scraping de Datos con Python.</b>
                                    </span>
                                    <div>
                                        <ul className="style-none list-disc text-md text-serif dark:text-white">
                                            <li className="group hover:text-[#006092] hover:cursor-pointer w-fit group underline pt-4">
                                                <a className="" href="https://certificados.midudev.com/5e905990-1eab-4b65-a864-5d6ddd975851.pdf" target="_blank"><b>➱ Certificado Python </b></a>
                                            </li>
                                            <li className="hover:text-[#006092] hover:cursor-pointer w-fit group underline pt-4">
                                                <a className="" href="https://certificados.midudev.com/55a12f17-0bf1-4fae-ab6c-d63077b2ba36.pdf" target="_blank"><b>➱ Certificado Scraping con Python </b></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div
                                    className="absolute -left-3 bg-white h-6 w-6 rounded-full border-2 border-black"
                                >
                                    <span
                                        className=" text-center text-black flex justify-center items-center border-black h-full w-full"
                                    >
                                        <b>2</b>
                                    </span>
                                </div>
                                <div className="pl-6">
                                    <h2 className="text-sans text-xl  mb-2">
                                        <b>👨🏼‍💻 Lenguajes & Frameworks:</b>
                                    </h2>
                                    <span className=" text-md text-serif"
                                    >Con Experiencia en Lenguajes como <b className="text-[#006092]">Javascript, Typescript y Python</b>, Con Conocimientos en Frameworks como <b className="text-[#006092]">React, Nextjs, Astro, Tailwind, Shadcn, y mas.</b> </span>
                                    <div></div>
                                </div>
                            </div>

                            <div className="relative">
                                <div
                                    className="absolute -left-3 bg-white h-6 w-6 rounded-full border-2 border-black"
                                >
                                    <span
                                        className=" text-center text-black flex justify-center items-center h-full w-full"
                                    >
                                        <b>3</b>
                                    </span>
                                </div>
                                <div className="pl-6">
                                    <h2 className="text-sans text-xl  mb-2">
                                        <b>🛠️ Experiencia Laboral:</b>
                                    </h2>
                                    <span className=" text-md text-serif"
                                    >Con los Conocimientos Necesarios Para <b className="text-[#006092]">Mi Primer Trabajo Laboral</b> </span>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}