import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";

type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
};

const DropdownInput = ({ label, options, value, onChange, onBlur }: Props) => {
  return (
    <div className="">
      <Listbox as="div" value={value} onChange={onChange} onBlur={onBlur}>
        <Listbox.Label className="block font-semibold">{label}:</Listbox.Label>
        <Listbox.Button className="relative bg-slate-200 w-full text-left px-2 py-1 rounded-md">
          <span className="block truncate">{value}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiSelector className="h-5 w-5 text-black" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="border mt-1 rounded-md">
            {options.map((option, index) => (
              <Listbox.Option key={index} value={option} className="">
                {({ active, selected }) => (
                  <li className={`${active ? "bg-slate-200" : ""} px-2 cursor-pointer py-1`}>{option}</li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default DropdownInput;
