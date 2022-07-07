import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

type AccordionProps = {
  question: string;
  answer: string;
};

function Accordion({ question, answer }: AccordionProps) {
  return (
    <Disclosure>
      {({ open }: { open: boolean }) => (
        <div className="">
          <Disclosure.Button
            className={`flex w-full transition-all justify-between rounded-lg bg-black text-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75`}>
            {question}
            <IoIosArrowDown
              className={`${open ? "rotate-180" : ""} transition-all`}
              size={16}
            />
          </Disclosure.Button>
          <Transition
            enter="transition-all duration-100 ease-out"
            enterFrom="transform h-0 opacity-0"
            enterTo="transform h-full opacity-100"
            leave="transition-all duration-75 ease-out"
            leaveFrom="transform h-full opacity-100"
            leaveTo="transform h-0 opacity-0">
            <Disclosure.Panel className="text-black my-3 mx-2 text-sm rounded-b-lg">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

export default Accordion;
