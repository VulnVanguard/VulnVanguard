import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FAQsAPI } from "../../lib/Faqs";

export default function FAQSection() {
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
    <div className="mt-10 flex flex-col items-center py-5">
      <h1 className="w-11/12 text-5xl font-bold text-center mb-5">
        Frequently Asked Questions
      </h1>
      <Accordion allowZeroExpanded>{faqs}</Accordion>
    </div>
  );
}
