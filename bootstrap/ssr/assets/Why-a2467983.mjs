import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { MdAutorenew, MdOutlineSecurity, MdAssignmentInd, MdOutlineLocalAirport } from "react-icons/md";
import { IoMdBuild } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";
const whyContent = [
  {
    id: 1,
    title: "Free Returns",
    subTitle: "Apabila ada kerusakan barang dikarenakan kesalahan dari pabrik.",
    icon: /* @__PURE__ */ jsx(MdAutorenew, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 2,
    title: "Perbaikan dan Perawatan",
    subTitle: "Garansi perbaikan ke seluruh Indonesia dari Sabang hingga Merauke.",
    icon: /* @__PURE__ */ jsx(IoMdBuild, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 3,
    title: "Garansi Produk",
    subTitle: "Kami menjamin produk yang kami sediakan dalam kondisi baik.",
    icon: /* @__PURE__ */ jsx(MdOutlineSecurity, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 4,
    title: "Konsultasi Dengan Ahlinya",
    subTitle: "Tim Ahli kami siap memberikan bimbingan dan training kepada para semua customer Kami dan calon pembeli, terhadap produk kami yang akan di beli.",
    icon: /* @__PURE__ */ jsx(MdAssignmentInd, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 5,
    title: "Gratis Ongkir",
    subTitle: "Gratis Ongkir untuk pengiriman ke Area Surabaya dengan S&K berlaku.",
    icon: /* @__PURE__ */ jsx(FaCarRear, { className: "text-vicentra-blue", size: "2.5rem" })
  },
  {
    id: 6,
    title: "Pengiriman Keseluruh Indonesia",
    subTitle: "Siap Kirim ke seluruh Indonesia melalui Ekspedisi terpercaya dan dengan packing yang Aman.",
    icon: /* @__PURE__ */ jsx(MdOutlineLocalAirport, { className: "text-vicentra-blue", size: "2.5rem" })
  }
];
function Why() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "bg-vicentra-blue rounded-full px-4 py-2 shadow-md", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-semibold capitalize", children: "kenapa vicentra" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-[1.875rem] grid grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[2rem]", children: whyContent.map((item, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col lg:flex-row items-center lg:items-start gap-4",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: item.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-md text-center lg:text-start font-semibold", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-justify mt-[0.625rem]", children: item.subTitle })
          ] })
        ]
      },
      index
    )) })
  ] });
}
export {
  Why as default
};
