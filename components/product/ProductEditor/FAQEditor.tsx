import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { SimpleButton } from "../../buttons";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  defaultValue: FAQ[] | null;
  onChange: (faqs: FAQ[]) => void;
  onBlur: () => void;
};

const FAQEditor = ({ defaultValue, onChange, onBlur }: Props) => {
  const [faqs, setFaqs] = useState<FAQ[]>(defaultValue || []);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addFAQ = (faq: FAQ) => {
    if (faq.question.trim() === "" || faq.answer.trim() === "") return;
    setFaqs([...faqs, faq]);
    onChange([...faqs, faq]);
    setQuestion("");
    setAnswer("");
  };

  const removeFAQ = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
    onChange(faqs.filter((_, i) => i !== index));
  };

  return (
    <>
      <label className="text-lg font-bold">FAQs:</label>
      <div className="space-y-3">
        {faqs &&
          faqs.map((faq, index) => {
            const { question, answer } = faq;
            return (
              <div
                key={index}
                className="flex border border-black rounded-lg justify-between p-2">
                <div className="flex flex-col">
                  <h3 className="font-semibold">FAQ#{index + 1}</h3>
                  <div className="flex space-x-2">
                    <span className="font-semibold">Question: </span>
                    <p>{question}</p>
                  </div>

                  <div className="flex space-x-3">
                    <span className="font-semibold">Answer: </span>
                    <p>{answer}</p>
                  </div>
                </div>
                <div className="p-1 rounded-md self-center align-end bg-red-600 text-white cursor-pointer hover:text-red-600 border border-red-600 hover:bg-white">
                  <MdDelete onClick={() => removeFAQ(index)} size={23} />
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex flex-col space-y-3 mt-5">
        <p>{faqs.length === 0 ? "Add one?" : "Add another one?"}</p>
        <textarea
          className="py-1.5 w-full px-2 rounded-md bg-slate-200 text-sm"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <textarea
          className="py-1.5 w-full px-2 rounded-md bg-slate-200 text-sm"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <SimpleButton label="Add FAQ" onClick={() => addFAQ({ answer, question })} className="px-2 bg-black text-white w-fit py-1.5" />
      </div>
    </>
  );
};

export default FAQEditor;
