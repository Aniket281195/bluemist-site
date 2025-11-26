import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid gap-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label className="flex flex-col">
            Name
            <input className="p-3 rounded bg-gray-900 border border-gray-700" required name="name" />
          </label>

          <label className="flex flex-col">
            Email
            <input type="email" className="p-3 rounded bg-gray-900 border border-gray-700" required name="email" />
          </label>

          <label className="flex flex-col">
            Phone
            <input className="p-3 rounded bg-gray-900 border border-gray-700" name="phone" />
          </label>

          <label className="flex flex-col">
            Message
            <textarea className="p-3 rounded bg-gray-900 border border-gray-700" rows={4} name="message"></textarea>
          </label>

          <button className="bg-white text-black font-bold py-3 rounded" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
