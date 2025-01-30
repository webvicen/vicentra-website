import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import Accordion from "@material-tailwind/react/components/Accordion/index.js";
import AccordionHeader from "@material-tailwind/react/components/Accordion/AccordionHeader.js";
import AccordionBody from "@material-tailwind/react/components/Accordion/AccordionBody.js";
import { useState } from "react";
const faq = "";
function Faq({ faqs }) {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return /* @__PURE__ */ jsx(Fragment, { children: faqs.map((faq2, index) => /* @__PURE__ */ jsxs(Accordion, { open: open === index, children: [
    /* @__PURE__ */ jsx(
      AccordionHeader,
      {
        onClick: () => handleOpen(index),
        className: "capitalize text-start text-base border-b pt-4",
        children: faq2.question
      }
    ),
    /* @__PURE__ */ jsx(AccordionBody, { className: "text-sm text-gray-500 pb-0", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "faq_content mt-5",
        dangerouslySetInnerHTML: { __html: faq2.answer }
      }
    ) })
  ] }, index)) });
}
export {
  Faq as default
};
