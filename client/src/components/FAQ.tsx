import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";
interface FAQItem {
  question: string;
  answer: string;
}
const faqData: FAQItem[] = [
  {
    question: "How do I track my package?",
    answer:
      "You can track your package by entering your tracking number in the search bar at the top of the page. You'll receive real-time updates on your package's location and estimated delivery time. You can also track packages through our mobile app for convenient on-the-go monitoring.",
  },
  {
    question: "What are the delivery timeframes?",
    answer:
      "Standard delivery takes 3-5 business days, Express delivery takes 1-2 business days, and Same-day delivery is available in select cities. Delivery times may vary based on your location and package destination. We provide guaranteed delivery dates for Express and Same-day options.",
  },
  {
    question: "How much does shipping cost?",
    answer:
      "Shipping costs depend on package weight, dimensions, destination, and delivery speed. Standard shipping starts at $5.99, Express shipping starts at $12.99, and Same-day delivery starts at $24.99. You can get an instant quote by entering your package details on our pricing page.",
  },
  {
    question: "What items can I ship?",
    answer:
      "We accept most packages including documents, electronics, clothing, and household items. Prohibited items include hazardous materials, perishable goods, illegal substances, and weapons. For a complete list of restricted items, please visit our shipping guidelines page.",
  },
  {
    question: "How do I schedule a pickup?",
    answer:
      "You can schedule a pickup through our website or mobile app. Simply enter your pickup address, select a convenient time slot, and prepare your package. Our driver will arrive at your specified time to collect the package. Pickup service is available Monday through Saturday.",
  },
  {
    question: "What if my package is lost or damaged?",
    answer:
      "We take full responsibility for packages in our care. If your package is lost or damaged, please contact our customer support immediately. We offer insurance coverage up to $100 for standard shipments, with additional insurance available for valuable items. Claims are processed within 5-7 business days.",
  },
  {
    question: "Can I change the delivery address after shipping?",
    answer:
      "Yes, you can modify the delivery address before the package reaches the final delivery facility. Log into your account, find your shipment, and request an address change. Please note that address changes may incur additional fees and could affect delivery time.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we provide international shipping to over 200 countries worldwide. International delivery times vary by destination, typically ranging from 5-15 business days. Additional customs fees and import duties may apply depending on the destination country.",
  },
];
function FAQAccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-accent transition-colors"
      >
        <span className="text-lg font-semibold pr-8">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className=" leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className=" px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Find answers to common questions about our parcel delivery services
        </p>
      </div>
      <div className=" rounded-2xl shadow-lg overflow-hidden">
        {faqData.map((item, index) => (
          <FAQAccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className=" mb-4">Still have questions?</p>
        <Button className=" px-8 py-3 rounded-full  transition-colors font-semibold">
          Contact Support
        </Button>
      </div>
    </div>
  );
}
