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
const Help = () => {
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
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("title", { children: "Vicentra - Bantuan" }) }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl text-center font-semibold text-gray-800", children: "Ada Yang Bisa Dibantu?" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          ref: form,
          onSubmit: sendEmail,
          className: "lg:w-[50%] mx-auto space-y-4 mt-[2.5rem]",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Masukan Nama",
                name: "user_name",
                className: "w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Masukan Email",
                name: "user_email",
                className: "w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Masukan Subyek",
                name: "subject",
                className: "w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                placeholder: "Tuliskan Pesan Anda",
                name: "message",
                cols: "30",
                rows: "10",
                className: "w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
              }
            ),
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
Help.layout = (page) => /* @__PURE__ */ jsx(PagesLayout, { children: page });
export {
  Help as default
};
