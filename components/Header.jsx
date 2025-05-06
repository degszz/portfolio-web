import MenuBar from "@/components/MenuBar"

export default function Header() {
    return (
        <>
            <header
                className="bg-transparent text-white z-50 fixed top-0 h-[51px] lg:h-[60px] w-full flex items-center justify-between"
            >

                <div
                    className="flex items-center basis-1/3 justify-center text-center h-full"
                >

                </div>

                <div className="w-fit  basis-1/3 lg:w-fit lg:basis-0">
                    <div className="z-50">
                        <MenuBar />
                    </div>
                </div>

                <div
                    className="flex basis-1/3  items-center justify-around  text-center h-full"
                >

                </div>

            </header>
        </>
    );
}