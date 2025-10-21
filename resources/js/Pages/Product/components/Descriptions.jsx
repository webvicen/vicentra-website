export default function Descriptions({ product }) {
    return (
        <div>
            <h2 className="capitalize text-base font-semibold text-gray-800">
                Deskripsi {product.category.name}
            </h2>
            <div
                className="product_description text-sm font-normal text-gray-500 mt-4"
                dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            {/*<div className="text-transparent">
                <h2 className="text-xs">
                    <span className="font-bold">keywords:</span>{" "}
                    {product.keywords}
                </h2>
            </div>*/}
        </div>
    );
}
