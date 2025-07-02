import { whyContent } from "../constants/why-content";

export default function Why() {
    return (
        <>
            <div className="flex justify-center">
                <div className="bg-vicentra-blue rounded-full px-4 py-2 shadow-md">
                    <h1 className="text-white font-semibold capitalize">
                        Kenapa Vicentra
                    </h1>
                </div>
            </div>
            <div className="mt-[1.875rem] grid grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[2rem]">
                {whyContent.map((item, index) => (
                    <div
                        className="flex flex-col lg:flex-row items-center lg:items-start gap-4"
                        key={index}
                    >
                        <div className="flex justify-center">
                            {item.icon}
                            {/* <div className="w-[100px] h-[100px] flex justify-center items-center bg-vicentra-blue rounded-xl">
                                {item.icon}
                            </div> */}
                        </div>
                        <div>
                            <h2 className="text-md text-center lg:text-start font-semibold">
                                {item.title}
                            </h2>
                            <p className="text-sm font-normal text-justify mt-[0.625rem]">
                                {item.subTitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
