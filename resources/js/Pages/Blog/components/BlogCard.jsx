import { Link } from "@inertiajs/react";

export default function BlogCard() {
    return (
        <Link
            href="/blog/surabaya-printing-expo-2022"
            className="rounded-md overflow-hidden shadow-md"
        >
            <div className="bg-gray-300 h-[10rem] relative">
                <div className="bg-vicentra-black text-white px-4 py-1 absolute top-4 right-4 rounded-full">
                    kegiatan
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-base font-semibold text-gray-800">
                    Surabaya Printing Expo 2022
                </h1>
                <p className="text-sm font-normal text-gray-500 mt-[0.5rem]">
                    Vicentra mengikuti pameran Surabaya Printing Expo pada
                    tanggal 23 sampai 26 juli 2022.
                </p>
            </div>
        </Link>
    );
}
