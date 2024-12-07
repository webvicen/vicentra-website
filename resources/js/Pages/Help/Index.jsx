import { Helmet } from "react-helmet";

export default function Help() {
    return (
        <div>
            <Helmet>
                <title>Halaman Bantuan</title>
            </Helmet>

            {/* HELP SECTION */}
            <section>
                <h1 className="text-xl text-center font-semibold text-gray-800">
                    Ada Yang Bisa Dibantu?
                </h1>
                <div className="lg:w-[50%] mx-auto space-y-4 mt-[2.5rem]">
                    <input
                        type="text"
                        placeholder="Masukan Nama"
                        className="w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Masukan Email"
                        className="w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Masukan Subyek"
                        className="w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
                    />
                    <textarea
                        placeholder="Tuliskan Pesan Anda"
                        cols="30"
                        rows="10"
                        className="w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-vicentra-blue text-white text-base font-medium px-5 py-2 rounded-md"
                    >
                        Kirim
                    </button>
                </div>
            </section>
            {/* HELP SECTION */}
        </div>
    );
}
