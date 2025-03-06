export default function Results({ product }) {
    return (
        <div className="mt-[1.875rem]">
            <h2 className="text-base font-semibold text-gray-800">
                Hasil Mesin
            </h2>
            <div className="mt-4">
                <img
                    src={`/storage/${product.work_result}`}
                    alt={product.slug}
                    className="w-full"
                />
            </div>
        </div>
    );
}
