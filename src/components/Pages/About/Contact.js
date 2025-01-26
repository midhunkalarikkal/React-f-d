import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-slate-100 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-slate-600 mb-8">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
