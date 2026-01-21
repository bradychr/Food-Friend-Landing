import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'When will the app launch?',
      answer: 'We\'re targeting a launch in Q2 2026. Join our waitlist to be notified as soon as we go live and get early access!',
    },
    {
      id: 2,
      question: 'Will it work on my phone?',
      answer: 'Sous Chef will be available on both iOS (iPhone) and Android devices. We\'re building with React Native to ensure a great experience on both platforms.',
    },
    {
      id: 3,
      question: 'How accurate is the ingredient recognition?',
      answer: 'Our AI model is trained to recognize ingredients with 85%+ accuracy, and we\'re constantly improving it. You can always manually edit or add ingredients if needed.',
    },
    {
      id: 4,
      question: 'Is my data private and secure?',
      answer: 'Absolutely. Your photos are only used for ingredient recognition and are not stored permanently. We take your privacy seriously and will never share your personal information with third parties.',
    },
    {
      id: 5,
      question: 'Will the app cost money?',
      answer: 'Sous Chef will be free to download with basic features available at no cost. We may introduce premium features in the future, but core functionality will always remain free.',
    },
    {
      id: 6,
      question: 'How will I know when the app launches?',
      answer: 'Join our waitlist! We\'ll send you an email notification as soon as Sous Chef is available for download, along with exclusive early access opportunities.',
    },
    {
      id: 7,
      question: 'Can I suggest features or provide feedback?',
      answer: 'Yes! We\'d love to hear from you. After joining the waitlist, you\'ll receive updates and opportunities to share feedback that directly influences our development.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about Sous Chef
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-neutral-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-answer-${faq.id}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5 text-neutral-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
