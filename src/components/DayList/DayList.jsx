import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import PlacesList from "../Place/PlacesList";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}


export default function DayList() {
    const [open, setOpen] = useState([]);

    const handleOpen = (value) => {
        setOpen((prevOpen) => {
            const index = prevOpen.indexOf(value);
            if (index === -1) {
                // Add the value to the open array if it's not already present
                return [...prevOpen, value];
            } else {
                // Remove the value from the open array if it's already present
                return prevOpen.filter((item) => item !== value);
            }
        });
    };

    const isAccordionOpen = (id) => {
        return open.includes(id);
    };

    return (
        <Fragment>
            <Accordion
                open={isAccordionOpen(1)}
                icon={<Icon id={1} open={isAccordionOpen(1)} />}
                className="border border-blue-gray-100 px-4 rounded-lg mb-2"
            >
                <AccordionHeader onClick={() => handleOpen(1)} className="border-none">
                    Day 1
                </AccordionHeader>
                <AccordionBody>
                    {/* We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our dreams. */}
                    <PlacesList/>
                </AccordionBody>
            </Accordion>
            <Accordion
                open={isAccordionOpen(2)}
                icon={<Icon id={2} open={isAccordionOpen(2)} />}
                className="border border-blue-gray-100 px-4 rounded-lg mb-2"
            >
                <AccordionHeader onClick={() => handleOpen(2)} className="border-none">
                    Day 2
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion
                open={isAccordionOpen(3)}
                icon={<Icon id={3} open={isAccordionOpen(3)} />}
                className="border border-blue-gray-100 px-4 rounded-lg mb-2"
            >
                <AccordionHeader onClick={() => handleOpen(3)} className="border-none">
                    Day 3
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion
                open={isAccordionOpen(4)}
                icon={<Icon id={4} open={isAccordionOpen(4)} />}
                className="border border-blue-gray-100 px-4 rounded-lg mb-2"
            >
                <AccordionHeader onClick={() => handleOpen(4)} className="border-none">
                    Day 4
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion
                open={isAccordionOpen(5)}
                icon={<Icon id={5} open={isAccordionOpen(5)} />}
                className="border border-blue-gray-100 px-4 rounded-lg mb-2"
            >
                <AccordionHeader onClick={() => handleOpen(5)} className="border-none">
                    Want to go
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </Fragment>
    );
}
