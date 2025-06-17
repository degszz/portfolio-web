import Hero from "@/components/Hero"

export default function Home() {
  return (
    <>

      <div className="w-full flex flex-col justify-center items-center h-full text-white">

        <Hero />

        <div id="PRO"></div>
        <div className="w-full text-center md:text-start mb-4">
          <h3
            className=" underline text-xl"
          >
            <b>Mis Proyectos:</b>
          </h3>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-2 w-full max-w-[350px] md:max-w-[450px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]">
          <a href="https://helpful-basbousa-eca252.netlify.app/" target="_blank" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-[#25252c] via-[#434450] to-[#4a4b5a]
          border border-[#5b5d6e]
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-2 p-7 min-h-[180px]
        ">
            <span
              className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform z-20">Design System</span>

            <img
              className="absolute -right-4 -bottom-4 -rotate-6 size-28 md:size-40 z-10 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
              width="100" height="100" src="/puzzle.avif">
            </img>

            <span className="absolute top-2 left-4 text-xs border rounded-xl px-1 py-0.5">+8 Componentes para Usar</span>
          </a>

          <a href="https://midu.link/html" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-html via-[#d1d1d1] to-[#4f4f4f]
          border border-html
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-1 p-7 min-h-[180px]
        ">
            <span
              className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform z-20">Web Food</span>

            <img
              className="absolute -right-4 -bottom-4 -rotate-6 size-28 md:size-40 z-10 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
              width="100" height="100" src="/3d.avif">
            </img>

            <span className="absolute top-2 left-1.5 md:left-4 text-xs border rounded-xl px-1 py-0.5">Proximamente</span>
          </a>

          {/* 
          <a href="https://midu.link/html" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-html via-orange-300 to-white
          border border-html
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-1 p-7 min-h-[180px]
        ">
            <span
              className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform">Food Web</span>

            <svg
              className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
              width="100" height="100">

            </svg>

            <span className="absolute top-2 left-1.5 md:left-4 text-xs border rounded-xl px-1 py-0.5">Web para Pedir Comida</span>
          </a>
          <a href="https://midu.link/html" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-[#663399] via-[#8e44ad] to-white
          border border-[#663399]
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-1 p-7 min-h-[180px]
        ">
            <span
              className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform"></span>

            <svg
              className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
              width="100" height="100">

            </svg>

            <span className="absolute top-2 left-4 text-xs border rounded-xl px-1 py-0.5">Para principiantes</span>
          </a>

          <a href="https://cursoreact.dev" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-[#215732] via-[#3C873A] to-[#8CC84B]
          border border-[#215732]
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-2 p-7 min-h-[180px]
        ">
            <span
              className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform">Node.js</span>

            <svg
              className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
              width="100" height="100">

            </svg>

            <span className="absolute top-2 left-4 text-xs border rounded-xl px-1 py-0.5">Curso de +14 clases</span>
          </a> */}
        </div>
        <br />
      </div>
    </>
  );
}
