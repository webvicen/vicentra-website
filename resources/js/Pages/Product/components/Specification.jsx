export default function Specification() {
    return (
        <div>
            <h1 className="text-base font-semibold text-gray-800">
                Spesifikasi Mesin
            </h1>
            <div className="mt-4">
                <table class="w-full lg:w-[50%] table-auto border">
                    <tbody>
                        <tr className="border bg-gray-100">
                            <td className="text-sm font-medium border p-2">
                                Lebar Cetak
                            </td>
                            <td className="text-sm font-medium border p-2">
                                600x900 mm
                            </td>
                        </tr>
                        <tr className="text-sm font-medium border p-2">
                            <td className="text-sm font-medium border p-2">
                                Kecepatan
                            </td>
                            <td className="text-sm font-medium border p-2">
                                Hingga 8,5 m/jam
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
