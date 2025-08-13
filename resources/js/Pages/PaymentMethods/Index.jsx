import { Head } from "@inertiajs/react";
import Layout from "../../Layouts/PagesLayout";

export default function PaymentMethods({ page, methods }) {
    return (
        <Layout>
            <Head title={page?.banner_title || "Metode Pembayaran"} />

            {/* Banner Section */}
            <section className="text-center p-8 bg-gray-50">
                {page?.banner_image && (
                    <img
                        src={page.banner_image}
                        alt="Banner"
                        className="w-full h-auto object-cover rounded-lg mb-10"
                    />
                )}
                <h1 className="text-2xl font-bold pt-6 mb-10">{page?.banner_title}</h1>
                {page?.banner_subtitle && (
                    <p className="text-lg text-gray-600 mt-2">{page.banner_subtitle}</p>
                )}
                {page?.banner_button_text && (
                    <a
                        href={page.banner_button_link}
                        className="inline-block mt-0 px-6 py-3 bg-yellow-400 text-black rounded-lg"
                    >
                        {page.banner_button_text}
                    </a>
                )}
            </section>

            {/* Description */}
            <section className="max-w-4xl mx-auto text-center my-0 px-4">
                <p className="text-gray-700">{page?.description}</p>
            </section>

            {/* 3 Columns (Methods) */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto p-8">
                {methods.map((method, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                        {method.icon && (
                            <img
                                src={method.icon}
                                alt={method.title}
                                className="w-24 h-24 mx-auto mb-5 mt-[-70px]"
                            />
                        )}
                        <h3 className="text-xl font-bold mb-2 text-center">{method.title}</h3>
                        <p className="text-gray-600 text-center">{method.description}</p>
                    </div>
                ))}
            </section>
        </Layout>
    );
}
