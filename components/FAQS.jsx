'use client'
import { useState } from 'react';

const  FAQS = ()=> {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the app compare prices across stores?',
      answer:
        'Our app uses advanced algorithms to scan and collect price data from various online retailers. It consolidates this data into an easy-to-read format, allowing users to see price variations across different stores in real-time. We ensure the information is updated frequently to reflect the latest deals and discounts.',
    },
    {
      question: 'Can I get alerts for specific products?',
      answer:
        'Absolutely! You can create personalized price alerts by selecting the products you’re interested in. Simply set your desired target price, and the app will notify you through push notifications or email when the price drops to your specified amount, helping you make timely purchase decisions.',
    },
    {
      question: 'Is the app free to use?',
      answer:
        'Yes, the app offers free access to core features, including basic price comparisons and tracking. For more advanced features, such as detailed analytics, exclusive deals, or priority alerts, a premium subscription plan may be available.',
    },
    {
      question: 'Which stores are included in the price comparisons?',
      answer:
        'The app partners with a diverse range of trusted online and local retailers, including major e-commerce platforms, electronics stores, and specialized shops. The list of supported stores is continually updated to include new marketplaces and niche retailers.',
    },
    {
      question: 'How accurate are the price alerts?',
      answer:
        'Price alerts are highly accurate, leveraging real-time data from retailers. However, there may be rare occasions when prices change between updates or due to rapid fluctuations during sales events. We recommend acting quickly once you receive a notification to take advantage of the best deals.',
    },
    {
      question: 'Can I track multiple products at once?',
      answer:
        'Yes, the app supports tracking multiple products simultaneously. You can create a personalized watchlist and add as many items as you like. Each product can have its own price threshold for alerts, ensuring you stay informed about all your favorite items in one place.',
    },
  ];
  
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-14 pb-20  bg-gray-50">
      <div className="w-3/4 mx-auto md:w-[60%]">
        <div className="text-left ml-7 my-10">
          <h5 className="text-center md:text-left text-xl md:text-3xl font-bold text-gray-800 py-4">FAQs</h5>
          <p className="text-sm text-gray-700">
          Answers to the most frequently asked questions.
          </p>
        </div>
        <div className="accordion-group ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 m-2 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${
                openIndex === index ? 'bg-purple-SECONDARY' : 'hover:bg-purple-SECONDARY'
              }`}
            >
              <button
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                className="accordion-toggle group inline-flex items-center justify-between leading-6 text-gray-800 w-full transition duration-500 text-left focus:outline-none"
              >
                <p className='text-sm'>{faq.question}</p>
                <svg
                  className={`text-gray-800 transition-transform duration-500 group-hover:text-purple-PRIMARY ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <p className="text-sm text-gray-800  mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FAQS