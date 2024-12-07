import { Link } from "@inertiajs/react";
import { FaWhatsapp } from "react-icons/fa";

export default function SalesCard() {
    return (
        <Link
            href="#"
            className="w-[65%] flex items-center gap-[1.5rem] bg-vicentra-blue rounded-full relative py-2 pl-[7rem]"
        >
            <div className="absolute left-0">
                <div className="w-[5.5rem] h-[5.5rem] bg-red-500 rounded-full border-[0.188rem] border-white relative">
                    <div className="w-[1.5rem] h-[1.5rem] flex justify-center items-center bg-white rounded-full absolute right-[-0.75rem] top-[50%] transform translate-y-[-50%]">
                        <FaWhatsapp className="text-green-500" />
                    </div>
                </div>
            </div>
            <div className="mr-4">
                <div className="flex gap-2">
                    <h1 className="text-sm font-medium text-white/50 capitalize">
                        alda
                    </h1>
                    <span className="flex justify-center items-center text-xs font-semibold text-white bg-white/20 px-2 rounded-md capitalize">
                        online
                    </span>
                </div>
                <p className="w-full text-sm font-medium text-white mt-1">
                    ada pertanyaan atau ingin memesan produk ini?
                </p>
            </div>
        </Link>
    );
}
