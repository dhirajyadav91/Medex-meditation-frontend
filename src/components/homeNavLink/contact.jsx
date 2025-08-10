import React from 'react';

function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 tracking-tight">
          Contact Us
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto font-serif italic">
          We're here to assist you — get in touch anytime.
        </p>
      </header>

      <article className="space-y-6 text-gray-800 leading-relaxed font-serif text-lg">
        <p>If you have any questions or inquiries, please feel free to reach out to us.</p>
        <p>
          You can contact us via email at{' '}
          <a href="mailto:dhirajdhoni97@gmail.com" className="text-indigo-600 hover:underline">
            dhirajdhoni97@gmail.com
          </a>{' '}
          or by phone at{' '}
          <a href="tel:+919525398065" className="text-indigo-600 hover:underline">
            (+91) 9525398065
          </a>.
        </p>
        <p>We look forward to hearing from you!</p>
        <p>Our office hours are Monday to Friday, 9 AM to 5 PM.</p>
      </article>

      <footer className="mt-12 text-center">
        <p className="mb-6 text-gray-600 italic font-serif">Thank you for considering us!</p>
      </footer>
    </section>
  );
}

export default Contact;
