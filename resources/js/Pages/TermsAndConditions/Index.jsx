import { useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

import Layout from "../../Layouts/PagesLayout";

const TermsAndConditions = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    alert("Terimakasih, Pesan Anda Sudah Terkirim.");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div>
            <Helmet>
                <title>Vicentra - Syarat & Ketentuan Perbaikan Mesin</title>
                <meta
                    name="description"
                    content="Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
                />
            </Helmet>

            {/* TERMS AND CONDITIONS SECTION */}
            <section>
                <h1 className="text-xl text-center font-semibold text-gray-800">
                    Layanan Dan Perbaikan Mesin
                </h1>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="lg:w-[50%] mx-auto space-y-4 mt-[2.5rem]"
                >
                    <div>
                        <label htmlFor="user_name">Nama Lengkap</label>
                        <input
                            type="text"
                            placeholder="Masukan nama lengkap anda"
                            id="user_name"
                            name="user_name"
                            className="w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="user_email_or_phone">
                            Email atau No Telepon
                        </label>
                        <input
                            type="text"
                            placeholder="Masukan email atau nomor telepon anda"
                            id="user_email_or_phone"
                            name="user_email_or_phone"
                            className="w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="type_of_assistance">
                            Kategori Service
                        </label>
                        <select
                            id="type_of_assistance"
                            name="type_of_assistance"
                            defaultValue="Garansi"
                            className="w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                        >
                            <option value="Garansi">Garansi</option>
                            <option value="Non Garansi">Non Garansi</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="type_of_assistance">Isi Keluhan</label>
                        <textarea
                            placeholder="Isi keluhan keluhan anda disini"
                            id="message"
                            name="message"
                            cols="30"
                            rows="10"
                            className="w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-vicentra-blue text-white text-base font-medium px-5 py-2 rounded-md"
                    >
                        Kirim
                    </button>
                </form>
            </section>
            {/* TERMS AND CONDITIONS SECTION */}
        </div>
    );
};

TermsAndConditions.layout = (page) => <Layout children={page} />;
export default TermsAndConditions;
