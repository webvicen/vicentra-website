import { MdAutorenew, MdOutlineSecurity, MdAssignmentInd, MdOutlineLocalAirport } from "react-icons/md";
import { IoMdBuild } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";

export const whyContent = [
  {
    id: 1,
    title: "Free Returns",
    subTitle: "Apabila ada kerusakan barang dikarenakan kesalahan dari pabrik.",
    icon: <MdAutorenew color="white" size={'2rem'} />,
  },
  {
    id: 2,
    title: "Perbaikan dan Perawatan",
    subTitle: "Garansi perbaikan ke seluruh Indonesia dari Sabang hingga Merauke.",
    icon: <IoMdBuild color="white" size={'2rem'} />,
  },
  {
    id: 3,
    title: "Garansi Produk",
    subTitle: "Kami menjamin produk yang kami sediakan dalam kondisi baik.",
    icon: <MdOutlineSecurity color="white" size={'2rem'} />,
  },
  {
    id: 4,
    title: "Konsultasi Dengan Ahlinya",
    subTitle: "Tim Ahli kami siap memberikan bimbingan dan training kepada para semua customer Kami dan calon pembeli, terhadap produk kami yang akan di beli.",
    icon: <MdAssignmentInd color="white" size={'2rem'} />,
  },
  {
    id: 5,
    title: "Gratis Ongkir",
    subTitle: "Gratis Ongkir untuk pengiriman ke Area Surabaya dengan S&K berlaku.",
    icon: <FaCarRear color="white" size={'2rem'} />,
  },
  {
    id: 6,
    title: "Pengiriman Keseluruh Indonesia",
    subTitle: "Siap Kirim ke seluruh Indonesia melalui Ekspedisi terpercaya dan dengan packing yang Aman.",
    icon: <MdOutlineLocalAirport color="white" size={'2rem'} />,
  }
];