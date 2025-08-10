import React from 'react';

function Service() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 tracking-tight">
          Our Services
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto font-serif italic">
          Delivering tailored solutions that empower your success.
        </p>
      </header>

      <article className="space-y-6 text-gray-800 leading-relaxed font-serif text-lg">
        <p>
          We offer a wide range of services carefully designed to meet the specific needs of each client.
          With an emphasis on quality and innovation, our team ensures every solution is crafted with
          precision and care.
        </p>
        <p>
          Collaboration is at the heart of our approach. We work closely with you to understand your unique
          challenges and objectives, allowing us to deliver results that truly make a difference.
        </p>
        <p>
          Our experts bring a wealth of experience and dedication to every project, aiming to exceed
          expectations and support your growth in a rapidly changing landscape.
        </p>
      </article>

      <footer className="mt-12 text-center">
        <p className="mb-6 text-gray-600 italic font-serif">
          Thank you for considering our services. We look forward to partnering with you.
        </p>
        <a
          href="mailto:contact@yourcompany.com"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Get in Touch
        </a>
      </footer>
    </section>
  );
}

export default Service;
