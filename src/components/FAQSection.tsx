import React, { useState } from 'react';

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Our payment system is secure and compliant with industry standards."
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll help you transition smoothly between plans."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No, all our plans are month-to-month with no long-term commitment required. You have the flexibility to cancel or modify your subscription at any time."
  },
  {
    question: "What's included in the support?",
    answer: "Our support includes 24/7 email assistance, priority phone support for enterprise plans, and comprehensive documentation. We're here to help you succeed."
  }
];

export default function FAQSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  // Function to handle card click on mobile
  const handleCardClick = (index: number) => {
    if (window.innerWidth < 768) { // Only for mobile screens
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  return (
    <section className="relative py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative w-full aspect-square group"
              style={{ perspective: '1000px' }}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`absolute inset-0 transition-transform duration-[0.987s] transform-style-preserve-3d
                  md:group-hover:rotate-y-180 ${flippedIndex === index ? 'rotate-y-180' : ''}`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.618, 0, 0.382, 1)'
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-[1.618rem] rounded-[0.618rem]
                    bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20
                    backface-hidden transform-style-preserve-3d group-hover:shadow-lg
                    group-hover:shadow-purple-500/10 transition-shadow duration-300
                    cursor-pointer md:cursor-default"
                >
                  <h3 className="text-xl font-semibold text-white text-center">
                    {faq.question}
                  </h3>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-[1.618rem] rounded-[0.618rem]
                    bg-gradient-to-br from-[#4DC035]/10 to-black border border-[#4DC035]/20
                    backface-hidden transform-style-preserve-3d rotate-y-180
                    group-hover:shadow-lg group-hover:shadow-[#4DC035]/10 transition-shadow duration-300
                    cursor-pointer md:cursor-default"
                >
                  <p className="text-white/90 text-center">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}