import "../styles/specification.css";

export default function Specification({ product }) {
    return (
        <div>
            <h1 className="text-base font-semibold text-gray-800">
                Spesifikasi Mesin
            </h1>
            <div
                className="specification-table-content mt-4"
                dangerouslySetInnerHTML={{ __html: product.specification }}
            ></div>
            <div className="mt-[1rem]">
                <p className="text-xs mb-0">
                    <span className="text-lg text-red-500">*</span>Spesifikasi
                    di atas dapat berubah sewaktu-waktu tanpa pemberitahuan
                    terlebih dahulu.
                </p>
                <p className="text-xs mb-0">
                    <span className="text-lg text-red-500">*</span>Untuk
                    informasi lebih lanjut silahkan hubungi tim sales kami
                    melalui link contact diatas.
                </p>
            </div>
        </div>
    );
}
