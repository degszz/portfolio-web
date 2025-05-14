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


        {/* 
        <div className="flex justify-center">
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
        </div> 
        */}

        <div id="PRO"></div>
        <br />
        <div className="py-4  w-full flex flex-col items-center max-w-[350px] md:max-w-[450px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]"  >
          <div className="w-full text-center md:text-start ">
            <h3
              className=" underline text-xl"
            >
              <b>Mis Proyectos:</b>
            </h3>
          </div>

          <div className="w-fit my-6 lg:w-full grid gap-6 md:gap-4 lg:gap-6 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 ">

            <div className="group border-0  bg-transparent w-fit h-fit rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110 hover:bg-[#19262e]">
              <a target="_blank" className="flex flex-col bg-transparent text-lg w-full items-center lg:items-start md:items-start  hover:underline text-white" href="https://helpful-basbousa-eca252.netlify.app/">
                <img src="designsystem.png" className="max-h-[150px] md:max-h-[200px]  rounded-xl z-10 group-hover:rounded-b-none" alt="" />
                <span className="py-2  group-hover:underline">
                  Design System
                </span>
              </a>
            </div>

            <div className="group border-0  bg-transparent w-fit h-fit rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110 hover:bg-[#19262e]">
              <a target="_blank" className="rounded-xl flex flex-col  text-lg w-full items-center lg:items-start md:items-start  hover:underline text-white" href="https://helpful-basbousa-eca252.netlify.app/">
                <img src="foodweb.png" className="max-h-[150px] md:max-h-[200px]  rounded-xl z-10 group-hover:rounded-b-none" alt="" />
                <span className="py-2  group-hover:underline">
                  Food Website
                </span>
              </a>
            </div>

            <div className="group border-2  bg-transparent w-full  h-full rounded-xl  transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl   ">
              <div className="h-full w-full flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px]">
                <h2 className="text-4xl">?</h2>
              </div>
            </div>


          </div>
        </div>


      </div>
    </>
  );
}
