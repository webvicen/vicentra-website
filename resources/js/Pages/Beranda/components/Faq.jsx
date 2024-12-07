import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

export default function Faq() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1}>
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="text-base border-b"
                >
                    What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="text-sm text-gray-500">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="text-base border-b"
                >
                    How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="text-sm text-gray-500">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
                <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="text-base border-b"
                >
                    What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="text-sm text-gray-500">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </>
    );
}
