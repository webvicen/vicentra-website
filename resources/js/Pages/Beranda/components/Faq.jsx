import Accordion from "@material-tailwind/react/components/Accordion";
import AccordionHeader from "@material-tailwind/react/components/Accordion/AccordionHeader";
import AccordionBody from "@material-tailwind/react/components/Accordion/AccordionBody";
import { useState } from "react";

import "../styles/faq.css";

export default function Faq({ faqs }) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            {faqs.map((faq, index) => (
                <Accordion open={open === index} key={index}>
                    <AccordionHeader
                        onClick={() => handleOpen(index)}
                        className="capitalize text-start text-base border-b pt-4"
                    >
                        {faq.question}
                    </AccordionHeader>
                    <AccordionBody className="text-sm text-gray-500 pb-0">
                        <div
                            className="faq_content mt-5"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                        ></div>
                    </AccordionBody>
                </Accordion>
            ))}
        </>
    );
}
