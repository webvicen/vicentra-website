import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";

import BlogImage from "../../assets/images/example/blog-image.png";

export default function ShowBlog() {
    return (
        <div>
            <Helmet>
                <title>Halaman Detail Blog</title>
            </Helmet>

            {/* CONTENT */}
            <main className="grid grid-cols-12">
                {/* SIDEBAR */}
                <div className="col-span-3">
                    <div>
                        <h1 className="capitalize text-gray-800 font-semibold text-xl">
                            Artikel Serupa
                        </h1>
                        <div className="flex flex-col items-start gap-[0.625rem] mt-[1.875rem]">
                            <Link href="#">
                                <h1 className="text-base">
                                    Surabaya Printing Expo 2022
                                </h1>
                                <p className="text-xs text-gray-500">
                                    24 Januari 2024
                                </p>
                                <hr className="mt-[0.625rem]" />
                            </Link>
                            <Link href="#">
                                <h1 className="text-base">
                                    Surabaya Printing Expo 2022
                                </h1>
                                <p className="text-xs text-gray-500">
                                    24 Januari 2024
                                </p>
                                <hr className="mt-[0.625rem]" />
                            </Link>
                            <Link href="#">
                                <h1 className="text-base">
                                    Surabaya Printing Expo 2022
                                </h1>
                                <p className="text-xs text-gray-500">
                                    24 Januari 2024
                                </p>
                                <hr className="mt-[0.625rem]" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* SIDEBAR */}

                {/* BLOG CONTENT */}
                <div className="col-span-9">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Surabaya Printing Expo 2022
                    </h1>
                    <img
                        src={BlogImage}
                        alt="surabaya-printing-expo-2022"
                        className="mt-[1.875rem] rounded-lg w-full"
                    />
                    <div className="flex items-center gap-[0.625rem] mt-[1.875rem]">
                        <p className="font-medium text-sm">
                            Di posting oleh Admin
                        </p>
                        <div className="w-[0.110rem] h-5 bg-gray-300 rounded-full"></div>
                        <p className="font-medium text-sm">12 Agustus 2022</p>
                        <div className="w-[0.110rem] h-5 bg-gray-300 rounded-full"></div>
                        <button
                            type="button"
                            className="text-sm font-medium bg-vicentra-blue px-2 py-1 text-white rounded-full"
                        >
                            kegiatan
                        </button>
                    </div>
                    <div className="mt-[1.875rem]">
                        <p className="text-sm font-normal text-justify text-gray-500 mt-[0.5rem]">
                            Vicentra mengikuti pameran Surabaya Printing Expo
                            pada tanggal 23 sampai 26 juli 2022. Tujuan
                            mengikuti expo ini adalah untuk mengenalkan
                            tekonologi baru dalam dunia printing.
                        </p>
                        <img
                            src={BlogImage}
                            alt="surabaya-printing-expo-2022"
                            className="mt-[1.875rem] mb-[1.875rem] w-full"
                        />
                        <p className="text-sm font-normal text-justify text-gray-500">
                            Hadir dengan membawa beberapa mesin finishing
                            seperti mesin closing spiral otomatis, mesin flatbed
                            Vulcan FC500, dan beberapa mesin finishing lainnya.
                            Vicentra berharap bisa mememenuhi kebutuhan segala
                            bentuk industri percetakan dan kreatif.
                        </p>
                        <img
                            src={BlogImage}
                            alt="surabaya-printing-expo-2022"
                            className="mt-[1.875rem] w-full"
                        />
                    </div>
                </div>
                {/* BLOG CONTENT */}
            </main>
            {/* CONTENT */}
        </div>
    );
}
