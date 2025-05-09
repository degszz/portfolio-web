import Hero from "@/components/Hero"
/* import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel" */

/* const array = [
  {
    index: "",
    svg: "",
  },
  {
    index: "",
    svg: "",
  },
  {
    index: "",
    svg: "",
  },
  {
    index: "",
    svg: "",
  },
  {
    index: "",
    svg: "",
  },
] */

export default function Home() {
  return (
    <>

      <div className="w-full flex flex-col justify-center items-center h-full text-white">

        <Hero />



        {/*           <div className="flex justify-center">
            <div className="max-w-[250px]  md:max-w-[450px] lg:min-w-[750px] lg:max-w-[750px] py-6">
              <span className="text-white text-xl underline"><b>Lenguajes/Frameworks</b></span>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/typescript.svg" alt="" />
                          <span className="text-white text-sm font-semibold">Typescript</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/javascript.svg" alt="" />
                          <span className="text-white text-sm font-semibold">Javascript</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="border-0 bg-transparent shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/tailwind.svg" alt="" />
                          <span className="text-white text-sm font-semibold">Tailwind</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/next.svg" alt="" />
                          <span className="text-white text-sm font-semibold">NextJS</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/astro.svg" alt="" />
                          <span className="text-white text-sm font-semibold">Astro</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/react.svg" alt="" />
                          <span className="text-white text-sm font-semibold">React</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>


                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div> */}

        <div className="py-6 w-full flex flex-col items-center max-w-[350px] md:max-w-[450px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]" id="PRO" >

          <div className="w-full text-center md:text-start ">
            <h3
              className=" underline text-xl"
            >
              <b>Mis Proyectos:</b>
            </h3>
          </div>

          <div className="w-full flex flex-col md:flex-row  items-center md:justify-around">

            <div id="PRO" className="border-0 my-4 bg-transparent w-fit h-full rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110 hover:bg-slate-950">
              <a target="_blank" className="flex flex-col bg-transparent text-lg w-full items-center lg:items-start md:items-start  hover:underline text-white" href="https://helpful-basbousa-eca252.netlify.app/">
                <img src="designsystem.png" className="max-h-[150px] max-w-[150px] rounded-xl z-10 hover:rounded-b-none" alt="" />
                Design System
              </a>
            </div>

            <div id="PRO" className="border-0 my-4 bg-transparent w-fit h-full rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110 hover:bg-slate-950">
              <a target="_blank" className="flex flex-col bg-transparent text-lg w-full items-center lg:items-start md:items-start  hover:underline text-white" href="https://helpful-basbousa-eca252.netlify.app/">
                <img src="foodweb.png" className="max-h-[150px] max-w-[150px] rounded-xl z-10 hover:rounded-b-none" alt="" />
                Food Website
              </a>
            </div>


            <div id="PRO" className=" border-0 my-4 bg-transparent w-fit h-full rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110 hover:bg-slate-950">
              <a target="_blank" className=" flex flex-col bg-transparent text-lg w-full items-center lg:items-start md:items-start  hover:underline text-white" href="https://helpful-basbousa-eca252.netlify.app/">
                <img src="foodweb.png" className="max-h-[150px] max-w-[150px] rounded-xl z-10 hover:rounded-b-none blur-sm" alt="" />
                Proximo
              </a>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
