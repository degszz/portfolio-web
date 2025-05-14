import Line from "@/components/Line"



export default function Hero() {
    return (
        <>
            <div className="flex justify-center h-full pt-[51px] lg:pt-[60px]  ">

                <div
                    className="max-w-[350px] md:max-w-[450px] lg:min-w-[750px] lg:max-w-[750px] py-8 flex flex-col justify-center sm:justify-center items-center z-10"
                >
                    <div className="flex justify-start w-full">
                        <img src="/yo.png" className="w-[70px] h-[70px] rounded-full shadow-xl" alt="yo" />
                    </div>
                    <div className="h-fit w-full mx-4 text-start  flex-col">
                        <div className="my-2.5">
                            <h1 className="text-3xl underline">
                                <b>Hey! soy Maximo </b>
                            </h1>
                            <p
                                className="text-xl max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]"
                            >
                                +2 años de experiencia. <b className="text-kai-button"
                                >Developer ux/ui
                                </b>  de Buenos Aires, Argentina. Especializado en el desarrollo
                                de aplicaciones web únicas.
                            </p>
                        </div>
                        <div className="flex maw-w-[400px] z-50">

                            <a href="https://www.linkedin.com/in/maximo-figuera-531231323/" target="_blank" className="flex text-sm mr-2 mb-2 px-4 py-2 z-50 text-black font-medium text-center justify-center  items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer bg-white hover:text-black hover:scale-110 hover:shadow-lg hover:opacity-100 dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin group"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"></path><path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                                    ></path><path d="M8 11l0 5"></path><path
                                        d="M8 8l0 .01"></path><path d="M12 16l0 -5"
                                        ></path><path d="M16 16v-3a2 2 0 0 0 -4 0"
                                        ></path></svg>
                                <div className="flex items-center"><span className="">Linkedin</span></div>
                            </a>

                            <a href="https://github.com/degszz" className="flex text-sm mr-2 mb-2 px-4 py-2 text-black font-medium text-center justify-center items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer bg-white hover:text-black  hover:scale-110 hover:shadow-lg hover:opacity-100  dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                <div className="flex items-center"><span className="">Github</span></div>
                            </a>

                            <a href="https://www.instagram.com/z3maxi/" className="flex text-sm mr-2 mb-2 px-4 py-2 text-black font-medium text-center justify-center items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer bg-white hover:text-black  hover:scale-110 hover:shadow-lg hover:opacity-100 dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                                <div className="flex items-center"><span className="flex ">Instagram</span></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div id="EXP" className="pt-6"></div>
                <br />
                <Line />
            </div>
        </>
    )
}