import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FAQsAPI } from "../../lib/Statements";

export default function ProblemSection() {
  const faqs = FAQsAPI.map((item, key) => {
    return (
      <AccordionItem key={key}>
        <AccordionItemHeading>
          <AccordionItemButton>{item.question}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{item.answer}</p>
        </AccordionItemPanel>
      </AccordionItem>
    );
  });
  return (
    <div className="mt-10 flex flex-col items-center md:max-h-screen md:overflow-y-scroll">
      <Accordion allowZeroExpanded>{faqs}</Accordion>
    </div>
  );
}
