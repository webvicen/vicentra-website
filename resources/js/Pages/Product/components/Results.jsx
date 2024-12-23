export default function Results({ product }) {
    return (
        <div className="mt-[1.875rem]">
            <h1 className="text-base font-semibold text-gray-800">
                Hasil Mesin
            </h1>
            <div className="mt-4">
                <img
                    src={`/storage/${product.work_result}`}
                    alt={product.slug}
                    className="lg:w-[50%]"
                />
            </div>
        </div>
    );
}
