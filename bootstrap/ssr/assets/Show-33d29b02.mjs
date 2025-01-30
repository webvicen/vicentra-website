import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import require$$0, { useState, Suspense } from "react";
/* empty css                  *//* empty css                */import { P as PagesLayout } from "./PagesLayout-a424847f.mjs";
import Descriptions from "./Descriptions-1fdc4a2c.mjs";
import Specification from "./Specification-82f3db92.mjs";
import Results from "./Results-12c7c414.mjs";
import SalesCard from "./SalesCard-dfec0daf.mjs";
import "react-icons/fa";
import "react-icons/md";
import "react-icons/io5";
import "react-icons/hi2";
const ReactPlayer = require$$0.lazy(() => import("./index-2696ed2b.mjs").then((n) => n.i));
const ShowProduct = ({ product, teamSales, similarProducts }) => {
  const isServer = typeof window === "undefined";
  const { url } = usePage();
  const urlSegments = url.split("/");
  const urlTarget = `${urlSegments[2]}/${urlSegments[3]}`;
  const breadcrumbUrlResult = urlTarget.split("/").map(
    (segment) => segment.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  ).join("/");
  const [activeProductItem, setActiveProductItem] = useState(
    product.media[0]
  );
  const [listProductAssets, setListProductAssets] = useState(product.media);
  const [tabItems, setTabsItems] = useState([
    {
      name: "Deskripsi",
      isActive: true
    },
    {
      name: "Rekomendasi",
      isActive: false
    }
  ]);
  const [activeTab, setActiveTab] = useState("Deskripsi");
  const toggleActiveTab = (index) => {
    const updatedTabItems = [...tabItems];
    updatedTabItems[index].isActive = true;
    updatedTabItems.forEach((item, i) => {
      if (i !== index) {
        item.isActive = false;
      }
    });
    setTabsItems(updatedTabItems);
    setActiveTab(tabItems[index].name);
  };
  const toogleActiveProductItem = (index) => {
    const updatedListProductAssets = [...listProductAssets];
    updatedListProductAssets[index].isActive = true;
    updatedListProductAssets.forEach((item, i) => {
      if (i !== index) {
        item.isActive = false;
      }
    });
    setListProductAssets(updatedListProductAssets);
    setActiveProductItem(updatedListProductAssets[index]);
  };
  const convertToPreviewUrl = (shareUrl) => {
    const match = shareUrl.match(
      /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/
    );
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    } else {
      throw new Error("Invalid Google Drive share URL format");
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Vicentra - Produk ",
        product.name,
        " ",
        product.another_name ?? ""
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `Vicentra - Produk ${product.name} ${product.another_name ?? ""}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://vicentra.co.id/product/${product.category.slug}/${product.category.subCategory.slug}/${product.category.subCategory.subSubCategory.slug}/${product.slug}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: `Vicentra - Produk ${product.name} ${product.another_name ?? ""}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: product.shortDescription.replace(/<[^>]*>/g, "") ?? ""
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:site",
          content: `https://vicentra.co.id/product/${product.category.slug}/${product.category.subCategory.slug}/${product.category.subCategory.subSubCategory.slug}/${product.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid lg:grid-cols-2 gap-[1.25rem]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { children: activeProductItem.type === "image" ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/storage/${activeProductItem.file}`,
              alt: activeProductItem.slug,
              className: "w-full h-full lg:h-[37.5rem] object-contain"
            }
          ),
          product.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[2rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
        ] }) : /* @__PURE__ */ jsx("div", { className: "w-full h-[21.438rem] lg:h-[37.5rem]", children: activeProductItem.type_source_link === "youtube" ? /* @__PURE__ */ jsx("div", { className: "w-full h-[21.438rem] lg:h-[37.5rem]", children: !isServer ? /* @__PURE__ */ jsx(
          Suspense,
          {
            fallback: /* @__PURE__ */ jsx("div", { children: "Loading player..." }),
            children: /* @__PURE__ */ jsx(
              ReactPlayer,
              {
                url: activeProductItem.file,
                light: true,
                width: "100%",
                height: "100%",
                controls: true
              }
            )
          }
        ) : /* @__PURE__ */ jsx("div", { children: "Loading..." }) }) : /* @__PURE__ */ jsx(
          "iframe",
          {
            src: convertToPreviewUrl(
              activeProductItem.file
            ),
            width: "100%",
            height: "100%",
            allow: "autoplay",
            allowFullScreen: "",
            title: "Google Drive Video Player"
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-x-2 mt-[1rem] overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100", children: listProductAssets.map((item, index) => {
          if (item.type === "image") {
            return /* @__PURE__ */ jsx(
              "img",
              {
                src: `/storage/${item.file}`,
                alt: "mesin-xuli-eco-solvent",
                className: `w-[10rem] h-[10rem] hover:cursor-pointer ${item.isActive ? "border-2 border-gray-600" : "border-2 border-white"} object-contain`,
                onClick: () => toogleActiveProductItem(index)
              },
              index
            );
          } else if (item.type === "video") {
            return /* @__PURE__ */ jsx(
              "img",
              {
                src: `/storage/${item.video_thumbnail}`,
                alt: "mesin-xuli-eco-solvent",
                className: `w-[10rem] h-[10rem] hover:cursor-pointer ${item.isActive ? "border-2 border-gray-600" : "border-2 border-white"} object-contain`,
                onClick: () => toogleActiveProductItem(index)
              },
              index
            );
          }
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-800", children: product.name }),
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-normal text-gray-600", children: product.another_name })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-sm text-justify text-gray-500 mt-[1.25rem]",
            dangerouslySetInnerHTML: {
              __html: product.shortDescription
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-[1.25rem]", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-base font-semibold", children: [
            product.category.name,
            "/",
            product.category.subCategory.name,
            "/",
            product.category.subCategory.subSubCategory.name
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-base", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "SKU: " }),
            product.sku
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-base", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Brand: " }),
            product.brand
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 mt-[1.25rem]", children: teamSales.map((sales, index) => /* @__PURE__ */ jsx(
          SalesCard,
          {
            product,
            sales,
            url,
            breadcrumbUrlResult,
            order: index + 1
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-[3.125rem] lg:mt-[6.25rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "space-x-2", children: tabItems.map((item, index) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `text-sm font-semibold ${item.isActive ? "bg-vicentra-blue text-white" : "bg-gray-100 text-gray-500"} px-4 py-2 rounded-md`,
          onClick: () => toggleActiveTab(index),
          children: item.name
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-[1.875rem]", children: [
        activeTab === "Deskripsi" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Descriptions, { product }),
          product.specification != null && /* @__PURE__ */ jsx(Specification, { product }),
          product.work_result != null && /* @__PURE__ */ jsx(Results, { product })
        ] }),
        activeTab === "Rekomendasi" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-800", children: "Rekomendasi Produk" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]", children: similarProducts.map((item, index) => /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}`,
              className: "rounded-lg overflow-hidden",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden relative", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/storage/${item.thumbnail}`,
                      alt: item.slug
                    }
                  ),
                  item.is_out_of_stock ? /* @__PURE__ */ jsx("div", { className: "w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]", children: /* @__PURE__ */ jsx("h1", { className: "text-base font-bold text-white uppercase", children: "out of stock" }) }) : null
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                  /* @__PURE__ */ jsx("h1", { className: "text-center text-base font-bold", children: item.name }),
                  /* @__PURE__ */ jsx("h2", { className: "text-center text-sm font-normal", children: item.another_name })
                ] })
              ]
            },
            index
          )) }) })
        ] })
      ] })
    ] })
  ] });
};
ShowProduct.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
export {
  ShowProduct as default
};
