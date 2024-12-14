export default function TeamCard({ sales }) {
    return (
        <div className="rounded-md overflow-hidden shadow-md">
            <div className="bg-gray-300 h-[10rem]"></div>
            <div className="p-4">
                <h1 className="text-base text-center font-semibold text-gray-800">
                    Tim Sales
                </h1>
                <h2 className="text-sm text-center font-normal text-gray-500 mt-[0.5rem]">
                    {sales.name}
                </h2>
            </div>
        </div>
    );
}
