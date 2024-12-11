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
        </div>
    );
}
