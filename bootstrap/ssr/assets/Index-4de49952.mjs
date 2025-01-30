import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { P as PagesLayout } from "./PagesLayout-02df36db.mjs";
import "@inertiajs/react";
import "react-icons/fa";
import "react-icons/md";
import "react-icons/io5";
import "react-icons/hi2";
const TermsAndConditions = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_kfmdtge",
      "template_uo5mbpr",
      form.current,
      {
        publicKey: "62jmOIjCR-WsSK0b6"
      }
    ).then(
      () => {
        console.log("SUCCESS!");
        alert("Terimakasih, Pesan Anda Sudah Terkirim.");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Vicentra - Syarat & Ketentuan Perbaikan Mesin" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: "Vicentra - Syarat & Ketentuan Perbaikan Mesin"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
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
          content: "https://vicentra.co.id/terms-and-conditions"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Vicentra" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Vicentra - Syarat & Ketentuan Perbaikan Mesin"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Jangan khawatir, kami hadir untuk memberikan solusi terbaik bagi Anda! Tim profesional kami siap menangani setiap permasalahan mesin dengan layanan unggulan yang cepat dan efisien. Hubungi kami sekarang juga, dan temukan kemudahan dalam setiap perbaikan serta layanan berkualitas yang dapat Anda andalkan!"
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
          content: "https://vicentra.co.id/terms-and-conditions"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl text-center font-semibold text-gray-800", children: "Layanan Dan Perbaikan Mesin" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          ref: form,
          onSubmit: sendEmail,
          className: "lg:w-[50%] mx-auto space-y-4 mt-[2.5rem]",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "user_name", children: "Nama Lengkap" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Masukan nama lengkap anda",
                  id: "user_name",
                  name: "user_name",
                  className: "w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "user_email_or_phone", children: "Email atau No Telepon" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Masukan email atau nomor telepon anda",
                  id: "user_email_or_phone",
                  name: "user_email_or_phone",
                  className: "w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "type_of_assistance", children: "Kategori Service" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "type_of_assistance",
                  name: "type_of_assistance",
                  defaultValue: "Garansi",
                  className: "w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "Garansi", children: "Garansi" }),
                    /* @__PURE__ */ jsx("option", { value: "Non Garansi", children: "Non Garansi" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "type_of_assistance", children: "Isi Keluhan" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  placeholder: "Isi keluhan keluhan anda disini",
                  id: "message",
                  name: "message",
                  cols: "30",
                  rows: "10",
                  className: "w-full border-2 border-gray-500 focus:outline-none mt-2 px-4 py-2 rounded-md"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "bg-vicentra-blue text-white text-base font-medium px-5 py-2 rounded-md",
                children: "Kirim"
              }
            )
          ]
        }
      )
    ] })
  ] });
};
TermsAndConditions.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
export {
  TermsAndConditions as default
};
