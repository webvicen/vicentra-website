import { Helmet } from "react-helmet";

import Layout from "../../Layouts/PagesLayout";

const TermsAndConditions = () => {
    return (
        <div>
            <Helmet>
                <title>Vicentra - Syarat & Ketentuan Perbaikan Mesin</title>
            </Helmet>

            {/* TERMS AND CONDITIONS SECTION */}
            <section>
                <h1 className="text-xl text-center font-semibold text-gray-800">
                    Syarat & Ketentuan Perbaikan Mesin
                </h1>
                <ul className="text-justify space-y-4 mt-[2.5rem]">
                    <li className="text-base text-gray-500">
                        1. Pemesan setuju memberikan wewenang sepenuhnya kepada
                        teknisi untuk menganalisa masalah dan memberikan waktu
                        kepada teknisi untuk melakukan perbaikan.
                    </li>
                    <li className="text-base text-gray-500">
                        2. Pemesan bersedia menyediakan akomodasi yang wajar,
                        menyediakan atau untuk biaya perjalanan (bila ada) untuk
                        luar Surabaya.
                    </li>
                    <li className="text-base text-gray-500">
                        3. Pemesan setuju dikenakan biaya lembur tambahan
                        sebesar Rp. 100.000,- / hari (berlaku untuk garansi dan
                        non garansi), bila perbaikan dilakukan melebihi batas
                        maksimal jam kerja 22.00/ jam 10 PM/ 10 malam waktu
                        setempat.
                    </li>
                    <li className="text-base text-gray-500">
                        4. Pemesan setuju dikenakan 2 kali biaya jasa service
                        bila pemanggilan dan perbaikan mesin dilakukan di hari
                        libur/ di luar hari kerja.
                    </li>
                    <li className="text-base text-gray-500">
                        5. Pemesan mendapatkan garansi atas jasa perbaikan di
                        Surat Pemesanan Perbaikan (SPB) ini terhitung 14 hari
                        dari tanggal SPB ini, dengan kondisi sudah dibayar lunas
                        oleh pemesan.
                    </li>
                    <li className="text-base text-gray-500">
                        6. Pemesan dapat menggunakan voucher yang diterbitkan
                        oleh Vicentra sebagai potongan biaya perbaikan dan
                        pembelian sparepart, dengan ketentuan sebagai berikut :
                        <ul className="ml-4 space-y-1 mt-2">
                            <li>
                                a. Potongan voucher terhadap jasa perbaikan
                                berlaku dalam Rupiah (1 lembar voucher = Rp.
                                50.000,-).
                            </li>
                            <li>
                                b. Potongan voucher terhadap pembayaran
                                sparepart berlaku dalam presentase (1 lembar
                                voucher = Rp. 50.000,- untuk semua merk mesin).
                            </li>
                            <li>
                                c. Voucher expired, voucher rusak atau tanpa
                                voucher, dst. Maka tidak berlaku potongan.
                            </li>
                        </ul>
                    </li>
                    <li className="text-base text-gray-500">
                        7. Pemesan setuju untuk membayar tagihan jasa perbaikan
                        dan sparepart yang tertera di Surat Permintaan Perbaikan
                        (SPB) secara sekaligus sesuai tanggal SPB, atau transfer
                        di tanggal yang sama ke rekening: BCA (Rupiah) 506 505
                        1700 atas nama Fifik Hariyanto.
                    </li>
                    <li className="text-base text-gray-500">
                        8. Pembayaran dengan cek atau bilyet giro wajib di atas
                        namakan Fifik Hariyanto, dengan pembayaran dianggap sah
                        bila dana tersebut telah cair/efektif di rekening atas
                        nama Fifik Hariyanto.
                    </li>
                    <li className="text-base text-gray-500">
                        9. Vicentra berhak menarik kembali sparepart yang telah
                        dipasang apabila pemesan tidak menyelesaikan pembayaran
                        lunas biaya-biaya yang tertera di SPB dalam 3 (tiga)
                        hari dari tanggal SPB ini. Pihak pemesan bersedia secara
                        sukarela mengembalikan sparepart tersebut dan
                        mengizinkan pihak Vicentra melakukan penarikan sparepart
                        yang sudah dipasangkan, uang yang sudah dibayar oleh
                        pihak pemesan menjadi milik Vicentra.
                    </li>
                    <li className="text-base text-gray-500">
                        10. Apabila ada pembatalan/ penundaan perbaikan atas
                        permintaan pemesan, tetap dikenakan biaya jasa perbaikan
                        sesuai tarif yang berlaku atau tertera di surat
                        pemesanan ini, yang dibayarkan secara langsung dan
                        tunai.
                    </li>
                </ul>
            </section>
            {/* TERMS AND CONDITIONS SECTION */}
        </div>
    );
};

TermsAndConditions.layout = (page) => <Layout children={page} />;
export default TermsAndConditions;
