import React from 'react';
import Header from '../components/Header';
import ContactForm from '../features/ContactForm';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 h-80 rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.379257470731!2d-122.08424968410647!3d37.42199977982563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f8a51c4c87%3A0x2b2e5d6d6c4e7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1675828726517!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
