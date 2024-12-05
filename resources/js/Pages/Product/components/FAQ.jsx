export default function FAQ() {
    return (
        <div>
            <h1 className="text-base font-semibold text-gray-800">
                FAQ / Yang Sering Ditanyakan
            </h1>
            <div className="mt-4">
                <ul className="space-y-2">
                    <li className="text-sm font-normal text-gray-500">
                        1. Apakah mesin ini juga bisa untuk grafir atau ukir?{" "}
                        <br />- Tidak bisa, karena mesin ini hanya bisa untuk
                        cutting atau potong saja.
                    </li>
                    <li className="text-sm font-normal text-gray-500">
                        2. Untuk mesin ini apakah bisa cutting atau potong
                        dibahan non metal?
                        <br />- Tidak bisa, karena mesin ini hanya bisa potong
                        dibahan metal
                    </li>
                    <li className="text-sm font-normal text-gray-500">
                        3. Apakah mesin ini dilengkapi dengan rotary? <br />-
                        Untuk mesin ini tidak memiliki rotary
                    </li>
                </ul>
            </div>
            <h1 className="text-base font-semibold text-gray-800 my-4">
                Download Brosur Mesin Mesin Xuli Eco Solvent
            </h1>
            <a
                href="#"
                className="bg-vicentra-blue px-4 py-2 text-base font-medium text-white rounded-md"
            >
                Download
            </a>
        </div>
    );
}
