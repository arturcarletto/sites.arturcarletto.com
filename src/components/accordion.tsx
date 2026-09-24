"use client";

import { useId, useState } from "react";

export type AccordionItem = {
  title: string;
  content: string;
};

export function Accordion({
  items,
  className = "",
  initialOpen = 0,
}: {
  items: AccordionItem[];
  className?: string;
  initialOpen?: number | null;
}) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen);

  return (
    <div className={`accordion ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${id}-button-${index}`;
        const panelId = `${id}-panel-${index}`;

        return (
          <article className="accordion__item" key={item.title}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.title}</span>
                <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
              </button>
            </h3>
            <div
              id={panelId}
              className="accordion__panel"
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p>{item.content}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
