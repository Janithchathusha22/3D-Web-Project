import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does MetroQubix offer?",
    answer: "We offer a comprehensive suite of digital marketing services, including strategic direction, branding & design, product marketing, social media marketing, SEO, content marketing, web development, UI/UX design, and mobile application development.    ",
    value: "item-1",
  },
  {
    question: "Do you work with businesses in my industry?    ",
    answer:
      "Yes! We have experience working with a wide range of industries. We leverage our deep understanding of industry trends and challenges to tailor solutions that resonate with your target audience.      ",
    value: "item-2",
  },
  {
    question:
      "How much do your services cost?      ",
    answer:
      "Our pricing depends on the specific needs of your business and the scope of the project. ",
    value: "item-3",
  },
  {
    question: "How long does it take to see results from your marketing campaigns?    ",
    answer: "The timeframe for results can vary depending on your industry, goals, and competitive landscape. However, we focus on measurable strategies and provide regular reporting to track progress.",
    value: "item-4",
  },
  {
    question: "Do you offer ongoing maintenance and support?    ",
    answer: "Absolutely! We offer ongoing maintenance and support plans to ensure your website and marketing efforts run smoothly and continue to deliver results.    ",
    value: "item-5",
  },
  {
    question: "What kind of data and reporting do you provide?",
    answer: "We provide comprehensive data reports that track key metrics aligned with your specific goals. This allows us to measure progress, identify optimization opportunities, and ensure your marketing budget delivers a strong ROI.",
    value: "item-6",
  },
  {
    question: "Have brand questions? Chat with us! We're happy to help before you schedule a consultation.",
    answer: "Absolutely! We understand that exploring your brand's marketing needs can involve brainstorming and initial questions. We're happy to chat with you via WhatsApp to discuss your brand and answer any questions you may have.    ",
    value: "item-7",
  },
  
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
        
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3> */}
    </section>
  );
};
