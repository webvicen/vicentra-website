export default function Descriptions({ product }) {
    return (
        <div>
            <h1 className="text-base font-semibold text-gray-800">
                Deskripsi Mesin
            </h1>
            <div
                className="product_description text-sm font-normal text-gray-500 mt-4"
                dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
        </div>
    );
}
