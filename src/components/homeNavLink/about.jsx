import React from 'react';

function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 tracking-tight">
          About Us
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto font-serif italic">
          Passionate professionals committed to your success.
        </p>
      </header>

      <article className="space-y-6 text-gray-800 leading-relaxed font-serif text-lg">
        <p>
          We are a company dedicated to providing the best services to our customers, driven by excellence and innovation.
        </p>
        <p>
          Our team consists of experienced professionals who bring passion and expertise to every project.
        </p>
        <p>
          Collaboration is central to our values, and we work hard to build strong, trusting relationships with our clients.
        </p>
        <p>
          Our mission is to deliver high-quality solutions tailored to the unique needs of each client, helping them thrive.
        </p>
      </article>

      <footer className="mt-12 text-center">
        <p className="mb-6 text-gray-600 italic font-serif">
          Thank you for considering us as your trusted partner in success.
        </p>
      </footer>
    </section>
  );
}

export default About;
